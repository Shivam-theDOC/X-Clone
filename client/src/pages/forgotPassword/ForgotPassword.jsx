import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import XIcon from "@mui/icons-material/X";
import "./ForgotPassword.css";

function ForgotPassword({ handleClose }) {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (!email.trim()) {
            setError("Please enter your email");
            return;
        }

        console.log("Password reset requested for:", email);
        setSuccess(true);
    };

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <div className="mainContainer">
            <div className="forgotPassword__container">
                <div className="forgotPassword__header">
                    <div className="forgotPassword__closeButton" onClick={handleClose}>
                        <CloseIcon />
                    </div>
                    <div className="forgotPassword__logo">
                        <XIcon fontSize="inherit" />
                    </div>
                </div>

                <div className="forgotPassword__content">
                    {success ? (
                        <div className="forgotPassword__success">
                            <h1>Check your email</h1>
                            <p>
                                We've sent a password reset link to <strong>{email}</strong>.
                                Please check your inbox and follow the instructions.
                            </p>
                            <button
                                className="forgotPassword__button"
                                onClick={handleClose}
                            >
                                Done
                            </button>
                        </div>
                    ) : (
                        <>
                            <h1>Find your X account</h1>
                            <p className="forgotPassword__subtitle">
                                Enter the email, phone number, or username associated with
                                your account to change your password.
                            </p>

                            {error && <div className="forgotPassword__error">{error}</div>}

                            <input
                                type="text"
                                className="forgotPassword__input"
                                placeholder="Email, phone number, or username"
                                value={email}
                                onChange={handleInputChange}
                                autoFocus
                            />

                            <button
                                className="forgotPassword__button"
                                onClick={handleSubmit}
                                disabled={!email.trim()}
                            >
                                Next
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
