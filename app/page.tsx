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
    <div className="min-h-screen bg-[#040208] text-slate-100 flex flex-col md:flex-row overflow-x-hidden selection:bg-violet-600 selection:text-white font-sans">
      
      {/* 1. Far Left Mini Icon Sidebar (Hidden on small mobile, visible on desktop) */}
      <aside className="hidden md:flex w-20 bg-[#080511]/90 backdrop-blur-2xl border-r border-white/[0.08] flex-col items-center py-8 justify-between shrink-0 z-30 h-screen sticky top-0 shadow-2xl">
        <div className="space-y-6 flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-purple-500 flex items-center justify-center font-extrabold text-white text-lg shadow-lg shadow-violet-600/40 ring-1 ring-white/20">
            MC
          </div>
          <div className="w-8 h-[1px] bg-white/[0.08]" />
          <button className="w-12 h-12 rounded-2xl bg-violet-600/25 text-violet-400 border border-violet-500/40 flex items-center justify-center shadow-lg shadow-violet-900/30">
            <span className="text-lg">🌐</span>
          </button>
          <button className="w-12 h-12 rounded-2xl text-slate-400 hover:bg-white/[0.05] hover:text-slate-200 flex items-center justify-center transition-all">
            <span className="text-lg">⚡</span>
          </button>
          <button className="w-12 h-12 rounded-2xl text-slate-400 hover:bg-white/[0.05] hover:text-slate-200 flex items-center justify-center transition-all">
            <span className="text-lg">🛡️</span>
          </button>
        </div>

        <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-violet-500/40 shadow-md">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="Avatar" className="w-full h-full object-cover" />
        </div>
      </aside>

      {/* Main Container */}
      <div className="flex-1 flex flex-col min-h-screen overflow-y-auto bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-950/30 via-[#040208] to-[#040208]">
        
        {/* Top Header (Fully Responsive) */}
        <header className="sticky top-0 z-40 bg-[#040208]/90 backdrop-blur-2xl border-b border-white/[0.08] px-4 md:px-8 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <span className="text-[10px] md:text-xs font-extrabold uppercase tracking-widest text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3 py-1.5 rounded-full shadow-inner">
              ⚡ Ecosystem Active
            </span>
          </div>

          <div className="hidden sm:flex items-center flex-1 max-w-md bg-[#0A0714] border border-white/[0.08] rounded-2xl px-4 py-2.5 shadow-inner focus-within:border-violet-500/50 transition-all">
            <svg className="w-4 h-4 text-violet-400 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search immersive rooms or posts..." 
              className="bg-transparent border-none outline-none text-xs w-full text-slate-200 placeholder-slate-500 font-medium"
            />
          </div>

          <div className="flex items-center space-x-3">
            <button onClick={handleClaimReward} className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-[11px] font-bold px-3 py-2 rounded-xl shadow-lg shadow-violet-600/30">
              🎁 +50 NX
            </button>
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-violet-500/40 shadow-md md:hidden">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="Avatar" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        {/* Dashboard Grid Layout (Mobile Friendly Column Stack) */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 md:p-8 max-w-[1700px] mx-auto w-full">
          
          {/* Left Navigation Sidebar (Desktop) */}
          <div className="hidden lg:block lg:col-span-3 space-y-6">
            <div className="bg-[#0A0714]/90 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-5 shadow-2xl space-y-2">
              <button onClick={() => setActiveTab('home')} className="w-full flex items-center space-x-4 px-4 py-3.5 rounded-2xl text-xs font-bold bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg">
                <span>🏠</span>
                <span>Home Feed & Posts</span>
              </button>
              <button onClick={() => setActiveTab('music')} className="w-full flex items-center space-x-4 px-4 py-3.5 rounded-2xl text-xs font-bold text-slate-400 hover:text-white hover:bg-white/[0.04]">
                <span>🎵</span>
                <span>Music Lounge</span>
              </button>
              <button onClick={() => setActiveTab('gaming')} className="w-full flex items-center space-x-4 px-4 py-3.5 rounded-2xl text-xs font-bold text-slate-400 hover:text-white hover:bg-white/[0.04]">
                <span>🎮</span>
                <span>Gaming & VR Hub</span>
              </button>
            </div>
          </div>

          {/* Center Column: Hero Banner + Live Database Feed */}
          <div className="lg:col-span-6 space-y-6 w-full">
            
            {/* Hero Banner */}
            <div className="relative overflow-hidden bg-gradient-to-r from-violet-950/80 via-indigo-950/60 to-purple-950/80 border border-violet-500/40 rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col items-center justify-center text-center space-y-3">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-violet-300 bg-violet-500/20 border border-violet-500/30 px-3 py-1 rounded-full">
                🚀 ModernConnect Community
              </span>
              <h2 className="text-xl md:text-3xl font-black tracking-tight text-white">
                Share, Discuss & Earn Nexus Points (NX)
              </h2>
              <p className="text-xs text-slate-300 max-w-md font-medium">
                Create posts, engage in discussions, and build your reputation across devices seamlessly.
              </p>
            </div>

            {/* LIVE POST FEED COMPONENT INTEGRATED HERE */}
            <div className="w-full">
              <LiveFeed />
            </div>

          </div>

          {/* Right Column: Profile & Stats (Stacks nicely on mobile) */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* User Profile Card */}
            <div className="bg-[#0A0714]/90 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-6 shadow-2xl text-center space-y-4">
              <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto rounded-2xl overflow-hidden border-2 border-violet-500/50 shadow-xl">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Faye Marc</h4>
                <p className="text-xs text-violet-400 font-semibold">@sunset186</p>
              </div>
              <div className="pt-3 border-t border-white/[0.06] flex justify-around text-center">
                <div>
                  <span className="text-xs font-black text-white block">{nxPoints}</span>
                  <span className="text-[10px] text-slate-400 font-semibold">Nexus (NX)</span>
                </div>
                <div>
                  <span className="text-xs font-black text-violet-400 block">Level 12</span>
                  <span className="text-[10px] text-slate-400 font-semibold">Tier Rank</span>
                </div>
              </div>
            </div>

            {/* New Members Widget */}
            <div className="bg-[#0A0714]/90 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-6 shadow-2xl space-y-4">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-400">New Members</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-200">Stella John</span>
                  <span className="text-xs text-violet-400 font-bold cursor-pointer">Add</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-200">Jason Chris</span>
                  <span className="text-xs text-violet-400 font-bold cursor-pointer">Add</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}