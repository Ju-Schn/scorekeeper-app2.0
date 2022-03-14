import styled from 'styled-components';
import { StyledButton } from './Button';

export default function Player({ name, score, onDecrement, onIncrement }) {
  return (
    <Wrapper>
      <Name>{name}</Name>
      <StyledButton aria-label="Decrease Score" onClick={onDecrement}>
        -
      </StyledButton>
      <Score>{score}</Score>
      <StyledButton aria-label="Increase Score" onClick={onIncrement}>
        +
      </StyledButton>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  color: #03045e;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
`;

const Name = styled.span`
  margin-right: auto;
`;

const Score = styled.span`
  margin: 0 12px;
`;
