import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ModernConnect — Connect. Play. Grow.',
  description: 'A premium social experience for communities, polls, and daily missions.',
  manifest: '/manifest.json', // PWA preparation
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#0F0C1B] text-slate-100 min-h-screen flex flex-col md:flex-row`}>
        
        {/* Desktop Sidebar (Left) */}
        <aside className="hidden md:flex w-64 flex-col fixed inset-y-0 left-0 border-r border-slate-800/50 bg-[#161326]/80 backdrop-blur-xl p-4">
          <div className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-500 mb-8">
            ModernConnect
          </div>
          <nav className="space-y-2 flex-1">
            <Link href="/" className="block px-4 py-3 rounded-xl bg-violet-600/10 text-violet-400 font-medium">Home</Link>
            <Link href="/explore" className="block px-4 py-3 rounded-xl hover:bg-slate-800/50 transition-colors">Discover</Link>
            <Link href="/rooms" className="block px-4 py-3 rounded-xl hover:bg-slate-800/50 transition-colors">Interest Rooms</Link>
            <Link href="/missions" className="block px-4 py-3 rounded-xl hover:bg-slate-800/50 transition-colors">Daily Missions</Link>
          </nav>
          <button className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 rounded-xl shadow-lg shadow-violet-900/20 transition-all">
            Create Post
          </button>
        </aside>

        {/* Main Central Feed */}
        <main className="flex-1 md:ml-64 md:mr-80 min-h-screen border-r border-slate-800/50 pb-20 md:pb-0">
          {/* Mobile Header */}
          <header className="md:hidden sticky top-0 z-50 bg-[#161326]/90 backdrop-blur-xl border-b border-slate-800/50 p-4 flex justify-between items-center">
            <div className="text-xl font-black text-violet-400">MC.</div>
            <div className="w-8 h-8 rounded-full bg-slate-700"></div>
          </header>
          
          <div className="max-w-2xl mx-auto w-full">
            {children}
          </div>
        </main>

        {/* Desktop Right Sidebar (Contextual) */}
        <aside className="hidden xl:block w-80 fixed inset-y-0 right-0 p-6 space-y-6">
          <div className="bg-[#1C182E] rounded-2xl p-5 border border-slate-800/50 shadow-xl">
            <h3 className="font-bold mb-4 text-slate-200">Your Stats</h3>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Current Level</span>
              <span className="font-bold text-violet-400">Lvl 12</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2 mt-2">
              <div className="bg-gradient-to-r from-violet-500 to-indigo-500 h-2 rounded-full w-[45%]"></div>
            </div>
            <p className="text-xs text-slate-500 mt-2">450 / 1000 XP to Level 13</p>
          </div>
          
          <div className="bg-[#1C182E] rounded-2xl p-5 border border-slate-800/50 shadow-xl">
            <h3 className="font-bold mb-4 text-slate-200">Trending Debates</h3>
            {/* Trending items will go here */}
          </div>
        </aside>

        {/* Mobile Bottom Navigation */}
        <nav className="md:hidden fixed bottom-0 w-full bg-[#161326]/95 backdrop-blur-xl border-t border-slate-800/50 flex justify-around p-3 z-50">
          <Link href="/" className="p-2 text-violet-400">Home</Link>
          <Link href="/explore" className="p-2 text-slate-400">Search</Link>
          <button className="p-2 -mt-6 bg-violet-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg shadow-violet-900/30 text-white font-bold text-xl">+</button>
          <Link href="/missions" className="p-2 text-slate-400">Quests</Link>
          <Link href="/profile" className="p-2 text-slate-400">Profile</Link>
        </nav>

      </body>
    </html>
  );
}