import { useState } from "react";

export default function App() {
  const [toggle, setToggle] = useState(false);

  function clickHandler(e) {
    setToggle(!toggle);
  }

  return (
    <div>
      <h1>Use Effect Lesson</h1>
      <button onClick={clickHandler}>Toggle Message</button>
      {toggle && <h2>Welcome to little lemon</h2>}
    </div>
  );
}
