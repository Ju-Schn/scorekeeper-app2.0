import styled from 'styled-components';

export default function Input({ description, placeholder, onChange }) {
  return (
    <Wrapper>
      <StyledDescription>{description}</StyledDescription>
      <StyledInput onChange={onChange} placeholder={placeholder}></StyledInput>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;
`;

const StyledDescription = styled.label`
  color: #03045e;
`;
const StyledInput = styled.input`
  border: 2px solid #ff5400;
  border-radius: 10px;
  background-color: #ff9e00;
  color: #03045e;
  padding: 10px;
`;
