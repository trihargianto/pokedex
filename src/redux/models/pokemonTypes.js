import { getPokemonTypes } from '../../api';

export const pokemonTypes = {
  state: {
    activeType: 'all',
    pokemonTypes: [],
  },
  reducers: {
    setPokemonTypes(state, payload) {
      return {
        ...state,
        pokemonTypes: payload,
      };
    },

    setActiveType(state, payload) {
      return {
        ...state,
        activeType: payload,
      };
    },
  },
  effects: (dispatch) => ({
    async fetchPokemonTypes(payload) {
      const results = await getPokemonTypes();

      dispatch.pokemonTypes.setPokemonTypes(results);
    },
  }),
};
