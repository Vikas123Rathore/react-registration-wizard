import { z } from "zod";

export const stepOneSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(20, "First name must be at most 20 characters"),

  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(20, "Last name must be at most 20 characters"),

  dob: z
    .string()
    .min(1, "Date of birth is required"),
});

export const stepTwoSchema = z
  .object({
    email: z
      .string()
      .email("Please enter a valid email"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters"),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export const formSchema = stepOneSchema.merge(stepTwoSchema);
