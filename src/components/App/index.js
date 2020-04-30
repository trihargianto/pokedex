import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';

import SideBar from '../SideBar';
import PokemonListItem from '../PokemonListItem';
import * as SC from './App.sc';

const App = ({
  pokemonData = [],
  displayedPokemons = [],

  updateDisplayedPokemon,
  fetchAllPokemons,
  fetchPokemonTypes,
}) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetchPokemonTypes();
    fetchAllPokemons();
  }, [fetchPokemonTypes, fetchAllPokemons]);

  const loadMore = () => {
    const slicedPokemons = pokemonData.slice(offset, offset + 5);
    setOffset(offset + 5);

    updateDisplayedPokemon([...displayedPokemons, ...slicedPokemons]);
  };

  useEffect(() => {
    setOffset(0);
    updateDisplayedPokemon([]);
  }, [pokemonData, updateDisplayedPokemon]);

  return (
    <>
      <SC.GlobalStyle />

      <SC.DivAppWrapper>
        <SideBar />

        <SC.DivContent>
          <InfiniteScroll
            pageStart={0}
            loadMore={loadMore}
            hasMore={displayedPokemons.length < pokemonData.length}
            loader={
              <div style={{ textAlign: 'center' }} key={0}>
                Loading ...
              </div>
            }
            useWindow={false}
          >
            {displayedPokemons.map((item, index) => (
              <PokemonListItem data={item} key={index} />
            ))}
          </InfiniteScroll>
        </SC.DivContent>
      </SC.DivAppWrapper>
    </>
  );
};

const stateToProps = ({ pokemons: { pokemonData, displayedPokemons } }) => ({
  pokemonData,
  displayedPokemons,
});

const dispatchToProps = ({
  pokemons: { fetchAllPokemons, updateDisplayedPokemon },
  pokemonTypes: { fetchPokemonTypes },
}) => ({
  fetchAllPokemons,
  fetchPokemonTypes,

  updateDisplayedPokemon,
});

export default connect(stateToProps, dispatchToProps)(App);
