import { z } from "zod";

export const productFormSchema = z.object({
  quantity: z.number(),
  productId: z.number(),
});

export type ProductForm = z.infer<typeof productFormSchema>;
