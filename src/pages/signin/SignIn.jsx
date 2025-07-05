import XIcon from "@mui/icons-material/X";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import SignInButton from "../../utils/buttons/SignInButton";
import "../welcome/WelcomePage.css";
import SignUpButton from "../../utils/buttons/SignUpButton";

function SignIn() {
  const [isVisible, setIsVisible] = useState(true);

  const navigate = useNavigate();

  const handleClose = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="signin__floatContainer">
      <div className="signin__closeButton" onClick={handleClose}>
        <CloseIcon onClick={handleClose} />
      </div>
      {isVisible ? (
        <div className="signin__mainContainer">
          <div className="signin__logoContainer">
            <XIcon />
          </div>
          <div className="signIn__header">
            <h2>Sign in to X</h2>
          </div>
          <div className="signIn__formContainer">
            <form className="signIn__form">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
              <SignUpButton text="Next" flow="true" />
              <SignInButton text="Forgot password?" />
            </form>
          </div>
        </div>
      ) : (
        navigate("/")
      )}
    </div>
  );
}

export default SignIn;
