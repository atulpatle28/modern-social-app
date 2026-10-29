'use client';
import LiveFeed from '@/components/LiveFeed';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#07050D] text-slate-100 flex flex-col selection:bg-violet-600 selection:text-white">
      
      {/* Top Header Bar */}
      <header className="sticky top-0 z-50 bg-[#07050D]/90 backdrop-blur-xl border-b border-white/[0.06] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <h1 className="text-lg font-black tracking-tight text-white">ModernConnect</h1>
          <span className="text-[10px] font-semibold uppercase tracking-widest bg-violet-500/10 text-violet-400 border border-violet-500/20 px-2.5 py-0.5 rounded-full">
            Pro v2.0
          </span>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center w-[400px] bg-[#120F1D] border border-white/[0.08] rounded-xl px-4 py-2">
          <svg className="w-4 h-4 text-slate-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            placeholder="Search posts, discussions, or creators..." 
            className="bg-transparent border-none outline-none text-xs w-full text-slate-200 placeholder-slate-500"
          />
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl overflow-hidden border border-violet-500/40 shadow-md">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Main Center Content Without Any Sidebars */}
      <main className="flex-1 max-w-2xl w-full mx-auto px-4 py-8 space-y-6">
        
        {/* Hero Welcome Banner */}
        <div className="relative overflow-hidden bg-gradient-to-r from-violet-900/40 via-indigo-900/30 to-purple-900/40 border border-violet-500/20 rounded-3xl p-6 shadow-2xl text-center space-y-2">
          <h2 className="text-xl font-black tracking-tight text-white">
            Welcome to ModernConnect Live Feed
          </h2>
          <p className="text-xs text-slate-400">
            Share your thoughts live, interact with posts, and earn Nexus Points (NX).
          </p>
        </div>

        {/* Live Database Feed */}
        <LiveFeed />

      </main>
    </div>
  );
}