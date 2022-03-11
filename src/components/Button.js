import styled, { css } from 'styled-components';

export default function Button({ children, onClick, variant }) {
  return (
    <ButtonStyled variant={variant} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  border: none;
  border-radius: 30px;
  padding: 0.5rem 1rem;
  background-color: #03045e;
  color: #ff9100;
  cursor: pointer;

  ${props =>
    props.variant === 'active' &&
    css`
      background-color: #ff9100;
      color: #03045e;
    `}

  ${props =>
    props.variant === 'danger' &&
    css`
      background-color: #e01e37;
      color: #641220;
      font-weight: bold;
    `}

    ${props =>
    props.variant === 'submit' &&
    css`
      background-color: #00b4d8;
      color: #ff9e00;
      font-weight: bold;
    `}
`;
