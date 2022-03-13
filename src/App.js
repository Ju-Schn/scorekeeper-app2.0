import CurrentGame from './pages/CurrentGame';
import CreateGame from './pages/CreateGame';
import { useState } from 'react';

function App() {
  const [nameOfGame, setNameOfGame] = useState('');
  function createGame({ nameOfGame }) {
    setNameOfGame(nameOfGame);
  }

  return (
    <>
      <CurrentGame title={nameOfGame} />;
      <CreateGame onCreateGame={createGame} onClick={createGame} />
    </>
  );
}

export default App;
