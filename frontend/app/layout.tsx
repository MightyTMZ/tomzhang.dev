import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tom - Freelance Developer | Web & App Development',
  description: 'Professional web & app development, bots, and automation solutions. Custom projects tailored to your needs.',
  keywords: 'web development, mobile apps, bots, automation, freelance developer',
  authors: [{ name: 'Tom' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}