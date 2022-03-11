import styled from 'styled-components';
import Button from './Button';

export default function Player({ name, score, onDecrement, onIncrement }) {
  return (
    <section>
      <span>{name}</span>
      <Button aria-label="Decrease Score" onClick={onDecrement} children={'-'} />
      <span>{score}</span>
      <Button aria-label="Increase Score" onClick={onIncrement} children={'+'} />
    </section>
  );
}
