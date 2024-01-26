import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";

export default function OrganizationPage({ params }: { params: any }) {
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
    </form>
  );
}
