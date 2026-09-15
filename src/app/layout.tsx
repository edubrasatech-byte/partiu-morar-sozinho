import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "#PartiuMorarSozinho — Independência Consciente",
  description: "Descubra como organizar dinheiro, rotina e decisões para conquistar sua privacidade com segurança.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white text-text-900`}>
        {children}
      </body>
    </html>
  );
}
