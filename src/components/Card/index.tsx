/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./CardDestino.module.css";

interface CardDestinoProps {
  id: number;
  title: string;
  imagem: string;
  descricaoCurta: string;
}

export default function CardDestino({
  id,
  title,
  imagem,
  descricaoCurta,
}: CardDestinoProps) {
  return (
    <div className={styles.card}>
      <img src={imagem} alt={title} className={styles.imagem} />
      <div className={styles.conteudo}>
        <h3>{title}</h3>
        <p>{descricaoCurta}</p>
        <Link href={`/destinos/${id}`} className={styles.botao}>
          Ver mais
        </Link>
      </div>
    </div>
  );
}
