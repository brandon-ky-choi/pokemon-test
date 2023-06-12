import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { PokemonList } from '../../models/pokemon';
import { useGetPokemonsQuery } from '../../services/pokemonApi';
import ListView from './View';

function List() {
  const { keyword } = useParams();

  const [pokemons, setPokemons] = useState<PokemonList>([]);

  const { data, isLoading, isSuccess } = useGetPokemonsQuery('');

  useEffect(() => {
    if (isSuccess && data) {
      if (keyword?.length) {
        const searchResult = data.filter(pokemon => pokemon.name.toLowerCase().includes(keyword.toLowerCase()));
        setPokemons(searchResult);
      } else {
        setPokemons(data);
      }
    }
  }, [data, isSuccess, keyword]);

  if (isLoading) {
    return <p>Loading..</p>;
  }

  return (
    <>
      <ListView pokemons={pokemons} />
    </>
  );
}

export default List;
