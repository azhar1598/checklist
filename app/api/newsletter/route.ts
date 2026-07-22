import { isValidEmail, subscribeToNewsletter } from "@/lib/newsletter";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: { email?: string; website?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const email = body.email?.trim().toLowerCase();

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const result = await subscribeToNewsletter(email);

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 503 });
  }

  return NextResponse.json({
    ok: true,
    alreadySubscribed: result.alreadySubscribed ?? false,
  });
}
