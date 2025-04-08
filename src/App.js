import React, { useState } from 'react';
import './App.css';

function App() {
const [count, setCount] = useState(0);

const getCountColorClass = () => {
  if (count > 0) return 'green';
  if (count < 0) return 'red';
  return 'blue'
}

const handleIncrement = () => {
  setCount(count + 1);
}

const handleDecrement = () => {
  setCount(count - 1);
}

const handleReset = () => {
  setCount(0);
}
  return (
    <div className="container">
      <h1>Counter App</h1>

      {/* Displays the current count */}
      <h2 className={`count-display ${getCountColorClass()}`}>{count}</h2>
      {/* Buttons To Control the counter */}
        <div className="button-grp">
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleIncrement}>+</button>
        </div>
    </div>
  );
}

export default App;