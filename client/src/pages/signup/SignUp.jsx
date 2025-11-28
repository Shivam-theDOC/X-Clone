import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import XIcon from "@mui/icons-material/X";
import "./SignUp.css";
import { register } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { validateEmail, validateName, validateDateOfBirth } from "../../utils/validation";

function SignUp({ handleClose }) {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        month: "",
        day: "",
        year: "",
        password: ""
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleNext = async (e) => {
        e.preventDefault();
        setError("");

        const nameError = validateName(formData.name);
        if (nameError) {
            setError(nameError);
            return;
        }

        if (!validateEmail(formData.email)) {
            setError("Please enter a valid email address");
            return;
        }

        const dobError = validateDateOfBirth(
            months.indexOf(formData.month) + 1,
            formData.day,
            formData.year
        );
        if (dobError) {
            setError(dobError);
            return;
        }

        setLoading(true);
        try {
            const dateOfBirth = `${formData.year}-${String(months.indexOf(formData.month) + 1).padStart(2, '0')}-${String(formData.day).padStart(2, '0')}`;
            const response = await register(
                formData.name,
                formData.email,
                dateOfBirth
            );

            console.log("Registration successful:", response);

            if (response.token && response.user) {
                login(response.user, response.token);
            }

            navigate("/home");
            if (handleClose) {
                handleClose();
            }
        } catch (error) {
            console.error("Registration failed:", error);

            if (error.response?.status === 400) {
                setError(error.response.data.message || "Invalid input");
            } else if (error.response?.status === 409) {
                setError("An account with this email already exists");
            } else {
                setError("An error occurred. Please try again later.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mainContainer">
            <div className="signup__container">
                <div className="signup__header">
                    <div className="signup__closeButton" onClick={handleClose}>
                        <CloseIcon />
                    </div>
                    <div className="signup__logo">
                        <XIcon fontSize="inherit" />
                    </div>
                </div>

                <div className="signup__content">
                    <h1>Create your account</h1>

                    {error && <div className="signup__error">{error}</div>}

                    <div className="signup__inputWrapper">
                        <input
                            type="text"
                            name="name"
                            className="signup__input"
                            placeholder=" "
                            value={formData.name}
                            onChange={handleInputChange}
                            maxLength={50}
                            autoFocus
                        />
                        <label className="signup__label">Name</label>
                        <span className="signup__charCount">{formData.name.length} / 50</span>
                    </div>

                    <div className="signup__inputWrapper">
                        <input
                            type="email"
                            name="email"
                            className="signup__input"
                            placeholder=" "
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <label className="signup__label">Email</label>
                    </div>

                    <div className="signup__dobSection">
                        <h3>Date of birth</h3>
                        <p className="signup__dobText">
                            This will not be shown publicly. Confirm your own age, even if this
                            account is for a business, a pet, or something else.
                        </p>

                        <div className="signup__dobInputs">
                            <div className="signup__selectWrapper">
                                <select
                                    name="month"
                                    className="signup__select"
                                    value={formData.month}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Month</option>
                                    {months.map((month) => (
                                        <option key={month} value={month}>
                                            {month}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="signup__selectWrapper">
                                <select
                                    name="day"
                                    className="signup__select"
                                    value={formData.day}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Day</option>
                                    {days.map((day) => (
                                        <option key={day} value={day}>
                                            {day}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="signup__selectWrapper">
                                <select
                                    name="year"
                                    className="signup__select"
                                    value={formData.year}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Year</option>
                                    {years.map((year) => (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <button
                        className="signup__nextButton"
                        onClick={handleNext}
                        disabled={loading || !formData.name || !formData.email || !formData.month || !formData.day || !formData.year}
                    >
                        {loading ? "Creating account..." : "Next"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
