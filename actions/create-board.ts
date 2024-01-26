"use server";

import { db } from "@/db";

export const create = async (form: FormData) => {
  const title = form.get("title") as string;
  // TODO: create board in to title
  await db.board.create({
    data: {
      title,
    },
  });
};
