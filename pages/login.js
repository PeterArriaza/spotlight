import Image from "next/image";
import Link from "next/link";
import styles from "/styles/Home.module.css";
import { loginUrl } from "./api/spotify";

export default function Login() {
  return (
    <div className={`${styles.login} ${styles.background}`}>
      <Image
        priority
        src="/images/spotify-icons-logos/logos/02_CMYK/02_PNG/Spotify_Logo_CMYK_Green.png"
        width={591}
        height={177}
        alt={"spotify logo"}
      />

      <Link href={loginUrl}>
        <a>LOGIN WITH SPOTIFY</a>
      </Link>

      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </div>
  );
}
