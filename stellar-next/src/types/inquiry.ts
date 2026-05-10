import { z } from 'zod';

export const inquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  phone: z.string().min(10, 'Please enter a valid phone number').max(15),
  city: z.string().min(2, 'Please enter your city').max(50),
  project_type: z.enum(['new', 'maintenance', 'modernization', 'other']),
  message: z.string().max(1000).optional().or(z.literal('')),
});

export type InquiryInput = z.infer<typeof inquirySchema>;
