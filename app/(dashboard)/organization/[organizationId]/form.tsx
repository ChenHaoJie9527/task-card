"use client";
import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";

export default function Form() {
  const initialState = {
    message: '',
    errors: {},
  };
  const [state, dispatch] = useFormState(create, initialState);
  return (
    <form action={dispatch}>
      <div className="flex flex-col space-y-2">
        <input
          type="text"
          id="title"
          name="title"
          required
          className="border"
          placeholder="pleas title"
        />
        {state?.errors?.title ? (
          <div>
            {state.errors.title?.map((error) => {
              return (
                <p key={error} className="text-rose-500">
                  {error}
                </p>
              );
            })}
          </div>
        ) : null}
      </div>
      <Button type="submit" size="sm">
        submit
      </Button>
    </form>
  );
}
