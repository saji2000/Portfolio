import { useState } from "react";

export default function App() {
  const [resturant, setResturant] = useState("Little Lemon");

  return (
    <div>
      <h1>{resturant}</h1>
      <button onClick={() => setResturant("Checkers")}>Change Resturant</button>
    </div>
  );
}
