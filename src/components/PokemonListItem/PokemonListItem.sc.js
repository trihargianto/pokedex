import styled from 'styled-components';

export const DivGridContainer = styled.div`
  padding: 20px 40px;
  display: grid;
  grid-template-columns: 500px auto;

  &:nth-child(odd) {
    background-color: #f8f7f7;
  }
`;

export const DivDetailBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DivEmptyWrapper = styled.div`
  grid-column: 1 / 3;
  width: 100%;
  min-height: 200px;
  padding: 15px 0px;
  border-radius: 15px;
  text-align: center;
  border: 1px solid #eee;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
`;
