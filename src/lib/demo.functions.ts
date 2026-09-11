import { createServerFn } from "@tanstack/react-start";
import * as z from "zod";

export const CONSENT_TEXT =
  "I agree that Med4One may contact me about this enquiry and store my details in line with the Med4One Privacy Policy.";

const demoRequestSchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9]{10}$/),
  pharmacyName: z.string().trim().min(2).max(160),
  message: z.string().trim().max(1500).optional().or(z.literal("")),
  source: z.string().trim().max(60).optional(),
  consentGiven: z.literal(true),
  // anti-spam
  honeypot: z.string().max(0).optional().or(z.literal("")),
  elapsedMs: z.number().int().nonnegative(),
});

export type DemoRequestInput = z.infer<typeof demoRequestSchema>;

export const submitDemoRequest = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => demoRequestSchema.parse(input))
  .handler(async ({ data }) => {
    if (data.honeypot) {
      return { ok: true as const, reference: null };
    }
    if (data.elapsedMs < 1200) {
      throw new Error("Submission looked automated. Please try again.");
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: row, error } = await supabaseAdmin
      .from("demo_requests")
      .insert({
        full_name: data.fullName,
        email: data.email.toLowerCase(),
        phone: data.phone,
        pharmacy_name: data.pharmacyName,
        message: data.message || null,
        source: data.source || "homepage",
        consent_given: true,
        consent_text: CONSENT_TEXT,
        consent_at: new Date().toISOString(),
      })
      .select("id")
      .single();

    if (error) {
      console.error("[demo_requests] insert failed", error.message);
      throw new Error("We could not save your request. Please try again or WhatsApp us.");
    }

    return { ok: true as const, reference: row.id.slice(0, 8).toUpperCase() };
  });
