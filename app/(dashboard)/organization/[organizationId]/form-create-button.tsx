"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export default function FormCreateButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="sm" disabled={pending}>
      submit
    </Button>
  );
}
