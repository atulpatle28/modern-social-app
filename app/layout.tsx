import './globals.css';
import { Outfit } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
  title: 'ModernConnect Pro v2.0',
  description: 'High-End Gamified Social Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.className}>
      <body className="bg-[#040208] text-slate-100 min-h-screen selection:bg-violet-600 selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}