import Button from "@mui/material/Button";
import "./Buttons.css"; // Assuming you have a CSS file for styling

const SignInButton = ({ text }) => {
  return (
    <Button variant="outlined" className="signIn__button">
      <span className="signIn__buttonText">{text ? text : "Sign in"}</span>
    </Button>
  );
};

export default SignInButton;
