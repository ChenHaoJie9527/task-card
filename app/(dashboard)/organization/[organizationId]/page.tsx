import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { db } from "@/db";

export default async function OrganizationPage({ params }: { params: any }) {
  const boardList = await db.board.findMany({
    where: {},
  });
  return (
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
      {boardList.map((board) => (
        <div key={board.id} className="flex items-center justify-start">
          <span>{board.id}: </span>
          <span>{board.title}</span>
        </div>
      ))}
    </form>
  );
}
