import styled from 'styled-components';

export default function Button({ children, onClick }) {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
}

const ButtonStyled = styled.button`
  background-color: #03045e;
  color: #ff9100;
  border: none;
  border-radius: 30px;
  padding: 0.5rem 1rem;
`;
