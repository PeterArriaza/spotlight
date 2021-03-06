import React, { useState, useEffect } from "react";
import Homepage from "../components/homepage";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { getTokenFromUrl } from "./api/spotify";

export default function Home() {
  const [token, setToken] = useState();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }

    console.log("token", token);
  }, []);

  return token ? (
    <div>
      <h1>Logged in</h1>
    </div>
  ) : (
    <div className={styles.container}>
      <Head>
        <title>Spotlight</title>
        <meta name="description" content="a better way to search for music" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.background}>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
