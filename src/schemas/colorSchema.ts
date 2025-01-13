import { z } from "zod";

export const colorSchema = z.object({
    color: z.string().min(1, {
      message: "Please enter a color name.",
    }),
})