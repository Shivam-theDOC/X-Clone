import XIcon from "@mui/icons-material/X";

import "./WelcomePage.css";
import Button from "@mui/material/Button";

function WelcomePage() {
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

            <Button variant="outlined" className="signIn__button">
              Sign in
            </Button>

            <p className="signIn__or">OR</p>

            <Button variant="contained" className="signIn__button" >
              Create account
            </Button>
          </form>
        </div>
        <p>
          By signing up, you agree to the
          <span className="tnc">Terms of Service</span> and
          <span>
            Privacy <br />
            Policy
          </span>
          , including <span> Cookie Use</span>
        </p>
      </div>
    </div>
  );
}

export default WelcomePage;
