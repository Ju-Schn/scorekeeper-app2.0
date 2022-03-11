import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  font-size 112.5%;
  line-height: 1.5;
}

button, 
input, 
textarea, 
label {
  font-size: 1rem;
}

button {
  background: none;
  color: inherit;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
`;
