import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

export const GET = async (
  _request: Request,
  { params }: { params: Promise<{ company: string }> },
) => {
  const { company } = await params;
  const headersList = await headers();

  const token = headersList.get("X-TOKEN");
  if (token !== process.env.X_TOKEN) {
    return Response.json({ error: "Unauthorized request" }, { status: 403 });
  }

  revalidatePath(`/resume/${company}`);
  return Response.json({ message: `Revalidated /resume/${company}` });
};
