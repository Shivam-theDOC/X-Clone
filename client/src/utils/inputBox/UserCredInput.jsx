import "./InputBox.css";

const UserCredInput = ({ placeholder, setUser, name }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="signIn__inputContainer">
      <input
        type="text"
        id="credentials"
        name={name}
        onChange={handleInputChange}
        required
      />
      <label htmlFor="credentials" className={setUser ? "floating" : ""}>
        {placeholder}
      </label>
    </div>
  );
};

export default UserCredInput;
