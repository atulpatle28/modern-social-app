'use client';
import { useState } from 'react';
import LiveFeed from '@/components/LiveFeed';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [nxPoints, setNxPoints] = useState(1240);

  const handleClaimReward = () => {
    setNxPoints(prev => prev + 50);
    alert("🎉 +50 Nexus Points (NX) claimed successfully!");
  };

  return (
    <div className="min-h-screen bg-[#07050D] text-slate-100 flex selection:bg-violet-600 selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* 1. Far Left Mini Icon Bar */}
      <aside className="w-16 bg-[#0B0814]/90 backdrop-blur-xl border-r border-white/[0.06] flex flex-col items-center py-6 justify-between shrink-0 z-30 sticky top-0 h-screen">
        <div className="space-y-6 flex flex-col items-center">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center font-black text-white shadow-lg shadow-violet-900/40">
            MC
          </div>
          <div className="w-6 h-[1px] bg-white/[0.08]" />
          <button className="w-10 h-10 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30 flex items-center justify-center shadow-md">
            <span>🌐</span>
          </button>
          <button className="w-10 h-10 rounded-xl text-slate-400 hover:bg-white/[0.04] hover:text-slate-200 flex items-center justify-center transition-all">
            <span>⚡</span>
          </button>
          <button className="w-10 h-10 rounded-xl text-slate-400 hover:bg-white/[0.04] hover:text-slate-200 flex items-center justify-center transition-all">
            <span>🛡️</span>
          </button>
        </div>

        <div className="w-10 h-10 rounded-xl overflow-hidden border border-violet-500/40 shadow-md">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="Avatar" className="w-full h-full object-cover" />
        </div>
      </aside>

      {/* Main App Workspace */}
      <div className="flex-1 flex flex-col min-h-screen">
        
        {/* Top Floating Header */}
        <header className="sticky top-0 z-40 bg-[#07050D]/80 backdrop-blur-xl border-b border-white/[0.06] px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3 py-1.5 rounded-full">
              Explore Feed
            </span>
          </div>

          <div className="hidden md:flex items-center flex-1 max-w-md bg-[#110E1B] border border-white/[0.08] rounded-2xl px-4 py-2.5 focus-within:border-violet-500/50 transition-all shadow-inner">
            <svg className="w-4 h-4 text-violet-400 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search discussions, rooms, or creators..." 
              className="bg-transparent border-none outline-none text-xs w-full text-slate-200 placeholder-slate-500 font-medium"
            />
          </div>

          <div className="flex items-center space-x-3">
            <button onClick={handleClaimReward} className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-lg shadow-violet-600/30 transition-all">
              🎁 +50 NX
            </button>
          </div>
        </header>

        {/* 3-Column Clean Dashboard Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 max-w-[1600px] mx-auto w-full">
          
          {/* Left Column: Navigation Menu */}
          <div className="hidden lg:block lg:col-span-3 space-y-4">
            <div className="bg-[#110E1B] border border-white/[0.06] rounded-3xl p-3 shadow-xl space-y-1">
              <button onClick={() => setActiveTab('home')} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all ${activeTab === 'home' ? 'bg-violet-600/20 text-violet-400 border border-violet-500/30' : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'}`}>
                <span>🏠</span>
                <span>Home Feed & Posts</span>
              </button>
              <button onClick={() => setActiveTab('music')} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl text-xs font-semibold transition-all ${activeTab === 'music' ? 'bg-violet-600/20 text-violet-400 border border-violet-500/30' : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'}`}>
                <span>🎵</span>
                <span>Music Lounge</span>
              </button>
              <button onClick={() => setActiveTab('gaming')} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl text-xs font-semibold transition-all ${activeTab === 'gaming' ? 'bg-violet-600/20 text-violet-400 border border-violet-500/30' : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'}`}>
                <span>🎮</span>
                <span>Gaming & VR Hub</span>
              </button>
            </div>
          </div>

          {/* Center Column: Hero Banner + Live Feed */}
          <div className="lg:col-span-6 space-y-6 w-full">
            
            {/* Sleek Hero Banner */}
            <div className="relative overflow-hidden bg-gradient-to-r from-violet-950/50 via-indigo-950/40 to-purple-950/50 border border-violet-500/20 rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col items-center justify-center text-center space-y-3">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-violet-500/10 via-transparent to-transparent pointer-events-none"></div>
              <h2 className="text-xl md:text-2xl font-black tracking-tight text-white">
                Find Your Community & Share Live
              </h2>
              <p className="text-xs text-slate-400 max-w-md">
                Engage in discussions, publish thoughts, and earn Nexus Points (NX) to unlock moderator perks.
              </p>
            </div>

            {/* Live Database Feed (Posts & Composer) */}
            <div className="w-full">
              <LiveFeed />
            </div>

          </div>

          {/* Right Column: User Profile & Widgets */}
          <div className="hidden lg:block lg:col-span-3 space-y-6">
            
            {/* Profile Card */}
            <div className="bg-[#110E1B] border border-white/[0.06] rounded-3xl p-5 shadow-xl text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl overflow-hidden border-2 border-violet-500/40 shadow-lg">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Faye Marc</h4>
                <p className="text-xs text-violet-400 font-semibold">@sunset186</p>
              </div>
              <div className="pt-3 border-t border-white/[0.06] flex justify-around text-center">
                <div>
                  <span className="text-xs font-black text-white block">{nxPoints}</span>
                  <span className="text-[10px] text-slate-400 font-medium">Nexus (NX)</span>
                </div>
                <div>
                  <span className="text-xs font-black text-violet-400 block">Level 12</span>
                  <span className="text-[10px] text-slate-400 font-medium">Rank Tier</span>
                </div>
              </div>
            </div>

            {/* New Members Widget */}
            <div className="bg-[#110E1B] border border-white/[0.06] rounded-3xl p-5 shadow-xl space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">New Members</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-200">Stella John</span>
                  <span className="text-violet-400 font-bold cursor-pointer hover:underline">Add</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-200">Jason Chris</span>
                  <span className="text-violet-400 font-bold cursor-pointer hover:underline">Add</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}