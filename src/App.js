import { useState } from "react";

export default function App() {
  const [resturant, setResturant] = useState({
    resturant: "Little Lemon",
    city: "Edmonton",
  });

  function updateResturant() {
    setResturant((prevState) => {
      return { ...prevState, resturant: "Checkers" };
    });
  }

  return (
    <div>
      <h1>
        {resturant.resturant} is located in {resturant.city}
      </h1>
      <button onClick={updateResturant}>Change Resturant</button>
    </div>
  );
}
