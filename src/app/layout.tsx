import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Bea — Nosso Infinito ♡',
  description: 'Um universo romântico feito para a Bea. Feliz aniversário atrasado, meu amor.',
  icons: { icon: '/icon.svg' },
  robots: { index: false, follow: false },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
