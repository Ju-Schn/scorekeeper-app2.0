import CurrentGame from './pages/CurrentGame';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }
  return <CurrentGame onDecrement={handleDecrement} onIncrement={handleIncrement} score={count} />;
}

export default App;
