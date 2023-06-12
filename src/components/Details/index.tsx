import { useParams } from 'react-router-dom';
import DetailsView from './View';

function Details() {
  const params = useParams();

  const { pokemonId } = params;
  if (!pokemonId) {
    return <></>;
  }

  return <DetailsView pokemonId={parseInt(pokemonId, 10)} />;
}

export default Details;
