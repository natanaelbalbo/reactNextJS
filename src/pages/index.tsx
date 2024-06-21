import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Header from '../components/Header';
import CardSection from '../components/CardSection';
import styles from '../styles/Home.module.css';

const pokemonImages = {
  wartortle: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
  blastoise: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
};

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Squirtle</title>
        <meta name="description" content="Página do Squirtle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header title="Squirtle" />

      <main className={styles.main}>
        <CardSection title="Sobre o Squirtle">
          <p>Squirtle é um Pokémon do tipo Água introduzido na Geração I.</p>
        </CardSection>
        <CardSection title="Habilidades do Squirtle">
          <ul>
            <li>Torrent</li>
            <li>Rain Dish (habilidade oculta)</li>
          </ul>
        </CardSection>
        <CardSection title="Evoluções do Squirtle">
          <div className={styles.grid}>
            <Link href={{ pathname: '/evolucoes', query: { evolucao: 'wartortle' } }}>
              <Image src={pokemonImages.wartortle} alt="Wartortle" width={100} height={100} />
            </Link>
            <Link href={{ pathname: '/evolucoes', query: { evolucao: 'blastoise' } }}>
              <Image src={pokemonImages.blastoise} alt="Blastoise" width={100} height={100} />
            </Link>
          </div>
        </CardSection>
      </main>
    </div>
  );
};

export default Home;
