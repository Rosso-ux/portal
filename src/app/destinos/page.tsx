import { destinos } from "@/data/destino";
import Card from "@/components/Card";
import styles from "./destinos.module.css";

export default function DestinosPage() {
  return (
    <div className={styles.container}>
      <h2>Destinos Turísticos</h2>
      <div className={styles.grid}>
        {destinos.map((destino) => (
          <Card key={destino.id} {...destino} />
        ))}
      </div>
    </div>
  );
}
