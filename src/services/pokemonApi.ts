import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Pokemon, PokemonList } from '../models/pokemon';
import { PokemonQueryArgType, PokemonsResponseSingleType } from './type';

function getId(url: string) {
  const urlArr = url.split('/');
  return parseInt(urlArr[urlArr.length - 2], 10);
}

export const pokemonsApi = createApi({
  reducerPath: 'pokemonsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/pokemon' }),
  endpoints: builder => ({
    getPokemons: builder.query<PokemonList, ''>({
      query: () => `/`,
      transformResponse: (response: { results: PokemonsResponseSingleType[] }) => {
        const pokemons: PokemonList = response.results.map(pokemon => {
          // process data to structure in {name, id}[]
          return { name: pokemon.name, id: getId(pokemon.url) };
        });
        return pokemons;
      },
    }),
    getPokemonById: builder.query<Pokemon, PokemonQueryArgType>({
      query: params => `/${params.pokemonId}`,
    }),
  }),
});

export const { useGetPokemonsQuery, useGetPokemonByIdQuery } = pokemonsApi;
