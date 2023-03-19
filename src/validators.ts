import { z } from "zod";

export const loginUserSchema = z.object({
  email: z.string().email().min(3),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export const registerUserSchema = loginUserSchema.merge(
  z.object({
    name: z.string().min(3),
    isAdmin: z.boolean().optional(),
  })
);

export type LoginUserCredentialsDTO = z.infer<typeof loginUserSchema>;
export type RegisterUserCredentialsDTO = z.infer<typeof registerUserSchema>;
