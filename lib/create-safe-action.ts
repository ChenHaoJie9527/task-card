import { z } from "zod";

export type FieldErrors<T> = {
  [K in keyof T]?: string[];
};

export type ActionState<TInput, TOutput> = {
  fieldErrors?: FieldErrors<TInput>;
  error?: string | null;
  data?: TOutput;
};

export const createSafeAction = <TInput, TOutput>(
  schema: z.ZodSchema<TInput>,
  handler: (validateData: TInput) => Promise<ActionState<TInput, TOutput>>
) => {
  return async (data: TInput): Promise<ActionState<TInput, TOutput>> => {
    const validateDataResult = schema.safeParse(data);
    if (!validateDataResult.success) {
      return {
        fieldErrors: validateDataResult.error.flatten()
          .fieldErrors as FieldErrors<TInput>,
      };
    }
    return handler(validateDataResult.data);
  };
};
