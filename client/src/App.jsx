import { useState } from "react";

import "./App.css";
import Images from "./components/Images";
import Header from "./components/Header";
import { Card } from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Images />
      <Header />
      <Card count={count} setCount={setCount} />
    </>
  );
}

export default App;
