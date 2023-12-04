import { useRef } from "react";

function App() {
  const formInputRef = useRef(null);

  return (
    <div>
      <h1>using useRef to access underlying DOM</h1>
      <input ref={formInputRef} type="text"></input>
      <button onClick={() => formInputRef.current.focus()}>Focus</button>
    </div>
  );
}

export default App;
