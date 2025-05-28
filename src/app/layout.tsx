import type { Metadata } from 'next';
import './globals.css';
import { Archivo } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Find the Mountaint Goat', // Change this to your desired title
  description: `A unique application approach for Remark's Frontend Engineer position, by Jonathan Hammond`, // Change this
};

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        {children}
      </body>
    </html>
  );
}