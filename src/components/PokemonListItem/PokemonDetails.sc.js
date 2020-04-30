import styled from 'styled-components';

export const DivDetailWrapper = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-column: 1 / 3;
  grid-template-columns: 500px auto auto;
  grid-column-gap: 50px;
`;

export const SpanMovesItem = styled.span`
  width: auto;
  padding: 5px 10px;
  margin: 2px;
  box-sizing: border-box;
  display: inline-block;
  font-size: 12px;
  font-family: 'Roboto';
  border: 2px solid #ccc;
  border-radius: 15px;

  &:hover {
    background-color: #ccc;
    color: white;
  }
`;
