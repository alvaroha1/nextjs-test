import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Character, GetCharacterResults } from "../types";
import Image from "next/image";
import { imageLoader } from "../imageLoader";
import Link from "next/link";
import Layout from "../components/Layout"

const RickAndMortyPage: NextPage<{ characters: Character[] }> = ({ characters }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <p>main</p> */}
        {characters.map((character) => {
          return (
            <div key={character.id}>
              <Link href={`characters/${character.id}`}>
                <a>
                  <h3>{character.name}</h3>
                </a>
              </Link>
              <Image
                loader={imageLoader}
                unoptimized
                src={character.image}
                alt={character.name}
                width="200px"
                height="200px"
              />
            </div>
          );
        })}
      </main>

      <footer className={styles.footer}>{/* <p>footer</p> */}</footer>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const { results }: GetCharacterResults = await res.json();
  return {
    props: {
      characters: results,
    },
  };
};

export default RickAndMortyPage;
