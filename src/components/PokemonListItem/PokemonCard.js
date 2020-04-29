import React from 'react';

import * as SC from './PokemonCard.sc';

const PokemonCard = ({ details = {} }) => {
  const { sprites, name, weight, height, types, abilities } = details;
  const image = sprites.front_default;

  return (
    <SC.DivCardWrapper>
      <SC.DivPokemonBody>
        <SC.DivPokemonBodyItem>{height / 10}m</SC.DivPokemonBodyItem>
        <SC.DivPokemonBodyItem>{weight / 100}kg</SC.DivPokemonBodyItem>
      </SC.DivPokemonBody>

      <SC.ImgPokemon src={image} />

      <SC.DivPokemonName>{name}</SC.DivPokemonName>

      <SC.DivPokemonTypes>
        {types.map((item) => (
          <SC.SpanPokemonType key={item.slot}>
            {item.type.name}
          </SC.SpanPokemonType>
        ))}
      </SC.DivPokemonTypes>

      <SC.DivPokemonAbilities>
        {abilities.map((item) => (
          <SC.SpanPokemonAbility key={item.slot}>
            {item.ability.name}
          </SC.SpanPokemonAbility>
        ))}
      </SC.DivPokemonAbilities>
    </SC.DivCardWrapper>
  );
};

export default PokemonCard;
