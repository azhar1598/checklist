const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string): boolean {
  return EMAIL_PATTERN.test(email);
}

export type SubscribeResult =
  | { ok: true; alreadySubscribed?: boolean }
  | { ok: false; error: string };

function getFromAddress(): string {
  return process.env.RESEND_FROM_EMAIL ?? "NoR <hello@nororg.com>";
}

function getLogoUrl(): string {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nororg.com";
  return `${siteUrl.replace(/\/$/, "")}/logo.png`;
}

function buildWelcomeEmailHtml(): string {
  const logoUrl = getLogoUrl();

  return `
    <div style="font-family: Georgia, 'Times New Roman', serif; max-width: 560px; margin: 0 auto; padding: 40px 24px; color: #0a0a0a;">
      <a href="https://nororg.com" style="display: inline-block; margin: 0 0 28px; text-decoration: none;">
        <img
          src="${logoUrl}"
          alt="NoR"
          width="80"
          height="32"
          style="display: block; height: 32px; width: auto; border: 0;"
        />
      </a>
      <h1 style="font-size: 28px; font-weight: 400; line-height: 1.2; margin: 0 0 20px;">Thanks for subscribing.</h1>
      <p style="font-size: 16px; line-height: 1.6; color: #6b6b6b; margin: 0 0 16px;">
        You'll hear from us occasionally — product updates, research notes, and news from the NoR studio.
      </p>
      <p style="font-size: 16px; line-height: 1.6; color: #6b6b6b; margin: 0;">
        Until then, explore what we're building at
        <a href="https://nororg.com/products" style="color: #0a0a0a;">nororg.com</a>.
      </p>
    </div>
  `;
}

async function sendWelcomeEmail(email: string, apiKey: string): Promise<void> {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: getFromAddress(),
      to: email,
      subject: "Welcome to NoR",
      html: buildWelcomeEmailHtml(),
    }),
  });

  if (!response.ok) {
    const data = await response.json().catch(() => null);
    console.error("Welcome email failed:", response.status, data);
  }
}

export async function subscribeToNewsletter(email: string): Promise<SubscribeResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    console.error("Newsletter: RESEND_API_KEY or RESEND_AUDIENCE_ID is not configured");
    return { ok: false, error: "Newsletter signup is not configured yet." };
  }

  const response = await fetch(
    `https://api.resend.com/audiences/${audienceId}/contacts`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        unsubscribed: false,
      }),
    },
  );

  if (response.ok) {
    await sendWelcomeEmail(email, apiKey);
    return { ok: true };
  }

  const data = (await response.json().catch(() => null)) as {
    message?: string;
    name?: string;
  } | null;

  const message = data?.message?.toLowerCase() ?? "";

  if (
    response.status === 409 ||
    message.includes("already") ||
    message.includes("exist")
  ) {
    return { ok: true, alreadySubscribed: true };
  }

  console.error("Newsletter subscribe failed:", response.status, data);

  return {
    ok: false,
    error: "Something went wrong. Please try again in a moment.",
  };
}
