import { useState, useEffect } from "react";

export default function App() {
  const [dataB, setBtc] = useState({});

  const fetchData = () => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => response.json())
      .then((jsonData) => setBtc(jsonData.bpi.USD))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  // if (!dataB) {
  //   // You can return a loading indicator or null while data is being fetched
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <h1>Current BTC price</h1>
      <p>Code: {dataB.code || "N/A"}</p>
      <p>Symbol: {dataB.symbol || "N/A"}</p>
      <p>Rate: {dataB.rate || "N/A"}</p>
      <p>Description: {dataB.description || "N/A"}</p>
      <p>Rate Float: {dataB.rate_float || "N/A"}</p>
    </div>
  );
}
