import XIcon from "@mui/icons-material/X";

import SignInButton from "../../utils/buttons/SignInButton";
import SignUpButton from "../../utils/buttons/SignUpButton";
import "./WelcomePage.css";
import SignIn from "../signin/SignIn";
import { useState } from "react";

function WelcomePage() {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleSignIn = (event) => {
    event.preventDefault();
    setShowSignIn(true);
    console.log("Clicked Sign In button");
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    try {
      console.log("Sign-up functionality is not implemented yet.");
    } catch (error) {
      console.error("Error during sign-up:", error);
    }
  };

  return (
    <div className="homeContainer">
      <div className="logo">
        <XIcon fontSize="inherit" />
      </div>
      <div className="signInContainer">
        <div className="signIn__header">
          <h1>Happening now</h1>
          <h3>Join today.</h3>
        </div>
        <div className="signIn__formContainer">
          <form className="signIn__form">
            <input
              type="text"
              name="email"
              className="signIn__box"
              placeholder="Enter email or phone no."
            />
            <input
              type="text"
              name="password"
              className="signIn__box"
              placeholder="Password"
            />

            <SignInButton onClick={handleSignIn} />
            <div className="signIn__orContainer">
              <div className="signIn__orLineContainer">
                <div className="signIn__orLine"></div>
              </div>
              <div className="signIn__orText">OR</div>
              <div className="signIn__orLineContainer">
                <div className="signIn__orLine"></div>
              </div>
            </div>
            <SignUpButton onClick={handleSignUp} />
          </form>
        </div>
        <p className="signIn__footer">
          By signing up, you agree to the
          <span className="tnc"> Terms of Service </span>
          and
          <span className="tnc">
            {" "}
            Privacy <br />
            Policy
          </span>
          , including <span className="tnc"> Cookie Use.</span>
        </p>
      </div>

      {showSignIn && (
        <SignIn
          handleClose={() => {
            setShowSignIn(false);
            console.log("Sign In modal closed");
          }}
        />
      )}
    </div>
  );
}

export default WelcomePage;
