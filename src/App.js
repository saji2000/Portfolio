import "./App.css";
import { RadioGroup, RadioOption } from "./Radio";
import { useState } from "react";

// Button component
const Button = ({ type, children, ...buttonProps }) => {
  const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";
  return (
    <button className={`Button ${className}`} {...buttonProps}>
      {children}
    </button>
  );
};

// LoginButton component
const LoginButton = ({ type, children, ...buttonProps }) => {
  return (
    <Button
      type="secondary"
      {...buttonProps}
      onClick={() => alert("Logging in!")}
    >
      {children}
    </Button>
  );
};

// App component
function App() {
  const [selected, setSelected] = useState(""); // State hook to manage selected value

  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant</header>
      <Button type="primary" onClick={() => alert("sign up!")}>
        Sign Up
      </Button>
      <LoginButton type="secondary">Login</LoginButton>
    </div>
  );
}

export default App;
