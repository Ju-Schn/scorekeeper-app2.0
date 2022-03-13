import { Routes, Route } from 'react-router-dom';
import CurrentGame from './pages/CurrentGame';
import CreateGame from './pages/CreateGame';
import { useState } from 'react';

function App() {
  const [nameOfGame, setNameOfGame] = useState('');
  function createGame({ nameOfGame }) {
    setNameOfGame(nameOfGame);
  }

  return (
    <Routes>
      <Route path="/" element={<CreateGame onCreateGame={createGame} onClick={createGame} />} />
      <Route path="/current-game" element={<CurrentGame title={nameOfGame} />} />
    </Routes>
  );
}

export default App;
