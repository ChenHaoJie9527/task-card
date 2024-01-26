import { db } from "@/db";

export default function OrganizationPage({ params }: { params: any }) {
  const action = async (form: FormData) => {
    "use server";

    const title = form.get("title") as string;
    // TODO: create board in to title
    await db.board.create({
      data: {
        title,
      },
    });
  };
  return (
    <form action={action}>
      <input
        type="text"
        id="title"
        name="title"
        required
        className="border"
        placeholder="pleas title"
      />
    </form>
  );
}
