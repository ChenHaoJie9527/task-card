import { z } from "zod";

export const createBoard = z.object({
  title: z.string(),
});
