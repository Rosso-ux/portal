import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <h1 className={styles.titulo}>Bem-vindo ao Portal de Viagens!</h1>
      <p className={styles.descricao}>
        Descubra destinos incríveis ao redor do planeta! Nosso portal reúne os
        lugares mais encantadores para você conhecer, explorar e se inspirar.
      </p>
      <p className={styles.descricao}>
        Cada destino tem sua própria magia — praias paradisíacas, cidades
        históricas e paisagens de tirar o fôlego. Clique abaixo e embarque nessa
        jornada!
      </p>
      <Link href="/destinos" className={styles.link}>
        Ver destinos
      </Link>
    </div>
  );
}
