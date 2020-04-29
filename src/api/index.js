import { Pokedex } from 'pokeapi-js-wrapper';

const options = {
  protocol: 'https',
  cache: true,
};

const client = new Pokedex(options);

export const getPokemonsList = async () => {
  const { results } = await client.getPokemonsList({ limit: 1000 });
  return results;
};

export const getPokemonByName = async (name) => {
  return await client.getPokemonByName(name);
};

export const getPokemonTypes = async () => {
  const { results } = await client.getTypesList();

  return results;
};

export const getPokemonsByType = async (name) => {
  return await client.getTypeByName(name);
};
