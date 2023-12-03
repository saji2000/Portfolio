import { useState, useEffect, useReducer } from "react";

function reducer(state, action) {
  if (action.type === "buy grocery") {
    return { money: state.money - 10 };
  }
  if (action.type === "sell food") {
    return { money: state.money + 10 };
  }
}

function App() {
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Wallet: {state.money}</h1>
      <div>
        <button onClick={() => dispatch({ type: "buy grocery" })}>
          buy grocery
        </button>
        <button onClick={() => dispatch({ type: "sell food" })}>
          sell food
        </button>
      </div>
    </div>
  );
}

export default App;
