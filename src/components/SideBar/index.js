import React from 'react';
import { connect } from 'react-redux';

import { getPokemonsByType } from '../../api';
import Button from '../Button';
import * as SC from './SideBar.sc';

const SideBar = ({
  pokemonTypes = [],
  activeType = 'all',
  setActiveType,
  fetchPokemonsByType,
}) => {
  const handleTypeClick = async (name) => {
    if (name !== activeType) {
      const typeDetails = await getPokemonsByType(name);

      setActiveType(name);
      fetchPokemonsByType(typeDetails.name);
    }
  };

  return (
    <SC.DivSideBarWrapper>
      {pokemonTypes.map(({ name }, index) => (
        <Button
          key={index}
          fluid
          onClick={() => handleTypeClick(name)}
          outlined={activeType === name}
        >
          {name}
        </Button>
      ))}
    </SC.DivSideBarWrapper>
  );
};

const stateToProps = ({ pokemonTypes: { pokemonTypes, activeType } }) => ({
  pokemonTypes,
  activeType,
});

const dispatchToProps = ({
  pokemons: { fetchPokemonsByType },
  pokemonTypes: { setActiveType },
}) => ({
  fetchPokemonsByType,
  setActiveType,
});

export default connect(stateToProps, dispatchToProps)(SideBar);
