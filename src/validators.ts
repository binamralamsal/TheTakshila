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

export const updateUserSchema = registerUserSchema.partial();

export const newCourseSchema = z.object({
  featuredImage: z.string().min(3, { message: "Featured Image is required" }),
  title: z.string().min(5),
  duration: z.string().min(3),
  skillLevel: z.string().min(3),
  certificate: z.boolean().default(false),
  instructor: z.string().min(3),
  price: z.number(),
  content: z.string().min(10),
});

export type LoginUserCredentialsDTO = z.infer<typeof loginUserSchema>;
export type RegisterUserCredentialsDTO = z.infer<typeof registerUserSchema>;
export type UpdateUserCredentialsDTO = z.infer<typeof updateUserSchema>;

export type NewCourseCredentialsDTO = z.infer<typeof newCourseSchema>;
