import { destinos } from "@/data/destino";
import CardDestino from "@/components/Card";
import styles from "./destinos.module.css";

export default function DestinosPage() {
  return (
    <div className={styles.container}>
      <h2>Destinos Turísticos</h2>
      <div className={styles.grid}>
        {destinos.map((destino) => (
          <CardDestino key={destino.id} {...destino} />
        ))}
      </div>
    </div>
  );
}
