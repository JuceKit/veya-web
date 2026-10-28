import { describe, it, expect } from "vitest";
import { emailSchema } from "./waitlist";

describe("waitlist email validation", () => {
  it("accepts and normalises a valid email", () => {
    expect(emailSchema.parse("  Ada@Example.com ")).toBe("ada@example.com");
  });
  it("rejects an invalid email", () => {
    expect(emailSchema.safeParse("not-an-email").success).toBe(false);
  });
  it("rejects an empty email", () => {
    expect(emailSchema.safeParse("   ").success).toBe(false);
  });
});
