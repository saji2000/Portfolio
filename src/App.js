import "./App.css";
import { RadioGroup, RadioOption } from "./Radio";
import { useState } from "react";

const Button = ({ type, children, ...buttonProps }) => {
  const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";
  return (
    <button className={`Button ${className}`} {...buttonProps}>
      {children}
    </button>
  );
};

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

function App() {
  const [selected, setSelected] = useState("");
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
