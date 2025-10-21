import Header from "../components/Header";
import type { Metadata } from "next";
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
      <body>
        <Header>{children}</Header>
      </body>
    </html>
  );
}
