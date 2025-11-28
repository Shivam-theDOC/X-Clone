import Button from "@mui/material/Button";
import "./Buttons.css"; // Assuming you have a CSS file for styling

const SignUpButton = ({ text, flow, onClick }) => {
  return (
    <Button
      variant="outlined"
      className={flow ? "signUp__buttonFlowButton" : "signUp__button"}
      onClick={onClick}
    >
      <span className="signUp__buttonText">
        {text ? text : "Create an account"}
      </span>
    </Button>
  );
};

export default SignUpButton;
