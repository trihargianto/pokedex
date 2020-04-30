import React from 'react';

import * as SC from './PokemonDetails.sc';

const PokemonListItemDetails = ({ moves = [], sprites = {} }) => {
  return (
    <SC.DivDetailWrapper>
      <div>
        <h4>Sprites</h4>

        <img alt="" src={sprites.front_default} />
        <img alt="" src={sprites.back_default} />
        <img alt="" src={sprites.back_shiny} />
        <img alt="" src={sprites.front_shiny} />
      </div>

      <div>
        <h4>Moves List</h4>

        {moves.map(({ move: { name } }, index) => (
          <SC.SpanMovesItem key={index}>{name}</SC.SpanMovesItem>
        ))}
      </div>
    </SC.DivDetailWrapper>
  );
};

export default PokemonListItemDetails;
