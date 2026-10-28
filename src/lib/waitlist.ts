import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

export type WaitlistSource = "hero" | "footer";

export const emailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .min(1, { message: "Please enter your email." })
  .max(255, { message: "That email is too long." })
  .email({ message: "That doesn't look like a valid email." });

export type JoinResult = { ok: true } | { ok: false; error: string; duplicate?: boolean };

export async function joinWaitlist(raw: string, source: WaitlistSource): Promise<JoinResult> {
  const parsed = emailSchema.safeParse(raw);
  if (!parsed.success) return { ok: false, error: parsed.error.issues[0].message };
  const { error } = await supabase.from("waitlist").insert({ email: parsed.data, source });
  if (error) {
    if (error.code === "23505") {
      return { ok: false, duplicate: true, error: "You're already on the list. We'll be in touch soon." };
    }
    return { ok: false, error: "Something went wrong. Please try again." };
  }
  return { ok: true };
}
