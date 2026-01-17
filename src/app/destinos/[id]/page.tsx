import { destinos } from "@/data/destino";
import Image from "next/image";
import styles from "../destinos.module.css";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;

  const destino = destinos.find((d) => d.id === Number(id));

  if (!destino) {
    return <p>Destino não encontrado.</p>;
  }

  return (
    <div className={styles.container}>
      <h2>{destino.title}</h2>

      <Image
        src={destino.imagem}
        alt={destino.title}
        width={800}
        height={500}
        priority
      />

      <p className={styles.descricao}>{destino.descricaoCompleta}</p>
    </div>
  );
}
