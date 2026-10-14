const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nororg.com";
const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@nororg.com";

export const site = {
  url: siteUrl.replace(/\/$/, ""),
  contactEmail,
  contactMailto: `mailto:${contactEmail}`,
  instagramUrl:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://instagram.com/nororg",
  productUrls: {
    doop: process.env.NEXT_PUBLIC_DOOP_URL ?? "https://doop.nororg.com",
    leap: process.env.NEXT_PUBLIC_LEAP_URL ?? "https://leap.nororg.com",
  },
  analytics: {
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "",
    clarityProjectId: process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID ?? "",
  },
} as const;

export function getResendConfig() {
  return {
    apiKey: process.env.RESEND_API_KEY ?? "",
    audienceId: process.env.RESEND_AUDIENCE_ID ?? "",
    fromEmail:
      process.env.RESEND_FROM_EMAIL ?? `NoR <${site.contactEmail}>`,
  };
}
