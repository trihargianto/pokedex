import styled from 'styled-components';

export const DivCardWrapper = styled.div`
  width: 100%;
  min-height: 200px;
  padding: 15px 0px;
  border-radius: 15px;
  background-color: white;
  position: relative;
  text-align: center;
  border: 1px solid #eee;
  box-sizing: border-box;
`;

export const ImgPokemon = styled.img`
  width: 100px;
`;

export const DivPokemonBody = styled.div`
  position: absolute;
  width: 50px;
  right: 0;
  top: 0;
  margin-top: 10px;
  margin-right: 10px;
`;

export const DivPokemonBodyItem = styled.div`
  color: #888;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  border: 1px solid #999;
  font-size: 11px;
  padding: 4px 0px;
`;

export const DivPokemonName = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const DivPokemonTypes = styled.div`
  display: flex;
  justify-content: center;

  > span:first-child {
    &:before {
      display: none;
    }
  }
`;

export const SpanPokemonType = styled.span`
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;

  &:before {
    background-color: gray;
    border-radius: 50%;
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 1px;
  }
`;

export const DivPokemonAbilities = styled.div`
  margin-bottom: 20px;
  margin-top: 5px;
`;

export const SpanPokemonAbility = styled.span`
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  margin-left: 10px;
`;
