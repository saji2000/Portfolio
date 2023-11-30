import { useState, useEffect } from "react";

export default function App() {
  const [toggle, setToggle] = useState(false);

  function clickHandler(e) {
    setToggle(!toggle);
  }

  useEffect(() => {
    document.title = toggle
      ? "Welcome to little lemon"
      : "Using useEffect hook";
  }, [toggle]);

  return (
    <div>
      <h1>Use Effect Lesson</h1>
      <button onClick={clickHandler}>Toggle Message</button>
      {toggle && <h2>Welcome to little lemon</h2>}
    </div>
  );
}
