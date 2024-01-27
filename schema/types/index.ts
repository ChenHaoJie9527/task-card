import { z } from "zod";
import { Board } from "@prisma/client";
import type { ActionState } from "@/lib/create-safe-action";
import { CreateBoardSchema } from "..";

export type InputType = z.infer<typeof CreateBoardSchema>;

export type ReturnType = ActionState<InputType, Board>;
