import Player from '../components/Player';
import Title from '../components/Title';
import Input from '../components/Input';
import { StyledButton } from '../components/Button';
import styled from 'styled-components';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function CurrentGame({ nameOfGame }) {
  const [playerName, setPlayerName] = useState('');
  const [players, setPlayers] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const newPlayer = {
      id: nanoid(),
      name: playerName,
      score: 0,
    };
    setPlayers([...players, newPlayer]);
    setPlayerName('');
  }

  function handleIncrement(index) {
    const currentPlayer = players[index];
    setPlayers([...players.slice(0, index), { ...currentPlayer, score: currentPlayer.score + 1 }, ...players.slice(index + 1)]);
  }

  function handleDecrement(index) {
    const currentPlayer = players[index];
    setPlayers([...players.slice(0, index), { ...currentPlayer, score: currentPlayer.score - 1 }, ...players.slice(index + 1)]);
  }

  return (
    <GridContainer>
      <Title title={nameOfGame} />
      <PlayerContainer>
        {players.map(({ name, score, id }, index) => (
          <Player key={id} name={name} score={score} onDecrement={() => handleDecrement(index)} onIncrement={() => handleIncrement(index)} />
        ))}
      </PlayerContainer>
      <AddPlayer>
        <Input name="playerName" onChange={event => setPlayerName(event.target.value)} value={playerName} placeholder="e.g. Harry Potter" Label="Enter Name of Player:" />
        <StyledButton onClick={handleSubmit}>Add Player</StyledButton>
      </AddPlayer>
    </GridContainer>
  );
}

const AddPlayer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  align-items: center;
  gap: 1rem;
`;

const PlayerContainer = styled.div`
  padding: 10px;
  overflow-y: auto;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 30px auto 48px;
`;
