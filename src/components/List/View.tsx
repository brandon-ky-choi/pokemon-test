import { Link, useParams } from 'react-router-dom';

import FavButton from '../FavButton';

import { ListViewPropType } from './type';

import './style.css';

function ListView({ pokemons }: ListViewPropType) {
  const { keyword } = useParams();
  return (
    <>
      <ul className="pokemon-list">
        {pokemons.map(pokemon => {
          return (
            <li key={`Pokemon-${pokemon.name}`}>
              <FavButton pokemonId={pokemon.id} />
              <Link to={`${keyword ? '/search/' + keyword : ''}/pokemon/${pokemon.id}`}>{pokemon.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default ListView;
