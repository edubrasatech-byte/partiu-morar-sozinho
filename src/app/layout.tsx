import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '#PartiuMorarSozinho — O Guia Prático Para Conquistar Sua Independência',
  description:
    'O plano realista para sair da casa dos seus pais sem cair na armadilha do aluguel e sem quebrar as pernas na vida adulta.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${plusJakarta.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-[#07090E] text-[#ECEFF4]">
        {children}
      </body>
    </html>
  );
}
