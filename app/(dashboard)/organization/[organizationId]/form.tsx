"use client";
import { create } from "@/actions/create-board";
import { useFormState } from "react-dom";
import FormInput from "../form-input";
import FormCreateButton from "./form-create-button";

export default function Form() {
  const initialState = {
    message: "",
    errors: {},
  };
  const [state, dispatch] = useFormState(create, initialState);

  return (
    <form action={dispatch}>
      <div className="flex flex-col space-y-2">
        <FormInput errors={state?.errors} />
      </div>
      <FormCreateButton />
    </form>
  );
}
