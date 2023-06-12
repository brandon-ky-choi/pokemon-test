import { useEffect, useState } from 'react';
import { PokemonIdArray } from './type';

export function useFavPokemon(pokemonId: number): [() => void, () => void, () => void, boolean] {
  const FavPokemonsKey = 'FavPokemons';
  const [isFav, setIsFav] = useState(false);

  const getFavPokemons = () => {
    const localstorageString = localStorage.getItem(FavPokemonsKey);
    const favPokemons: PokemonIdArray = localstorageString ? JSON.parse(localstorageString) : [];
    return favPokemons;
  };

  const addPokemon = (): void => {
    const favPokemons = getFavPokemons();
    const favPokemonsString = JSON.stringify([...favPokemons, pokemonId]);
    localStorage.setItem(FavPokemonsKey, favPokemonsString);
    setIsFav(true);
  };

  const removePokemon = (): void => {
    const favPokemons = getFavPokemons();
    const favPokemonsString = JSON.stringify(favPokemons.filter(n => n !== pokemonId));
    localStorage.setItem(FavPokemonsKey, favPokemonsString);
    setIsFav(false);
  };

  useEffect(() => {
    const favPokemons = getFavPokemons();
    setIsFav(favPokemons.includes(pokemonId));
  }, []);

  return [getFavPokemons, addPokemon, removePokemon, isFav];
}
