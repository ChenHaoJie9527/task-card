import deleteBoard from "@/actions/delete-board";
import { Button } from "@/components/ui/button";
interface BoardProps {
  id: string;
  title: string;
}

export const Board = async (board: BoardProps) => {
  const deleteBoardWithId = deleteBoard.bind(null, board.id);

  return (
    <form action={deleteBoardWithId} className="flex items-center gap-x-2">
      <div>name: {board.title}</div>
      <Button type="submit" variant="destructive" size="sm">
        delete
      </Button>
    </form>
  );
};
