import { z } from 'zod'

export const contactSchema = z.object({
  firstname: z.string().min(1, "First name is required"),
  lastname: z.string().min(1, "Last name is required"),
  email: z.email("Invalid email"),
  phone: z.string().optional(),
  details: z.string().optional(),
});