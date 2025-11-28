import { useState } from "react";

export const useForm = (initialValues = {}) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });

        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: null,
            });
        }
    };

    const setFieldValue = (name, value) => {
        setValues({
            ...values,
            [name]: value,
        });
    };

    const setFieldError = (name, error) => {
        setErrors({
            ...errors,
            [name]: error,
        });
    };

    const reset = () => {
        setValues(initialValues);
        setErrors({});
    };

    return {
        values,
        errors,
        handleChange,
        setFieldValue,
        setFieldError,
        setErrors,
        reset,
    };
};
