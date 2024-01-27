"use server";

import { db } from "@/db";
import { createSafeAction } from "@/lib/create-safe-action";
import { CreateBoardSchema } from "@/schema";
import { InputType, ReturnType } from "@/schema/types";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

export const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, user } = auth();
  if (!userId) {
    return {
      error: "Unauthorized",
    };
  }
  const { title } = data;

  let board;
  try {
    board = await db.board.create({
      data: {
        title,
      },
    });
  } catch (error) {
    return {
      error: "Could not create board",
    };
  }

  revalidatePath(`/board/${board.id}`);

  return {
    data: board,
  };
};

export const createBoard = createSafeAction(CreateBoardSchema, handler);
