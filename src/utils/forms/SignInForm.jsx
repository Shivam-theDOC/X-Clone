import SignInButton from "../buttons/SignInButton";
import SignUpButton from "../buttons/SignUpButton";
import "./Forms.css";

const SignInForm = () => {
  return (
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
        <p className="signIn__or">OR</p>
        <SignUpButton onClick={handleSignUp} />
      </form>
    </div>
  );
};

export default SignInForm;
