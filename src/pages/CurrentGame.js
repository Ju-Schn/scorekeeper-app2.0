import Player from '../components/Player';
import Title from '../components/Title';

export default function CurrentGame({ onDecrement, onIncrement, score }) {
  return (
    <>
      <Title title="Name of Game" />
      <Player onDecrement={onDecrement} onIncrement={onIncrement} name="Player 1" score={score} />
      <Player name="Player 2" score="0" />
      <Player name="Player 3" score="0" />
      <Player name="Player 4" score="0" />
    </>
  );
}
