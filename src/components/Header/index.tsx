import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>🌍 Portal de Viagens</h1>
      <nav>
        <Link href="/">Início</Link>
        <Link href="/destinos">Destinos</Link>
      </nav>
    </header>
  );
}
