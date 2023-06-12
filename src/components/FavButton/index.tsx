import { useFavPokemon } from './hooks';

import { FavButtonPropType } from './type';

import './style.css';

function FavButton({ pokemonId }: FavButtonPropType) {
  const [pokemonIds, addToFav, removeFromFav, isFav] = useFavPokemon(pokemonId);

  return (
    <button type="button" className={`btn-fav ${isFav ? 'is-fav' : ''}`} onClick={isFav ? removeFromFav : addToFav}>
      ❤
    </button>
  );
}

export default FavButton;
