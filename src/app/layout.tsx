import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "Portal de Viagens",
  description: "Explore destinos incríveis ao redor do mundo!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={styles.layout}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
