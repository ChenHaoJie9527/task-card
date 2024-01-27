"use client";

import { Input } from "@/components/ui/input";
import { useFormStatus } from "react-dom";

interface FormInputProps {
  errors?: {
    [key: string]: string[];
  };
}
export default function FormInput({ errors }: FormInputProps) {
  const { pending } = useFormStatus();
  return (
    <div className="flex flex-col">
      <Input
        type="text"
        id="title"
        name="title"
        required
        placeholder="pleas title"
        disabled={pending}
      />
      {errors?.title ? (
        <div>
          {errors.title?.map((error) => {
            return (
              <p key={error} className="text-rose-500">
                {error}
              </p>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
