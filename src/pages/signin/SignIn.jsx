import CloseIcon from "@mui/icons-material/Close";
import XIcon from "@mui/icons-material/X";
import SignInButton from "../../utils/buttons/SignInButton";
import SignUpButton from "../../utils/buttons/SignUpButton";
import "./SignIn.css";

import { auth, provider } from "../../database/firebase";
import { signInWithPopup } from "firebase/auth";

function SignIn({ handleClose }) {
  const handleGoogleSignIn = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      const user = response.user;
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mainContainer">
      <div className="signin__floatContainer">
        <div className="signin__stickyContainer">
          <div className="signin__closeButton" onClick={handleClose}>
            <CloseIcon />
          </div>

          <div className="signin__logoContainer">
            <XIcon fontSize="inherit" />
          </div>
        </div>
        <div className="signin__mainContainer">
          <div className="signIn__headerFlow">
            <h1>Sign in to X</h1>
          </div>
          <div className="signIn__formFlowContainer">
            <form className="signIn__formFlow">
              <SignInButton onClick={handleGoogleSignIn} />
              <input type="password" id="password" name="password" required />
              <div className="signIn__orContainer">
                <div className="signIn__orLineContainer">
                  <div className="signIn__orLine"></div>
                </div>
                <div className="signIn__orText">or</div>
                <div className="signIn__orLineContainer">
                  <div className="signIn__orLine"></div>
                </div>
              </div>

              <div className="signIn__inputCredentialContainer">
                <div className="signIn__labelContainer">
                  <label htmlFor="credentials">Phone, email, or username</label>

                  <div className="signIn__inputContainer">
                    <input
                      type="text"
                      id="credentials"
                      name="credentials"
                      placeholder="Phone, email, or username"
                      required
                    />
                  </div>
                </div>
              </div>
              <SignUpButton text="Next" flow="true" />
              <SignInButton text="Forgot password?" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
