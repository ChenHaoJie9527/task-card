"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export default function FormDeleteButton() {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit" variant="destructive" size="sm">
      delete
    </Button>
  );
}
