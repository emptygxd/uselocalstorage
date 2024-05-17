import { useState } from "react";
import { useLocalStorage } from "./shared/hooks/useLocalStorage";

function App() {
  const {
    value: name,
    setData,
    removeName,
    resetName,
  } = useLocalStorage("name", "Anonymous");

  const [input, setInput] = useState<string>("");

  return (
    <div>
      <h1>useLocalStorage</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />

      <button
        onClick={() => {
          setData(input);
        }}
      >
        submit
      </button>

      <button onClick={removeName}>removeName</button>
      <button onClick={resetName}>resetName</button>

      <p>{name}</p>
    </div>
  );
}

export default App;
