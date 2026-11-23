import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Beatriz — Nosso Infinito ♡',
  description: 'Feliz aniversário, Beatriz! Um universo de anime, fotos e carinho feito pelo Eduardo para você.',
  icons: { icon: '/icon.svg' },
  robots: { index: false, follow: false },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
