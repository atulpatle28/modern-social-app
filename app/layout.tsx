import './globals.css';

export const metadata = {
  title: 'ModernConnect Pro v2.0',
  description: 'Modern Social Media Platform with Supabase',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#07050D] text-slate-100 min-h-screen selection:bg-violet-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}