import styled from 'styled-components';
import Button from './Button';

export default function Player({ name, score, onDecrement, onIncrement }) {
  return (
    <Wrapper>
      <Name>{name}</Name>
      <Button aria-label="Decrease Score" onClick={onDecrement} children={'-'} />
      <Score>{score}</Score>
      <Button aria-label="Increase Score" onClick={onIncrement} children={'+'} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  color: #03045e;
  justify-content: flex-end;
  align-items: center;
`;

const Name = styled.span`
  margin-right: auto;
`;

const Score = styled.span`
  margin: 0 12px;
`;
