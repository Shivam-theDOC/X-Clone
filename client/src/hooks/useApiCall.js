import { useState } from "react";
import { handleApiError } from "../utils/errorHandler";

export const useApiCall = (apiFunction) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState(null);

    const execute = async (...args) => {
        setLoading(true);
        setError("");
        setData(null);

        try {
            const result = await apiFunction(...args);
            setData(result);
            return result;
        } catch (err) {
            handleApiError(err, setError);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const reset = () => {
        setLoading(false);
        setError("");
        setData(null);
    };

    return { execute, loading, error, data, reset, setError };
};
