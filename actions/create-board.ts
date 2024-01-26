"use server";

import { db } from "@/db";
import { createBoard } from "@/zod";
import { revalidatePath } from "next/cache";

export const create = async (form: FormData) => {
  const { title } = createBoard.parse({ title: form.get("title") });
  await db.board.create({
    data: {
      title,
    },
  });

  revalidatePath("/organization/org_2bIgViphd27VWvTPusy2BcEOXWY")
};
