import Head from 'next/head';
import Header from '../components/Header';
import CardSection from '../components/CardSection';
import styles from '../styles/Home.module.css';

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
      </main>
    </div>
  );
};

export default Home;
