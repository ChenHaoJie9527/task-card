"use server";

import { db } from "@/db";
import { createBoard } from "@/zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type CreateState = {
  errors?: {
    title?: string[];
  };
  message?: string | null;
};

/**
 * TODO: Create a new board
 * @param prevForm 上一个表单对象
 * @param form 当前表单对象
 * @returns
 */
export const create = async (prevState: CreateState, form: FormData) => {
  const validatedFiles = createBoard.safeParse({ title: form.get("title") });

  if (!validatedFiles.success) {
    return {
      errors: validatedFiles.error.flatten().fieldErrors,
      message: "Missing fields",
    };
  }

  const { title } = validatedFiles.data;

  try {
    await db.board.create({
      data: {
        title,
      },
    });
  } catch (error) {
    return {
      message: "Failed to create board",
    };
  }

  revalidatePath("/organization/org_2bIgViphd27VWvTPusy2BcEOXWY");
  redirect("/organization/org_2bIgViphd27VWvTPusy2BcEOXWY");
};
