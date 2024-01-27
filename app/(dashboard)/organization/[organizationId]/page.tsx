import { db } from "@/db";
import { Board } from "./board";
import Form from "./form";

export default async function OrganizationPage({ params }: { params: any }) {
  const boardList = await db.board.findMany({
    where: {},
  });
  return (
    <div className="flex flex-col">
      <Form />
      {boardList.map((board) => (
        <Board key={board.id} id={board.id} title={board.title} />
      ))}
    </div>
  );
}
