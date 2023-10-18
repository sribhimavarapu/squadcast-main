import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
const names: string[] = [
  "Krishna",
  "Sri",
  "Reddy",
  "Bhimavarapu",
  "Chaitanya",
  "chaitu",
  "bsk",
];

function App() {
  // const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState<string>("");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [filteredNames, setFilteredNames] = useState<string[]>([]);
  const [mention, setMention] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.includes("@")) {
      const searchTerm = value.split("@")[1];
      const filtered = names.filter((name) =>
        name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredNames(filtered);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleNameClick = (name: string) => {
    const updatedInputValue = inputValue.replace(/@[^@]*$/, `@${name}`);
    console.log(name);
    setInputValue(updatedInputValue);
    setMention(name);
    setShowDropdown(false);
  };

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div className="App">
        <input
          type="text"
          value={inputValue}
          className={
            inputValue.includes("@") ? `green-text input-field` : `input-field`
          }
          onChange={handleInputChange}
          placeholder="Mention"
        />
        {showDropdown && (
          <ul className="dropdown">
            {filteredNames.map((name, index) => (
              <li
                key={index}
                className="dropdown-item"
                onClick={() => handleNameClick(name)}
              >
                {name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
