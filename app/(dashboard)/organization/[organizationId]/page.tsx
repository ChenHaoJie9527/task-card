import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { db } from "@/db";
import { Board } from "./board";

export default async function OrganizationPage({ params }: { params: any }) {
  const boardList = await db.board.findMany({
    where: {},
  });
  return (
    <div className="flex flex-col">
      <form action={create}>
        <input
          type="text"
          id="title"
          name="title"
          required
          className="border"
          placeholder="pleas title"
        />
        <Button type="submit" size="sm">
          submit
        </Button>
      </form>
      {boardList.map((board) => (
        <Board key={board.id} id={board.id} title={board.title} />
      ))}
    </div>
  );
}
