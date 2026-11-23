import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Nosso Infinito — Feliz Aniversário ♡',
  description: 'Um universo romântico com animes, memórias e uma surpresa de aniversário atrasado.',
  icons: { icon: '/icon.svg' },
  robots: { index: false, follow: false },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
