import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    if (inputText.trim() !== '') {
      setItems([...items, inputText]);
      setInputText('');
    }
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Dynamic List Manager</h1>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type an item"
          className="input-field"
        />
        <button onClick={handleAddItem} className="add-button">
          Add Item
        </button>
        <div className="list-container">
          {items.length === 0 ? (
            <p>No items added yet.</p>
          ) : (
            <ul>
              {items.map((item, index) => (
                <li key={index} className="list-item">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;