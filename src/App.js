import { Routes, Route, useNavigate } from 'react-router-dom';
import CurrentGame from './pages/CurrentGame';
import CreateGame from './pages/CreateGame';
import { useState } from 'react';

function App() {
  const [nameOfGame, setNameOfGame] = useState('');
  let navigate = useNavigate();
  function createGame({ nameOfGame }) {
    setNameOfGame(nameOfGame);
    navigate('./current-game');
  }

  return (
    <Routes>
      <Route path="/" element={<CreateGame onCreateGame={createGame} onClick={createGame} />} />
      <Route path="/current-game" element={<CurrentGame title={nameOfGame} />} />
    </Routes>
  );
}

export default App;
