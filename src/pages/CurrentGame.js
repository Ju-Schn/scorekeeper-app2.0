import Player from '../components/Player';
import Title from '../components/Title';
import Input from '../components/Input';
import Button from '../components/Button';
import styled from 'styled-components';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function CurrentGame({ onDecrement, onIncrement }) {
  const [playerName, setPlayerName] = useState('');
  const [players, setPlayers] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const newPlayer = {
      id: nanoid(),
      name: playerName,
      score: '0',
    };
    setPlayers([...players, newPlayer]);
    setPlayerName('');
  }

  return (
    <GridContainer>
      <Title title="Name of Game" />
      <PlayerContainer>
        {players.map(({ name, score, id }) => (
          <Player key={id} name={name} score={score} onDecrement={onDecrement} onIncrement={onIncrement} />
        ))}
      </PlayerContainer>
      <AddPlayer>
        <Input onChange={event => setPlayerName(event.target.value)} value={playerName} placeholder="e.g. Harry Potter" description="Enter Name of Player:" name="playerName" />
        <Button onClick={handleSubmit} children="Add Player" />
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
