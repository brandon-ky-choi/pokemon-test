import { ReactNode } from 'react';
import { useGetPokemonByIdQuery } from '../../services/pokemonApi';
import { DetailsViewPropType } from './type';

function DetailsView({ pokemonId }: DetailsViewPropType) {
  const { data: pokemon, isLoading } = useGetPokemonByIdQuery({ pokemonId });

  if (isLoading) {
    return <p>Loading..</p>;
  }

  if (!pokemon) {
    return <p>Wrong Data</p>;
  }

  function getSprite(parentKey: string, sprites: any): ReactNode {
    return Object.keys(sprites).map((spriteKey, index) => {
      const sprite = sprites[spriteKey];
      if (sprite === null) {
        return null;
      }
      if (typeof sprite !== 'string') {
        return (
          <li key={`${parentKey}-${spriteKey}-${index}`}>
            <h4>{spriteKey.replaceAll('_', ' ')}</h4>
            <ul>{getSprite(`${parentKey}-${spriteKey}`, sprite)}</ul>
          </li>
        );
      } else {
        return (
          <li key={`${parentKey}-${spriteKey}-${index}`}>
            <img src={sprite} alt={`${spriteKey.replace('_', ' ')}`} />
            <figcaption>{spriteKey.replaceAll('_', ' ')}</figcaption>
          </li>
        );
      }
    });
  }

  return (
    <>
      <h3>Details</h3>
      <dl>
        <dt>Name:</dt>
        <dd>{pokemon.name}</dd>
        <dt>ID:</dt>
        <dd>{pokemon.id}</dd>
        <dt>Height:</dt>
        <dd>{pokemon.height}m</dd>
        <dt>Weight:</dt>
        <dd>{pokemon.id}kg</dd>
        <dt>Images:</dt>
        <dd>
          <ul>{getSprite('sprite', pokemon.sprites)}</ul>
        </dd>
      </dl>
    </>
  );
}

export default DetailsView;
