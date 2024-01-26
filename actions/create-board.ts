"use server";

import { db } from "@/db";
import { createBoard } from "@/zod";

export const create = async (form: FormData) => {
  const { title } = createBoard.parse({ title: form.get("title") });
  await db.board.create({
    data: {
      title,
    },
  });
};
