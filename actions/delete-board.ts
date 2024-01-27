"use server";

import { db } from "@/db";
import { revalidatePath } from "next/cache";

export default async function deleteBoard(id: string) {
  await db.board.delete({
    where: {
      id,
    },
  });
  revalidatePath("/organization/org_2bIgViphd27VWvTPusy2BcEOXWY");
}
