import styled, { css } from 'styled-components';

const outlinedStyles = css`
  border-width: 2px;
  border-color: #9096f0;
  background-color: white;
  color: #222;
`;

const nonOutlinedStyles = css`
  border-width: 0px;
  border-color: #9096f0;
  background-color: #9096f0;
  color: white;
`;

const outlinedHoverStyles = css`
  background-color: #6f75d2;
  color: white;
`;

const nonOutlinedHoverStyles = css`
  background-color: #6f75d2;
`;

export const Button = styled.button`
  width: ${(props) => (props.fluid ? '100%' : 'auto')};
  cursor: pointer;
  display: inline-block;
  font-size: 13px;
  padding: 10px 15px;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 4px;
  outline: none;
  margin-bottom: 8px;
  font-family: 'Roboto Mono';

  ${(props) => (props.outlined ? outlinedStyles : nonOutlinedStyles)}

  &:hover {
    ${(props) =>
      props.outlined ? outlinedHoverStyles : nonOutlinedHoverStyles}
  }
`;
