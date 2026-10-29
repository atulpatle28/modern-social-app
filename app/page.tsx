'use client';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-[#05030A] text-slate-100 flex overflow-hidden selection:bg-violet-600 selection:text-white">
      
      {/* Far Left Mini Icon Sidebar */}
      <aside className="w-20 bg-[#090614] border-r border-white/[0.08] flex flex-col items-center py-8 justify-between shrink-0 z-30 h-screen sticky top-0 shadow-2xl">
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
      <div className="flex-1 flex flex-col h-screen overflow-y-auto bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-950/20 via-[#05030A] to-[#05030A]">
        
        {/* Top Header */}
        <header className="sticky top-0 z-40 bg-[#05030A]/90 backdrop-blur-2xl border-b border-white/[0.08] px-8 py-5 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-widest text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-full">
            Explore Dashboard
          </span>

          <div className="flex items-center w-[480px] bg-[#0E0A1A] border border-white/[0.08] rounded-2xl px-5 py-3 shadow-inner">
            <svg className="w-4 h-4 text-violet-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Explore immersive rooms, communities, or creators..." 
              className="bg-transparent border-none outline-none text-xs w-full text-slate-200 placeholder-slate-500 font-medium"
            />
          </div>

          <div className="flex items-center space-x-4">
            <button className="w-11 h-11 rounded-2xl bg-[#0E0A1A] border border-white/[0.08] text-slate-300 flex items-center justify-center shadow-md">
              <span className="text-base">📊</span>
            </button>
            <button className="w-11 h-11 rounded-2xl bg-[#0E0A1A] border border-white/[0.08] text-slate-300 flex items-center justify-center relative shadow-md">
              <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
              <span className="text-base">🔔</span>
            </button>
          </div>
        </header>

        {/* Dashboard 3-Column Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 max-w-[1700px] mx-auto w-full">
          
          {/* Left Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-[#0E0A1A] border border-white/[0.08] rounded-3xl p-5 shadow-2xl space-y-2">
              <button onClick={() => setActiveTab('home')} className="w-full flex items-center space-x-4 px-4 py-3.5 rounded-2xl text-xs font-bold tracking-wide bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/30">
                <span className="text-base">🏠</span>
                <span>Home Feed</span>
              </button>
              <button onClick={() => setActiveTab('music')} className="w-full flex items-center space-x-4 px-4 py-3.5 rounded-2xl text-xs font-bold tracking-wide text-slate-400 hover:text-white hover:bg-white/[0.04]">
                <span className="text-base">🎵</span>
                <span>Music Lounge</span>
              </button>
              <button onClick={() => setActiveTab('gaming')} className="w-full flex items-center space-x-4 px-4 py-3.5 rounded-2xl text-xs font-bold tracking-wide text-slate-400 hover:text-white hover:bg-white/[0.04]">
                <span className="text-base">🎮</span>
                <span>Gaming & VR Hub</span>
              </button>
              <button onClick={() => setActiveTab('tech')} className="w-full flex items-center space-x-4 px-4 py-3.5 rounded-2xl text-xs font-bold tracking-wide text-slate-400 hover:text-white hover:bg-white/[0.04]">
                <span className="text-base">⚡</span>
                <span>Science & Tech</span>
              </button>
            </div>

            <div className="bg-[#0E0A1A] border border-white/[0.08] rounded-3xl p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400 font-bold">
                <span>🎵 LoFi Spatial Stream</span>
                <span className="text-violet-400 animate-pulse">LIVE</span>
              </div>
              <div className="flex items-center justify-between h-10 px-3 bg-[#05030A] rounded-2xl border border-white/[0.05]">
                <div className="w-1 bg-violet-500 h-4 rounded-full animate-pulse"></div>
                <div className="w-1 bg-indigo-500 h-8 rounded-full animate-pulse"></div>
                <div className="w-1 bg-purple-500 h-5 rounded-full animate-pulse"></div>
                <div className="w-1 bg-violet-400 h-9 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Center Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative overflow-hidden bg-gradient-to-r from-violet-950/60 via-indigo-950/50 to-purple-950/60 border border-violet-500/30 rounded-3xl p-8 shadow-2xl flex flex-col items-center justify-center text-center space-y-3">
              <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-white">
                Find Your Community on ModernConnect
              </h2>
              <p className="text-xs lg:text-sm text-slate-300 max-w-lg font-medium">
                Engage in immersive VR spaces, earn Nexus Points (NX), and unlock high-tier moderator authority.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 px-1">Featured Community & VR Rooms</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-[#0E0A1A] border border-white/[0.08] rounded-3xl p-5 shadow-2xl space-y-4">
                  <div className="h-32 rounded-2xl bg-gradient-to-br from-violet-900/60 to-slate-900 relative overflow-hidden flex items-center justify-center">
                    <span className="relative z-10 text-xs font-extrabold bg-black/70 px-4 py-1.5 rounded-full text-violet-300 border border-white/15">🥽 VR Spatial Lounge</span>
                  </div>
                  <h4 className="text-sm font-bold text-white flex justify-between">Virtual Reality Hub <span className="text-[10px] text-emerald-400">+50 NX</span></h4>
                  <p className="text-[11px] text-slate-400">Join browser-based spatial audio rooms and earn daily rewards.</p>
                </div>

                <div className="bg-[#0E0A1A] border border-white/[0.08] rounded-3xl p-5 shadow-2xl space-y-4">
                  <div className="h-32 rounded-2xl bg-gradient-to-br from-indigo-900/60 to-slate-900 relative overflow-hidden flex items-center justify-center">
                    <span className="relative z-10 text-xs font-extrabold bg-black/70 px-4 py-1.5 rounded-full text-indigo-300 border border-white/15">🎮 Gaming Tournaments</span>
                  </div>
                  <h4 className="text-sm font-bold text-white flex justify-between">Game Play Arena <span className="text-[10px] text-violet-400">Ranked</span></h4>
                  <p className="text-[11px] text-slate-400">Participate in daily tournaments and climb the global leaderboard.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-[#0E0A1A] border border-white/[0.08] rounded-3xl p-6 shadow-2xl text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-2xl overflow-hidden border-2 border-violet-500/50 shadow-xl">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Faye Marc</h4>
                <p className="text-xs text-violet-400 font-semibold">@sunset186</p>
              </div>
            </div>

            <div className="bg-[#0E0A1A] border border-white/[0.08] rounded-3xl p-6 shadow-2xl space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">New Members</h3>
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