import { ImageResponse } from "next/og";

import Template from "./components/template";

export async function GET(request: Request) {
  const searchParams = new URLSearchParams(new URL(request.url).searchParams);

  return new ImageResponse(
    Template({
      title: searchParams.get("title"),
      subtitle: searchParams.get("subtitle"),
    }),
    {
      height: 360,
      width: 640,
    }
  );
}
