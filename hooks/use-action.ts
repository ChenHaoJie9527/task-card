import { useState, useCallback } from "react";
import type { ActionState, FieldErrors } from "@/lib/create-safe-action";

interface UseActionOptions<TOutput> {
    onSuccess?: (data: TOutput) => void;
    onError?: (error: string) => void;
    onComplete?: () => void;
}

type Action<T, O> = (data: T) => Promise<ActionState<T, O>>;

const useAction = <T, O>(
    action: Action<T, O>,
    options: UseActionOptions<O> = {}
) => {
    const [fieldErrors, setFieldErrors] = useState<FieldErrors<T> | undefined>(undefined);
    const [error, setError] = useState<string | undefined>(undefined)
    const [data, setData] = useState<O | undefined>(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const execute = useCallback(async (data: T) => {
        setIsLoading(true)
        try {
            const result = await action(data)
            if (!result) {
                return
            }
            if (result.fieldErrors) {
                setFieldErrors(result.fieldErrors)
            }
            if (result.error) {
                setError(result.error)
                options?.onError?.(result.error)
            }
            if (result.data) {
                setData(result.data)
                options.onSuccess?.(result.data)
            }
        }
        finally {
            setIsLoading(false)
            options.onComplete?.()
        }
    }, [action, options])

    return {
        execute,
        fieldErrors,
        error,
        data,
        isLoading
    }
}

export default useAction;
