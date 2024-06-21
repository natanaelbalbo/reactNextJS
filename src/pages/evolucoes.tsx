import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CardSection from '../components/CardSection';

type Pokemon = {
  sprites:{
    front_default: string
  }
}

const Evolucoes = () => {
  const router = useRouter();
  const { evolucao } = router.query;
  const [pokemonData, setPokemonData] = useState<Pokemon | null>(null);

  useEffect(() => {
    if (evolucao) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${evolucao}`)
        .then(response => response.json())
        .then(data => setPokemonData(data));
    }
  }, [evolucao]);

  return (
    <div>
      {pokemonData ? (
        <CardSection title={evolucao as string}>
          <img src={pokemonData.sprites.front_default} alt={evolucao as string} />
        </CardSection>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Evolucoes;
