export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validateRequired = (value, fieldName = "This field") => {
    if (!value || !value.toString().trim()) {
        return `${fieldName} is required`;
    }
    return null;
};

export const validatePassword = (password) => {
    if (!password) {
        return "Password is required";
    }
    if (password.length < 6) {
        return "Password must be at least 6 characters";
    }
    return null;
};

export const validateName = (name) => {
    if (!name || !name.trim()) {
        return "Name is required";
    }
    if (name.trim().length < 2) {
        return "Name must be at least 2 characters";
    }
    return null;
};

export const validateDateOfBirth = (month, day, year) => {
    if (!month || !day || !year) {
        return "Please select your complete date of birth";
    }

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();

    if (age < 13) {
        return "You must be at least 13 years old";
    }

    return null;
};
