import { NextResponse } from "next/server";
import { addReview } from "@/lib/server/reviews";

export async function POST(request: Request) {
  const form = await request.formData();
  await addReview(form);

  return NextResponse.redirect(new URL("/#danh-gia-khach-hang", request.url), {
    status: 303,
  });
}
