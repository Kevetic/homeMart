import zod from "zod";

const envSchema = zod.object({
  DATABASE_URL: zod.string().min(1, "Must be at least 1 Character"),
  GOOGLE_CLIENT_ID: zod.string().min(1, "Must be at least 1 Character"),
  GOOGLE_CLIENT_SECRET: zod.string().min(1, "Must be at least 1 Character"),
  NEXTAUTH_URL: zod.string().min(1, "Must be at least 1 Character"),
  NEXTAUTH_SECRET: zod.string().min(1, "Must be at least 1 Character"),
});

export const env = envSchema.parse(process.env);
