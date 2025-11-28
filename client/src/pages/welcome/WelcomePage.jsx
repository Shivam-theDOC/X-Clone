import XIcon from "@mui/icons-material/X";

// import SignInButton from "../../utils/buttons/SignInButton";
// import SignUpButton from "../../utils/buttons/SignUpButton";

import "./WelcomePage.css";
import SignIn from "../signin/SignIn";
import SignUp from "../signup/SignUp";
import { useState } from "react";

function WelcomePage() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignIn = (event) => {
    event.preventDefault();
    setShowSignIn(true);
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    setShowSignUp(true);
  };

  return (
    <div className="welcomePage">
      <div className="welcomePage__left">
        <div className="welcomePage__logo">
          <XIcon />
        </div>
      </div>
      <div className="welcomePage__right">
        <div className="welcomePage__rightContent">
          <div className="welcomePage__logoSmall">
            <XIcon />
          </div>
          <h1>Happening now</h1>
          <h2>Join today.</h2>

          <div className="welcomePage__buttons">
            <button className="welcomePage__googleButton">
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Sign up with Google
            </button>
            <button className="welcomePage__appleButton">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              Sign up with Apple
            </button>

            <div className="welcomePage__divider">
              <div className="welcomePage__line"></div>
              <p>OR</p>
              <div className="welcomePage__line"></div>
            </div>

            <button
              className="welcomePage__createAccountButton"
              onClick={handleSignUp}
            >
              Create account
            </button>

            <div className="welcomePage__terms">
              By signing up, you agree to the <span>Terms of Service</span> and{" "}
              <span>Privacy Policy</span>, including <span>Cookie Use</span>.
            </div>

            <div className="welcomePage__login">
              <h3>Already have an account?</h3>
              <button
                className="welcomePage__signInButton"
                onClick={handleSignIn}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="welcomePage__footer">
        <a href="#">About</a>
        <a href="#">Download the X app</a>
        <a href="#">Help Center</a>
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookie Policy</a>
        <a href="#">Accessibility</a>
        <a href="#">Ads info</a>
        <a href="#">Blog</a>
        <a href="#">Status</a>
        <a href="#">Careers</a>
        <a href="#">Brand Resources</a>
        <a href="#">Advertising</a>
        <a href="#">Marketing</a>
        <a href="#">X for Business</a>
        <a href="#">Developers</a>
        <a href="#">Directory</a>
        <a href="#">Settings</a>
        <p>© 2025 X Corp.</p>
      </footer>

      {showSignIn && (
        <SignIn
          handleClose={() => {
            setShowSignIn(false);
          }}
        />
      )}

      {showSignUp && (
        <SignUp
          handleClose={() => {
            setShowSignUp(false);
          }}
        />
      )}
    </div>
  );
}

export default WelcomePage;
