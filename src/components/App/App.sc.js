import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto Mono';
    margin: 0px;
    padding: 0px;
  }
`;

export const DivAppWrapper = styled.div`
  display: grid;
  grid-template-columns: 150px auto;
`;

export const DivContent = styled.div`
  height: 100vh;
  overflow-y: scroll;
`;
