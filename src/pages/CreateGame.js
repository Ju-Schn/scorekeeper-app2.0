import Button from '../components/Button';
import Input from '../components/Input';
import { useState } from 'react';

export default function CreateGame({ onCreateGame }) {
  const [nameOfGame, setNameOfGame] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    onCreateGame({
      nameOfGame,
    });
    setNameOfGame('');
  }

  return (
    <>
      <Input onChange={event => setNameOfGame(event.target.value)} value={nameOfGame} placeholder="e.g. Decrypto" description="Which game do you want to play?" />
      <Button children="Create Game" onClick={handleSubmit} />
    </>
  );
}
