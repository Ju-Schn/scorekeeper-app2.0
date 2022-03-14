import { StyledButton } from '../components/Button';
import Input from '../components/Input';
import { useState } from 'react';

export default function CreateGame({ onCreateGame }) {
  const [nameOfGame, setNameOfGame] = useState('');

  function handleCreateGame(event) {
    event.preventDefault();
    onCreateGame({
      nameOfGame,
    });
    setNameOfGame('');
  }

  return (
    <>
      <Input name="nameOfGame" onChange={event => setNameOfGame(event.target.value)} value={nameOfGame} placeholder="e.g. Decrypto" description="Which game do you want to play?" />
      <StyledButton onClick={handleCreateGame}>Create Game</StyledButton>
    </>
  );
}
