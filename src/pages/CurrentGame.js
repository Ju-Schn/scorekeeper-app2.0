import Player from '../components/Player';
import Title from '../components/Title';

export default function CurrentGame({ title, name, score }) {
  return (
    <>
      <Title title="Name of Game" />
      <Player name="Player 1" score="0" />
      <Player name="Player 1" score="0" />
      <Player name="Player 1" score="0" />
      <Player name="Player 1" score="0" />
    </>
  );
}
