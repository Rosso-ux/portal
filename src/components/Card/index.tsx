import Image from "next/image";
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
      <Image
        src={imagem}
        alt={title}
        width={400}
        height={250}
        className={styles.imagem}
        loading="lazy"
      />

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
