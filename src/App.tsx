import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function stringCheck(string: string) {
    console.log(string);
  }

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Button</button>
      <button onClick={() => stringCheck(3)}>String</button>

      <p>{count}</p>
    </>
  );
}

export default App;
