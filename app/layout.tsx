import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Météo France Pro — La météo en temps réel",
  description: "Prévisions, cartes météo et alertes pour la France.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
