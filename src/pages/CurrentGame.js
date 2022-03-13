import Player from '../components/Player';
import Title from '../components/Title';
import Input from '../components/Input';
import Button from '../components/Button';
import styled from 'styled-components';

export default function CurrentGame({ onDecrement, onIncrement, score }) {
  return (
    <>
      <Title title="Name of Game" />
      <Player onDecrement={onDecrement} onIncrement={onIncrement} name="Player 1" score={score} />
      <Player name="Player 2" score="0" />
      <Player name="Player 3" score="0" />
      <Player name="Player 4" score="0" />
      <AddPlayer>
        <Input placeholder="e.g. Harry Potter" description="Enter Name of Player:" />
        <Button children="Add Player" />
      </AddPlayer>
    </>
  );
}

const AddPlayer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  align-items: center;
  gap: 1rem;
`;
