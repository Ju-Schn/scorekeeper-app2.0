import styled from 'styled-components';

export default function Title({ title }) {
  return <StyledTitle>{title}</StyledTitle>;
}

const StyledTitle = styled.h2`
  color: #ff5400;
  padding: 20px;
  font-size: 700;
  font-weigth: bold;
`;
