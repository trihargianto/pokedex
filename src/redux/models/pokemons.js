import { getPokemonsList, getPokemonsByType } from '../../api';

export const pokemons = {
  state: {
    pokemonData: [],
    displayedPokemons: [],
  },
  reducers: {
    setPokemonData(state, payload) {
      return {
        ...state,
        pokemonData: payload,
      };
    },

    updateDisplayedPokemon(state, payload) {
      return {
        ...state,
        displayedPokemons: payload,
      };
    },
  },
  effects: ({ pokemons: { setPokemonData } }) => ({
    async fetchAllPokemons() {
      const results = await getPokemonsList();
      setPokemonData(results);
    },

    async fetchPokemonsByType(type = '') {
      if (type) {
        const results = await getPokemonsByType(type);

        setPokemonData(
          results.pokemon.map(({ pokemon: { name, url } }) => ({
            name,
            url,
          }))
        );
      }
    },
  }),
};
