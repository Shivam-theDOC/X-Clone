export const handleApiError = (error, setError) => {
    console.error("API Error:", error);

    if (error.response) {
        const status = error.response.status;
        const message = error.response.data?.message;

        switch (status) {
            case 400:
                setError(message || "Invalid input. Please check your data.");
                break;
            case 401:
                setError(message || "Invalid credentials. Please try again.");
                break;
            case 404:
                setError(message || "Not found. Please check your information.");
                break;
            case 409:
                setError(message || "This resource already exists.");
                break;
            case 500:
                setError("Server error. Please try again later.");
                break;
            default:
                setError(message || "An error occurred. Please try again.");
        }
    } else if (error.request) {
        setError("Network error. Please check your connection.");
    } else {
        setError("An unexpected error occurred.");
    }
};

export const getErrorMessage = (error) => {
    if (error.response) {
        return error.response.data?.message || "An error occurred";
    } else if (error.request) {
        return "Network error. Please check your connection.";
    } else {
        return "An unexpected error occurred.";
    }
};
