import { fetchCompany } from "@/nocodb/api";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

export const POST = async (
  _request: Request,
  { params }: { params: Promise<{ company: string }> },
) => {
  try {
    const cookie = (await cookies()).get("__x_token");
    const encrypted_token = cookie?.value as string;
    const {
      payload: { token },
    } = await jwtVerify(
      encrypted_token,
      new TextEncoder().encode(process.env.JWT_SECRET),
      { algorithms: ["HS256"] },
    );

    if (token !== process.env.X_TOKEN) {
      return Response.json(
        { message: "Unauthorized request" },
        { status: 403 },
      );
    }
  } catch (error) {
    return Response.json({ message: "Unauthorized request" }, { status: 403 });
  }

  const { company } = await params;
  let nocodb_response, telegram_bot_response, companyData;

  try {
    // Update the profile view count.
    companyData = await fetchCompany(company);
    const payload = {
      Id: companyData.Id,
      profile_views: Number(companyData.profile_views) + 1,
    }

    nocodb_response = await fetch(
      "https://app.nocodb.com/api/v2/tables/mvn11rzjs9f465t/records",
      {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "xc-token": process.env.NOCODB_TOKEN as string,
        },
        body: JSON.stringify(payload),
      },
    );
  } catch (error: any) {
    return Response.json({ message: error.message }, { status: 500 });
  }

  // Skip the Telegram notification when the company is "default".
  if (company === "default") {
    return Response.json({
      nocodb: nocodb_response.status,
      telegram_bot: "Notification skipped",
    });
  }

  try {
    // Notify me on telegram.
    telegram_bot_response = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: `Your resume for ${companyData.title} has ${companyData.profile_views + 1} views 🎉`,
        }),
      },
    );
  } catch (error: any) {
    return Response.json({ message: error.message }, { status: 500 });
  }

  return Response.json({
    nocodb: nocodb_response.status,
    telegram_bot: telegram_bot_response.status,
  });
};
