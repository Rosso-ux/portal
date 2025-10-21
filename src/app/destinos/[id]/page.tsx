/* eslint-disable @next/next/no-img-element */

import { destinos } from "@/data/destino";
import styles from "../destinos.module.css";

interface Params {
  id: string;
}

// ✅ Aqui a função precisa ser async
export default async function DestinoDetalhe({
  params,
}: {
  params: Params | Promise<Params>;
}) {
  // 🔹 Garantir que params seja resolvido
  const resolvedParams = params instanceof Promise ? await params : params;
  const { id } = resolvedParams;

  const destino = destinos.find((d) => d.id === Number(id));

  if (!destino) {
    return <p>Destino não encontrado.</p>;
  }

  return (
    <div className={styles.container}>
      <h2>{destino.title}</h2>
      <img
        src={destino.imagem}
        alt={destino.title}
        style={{
          maxWidth: "600px",
          borderRadius: "10px",
          marginTop: "1rem",
        }}
      />
      <p style={{ marginTop: "1rem", lineHeight: "1.6" }}>
        {destino.descricaoCompleta}
      </p>
    </div>
  );
}
