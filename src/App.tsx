import { ChangeEvent, useState } from 'react';
import { useLocalStorage } from './shared/hooks/useLocalStorage';

function App() {
  const {
    value: name,
    setData,
    removeData,
    resetData,
  } = useLocalStorage('name', 'Anonymous');

  const [inputValue, setInputValue] = useState<string>('');

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>useLocalStorage</h1>
      <input value={inputValue} onChange={onChangeInput} />

      <button onClick={() => setData(inputValue)}>submit</button>

      <button onClick={removeData}>removeName</button>
      <button onClick={resetData}>resetName</button>

      <p className="name">{name}</p>
    </div>
  );
}

export default App;
