import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [val, setVal] = useState({});

  useEffect(() => {
    fetch(`/.netlify/functions/hello?name=faiz`)
      .then((res) => res.json())
      .then((obj) => setVal(obj));
  }, []);
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h3>{val.message}</h3>
    </div>
  );
}

export default App;
