'use client';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'home' | 'music' | 'gaming' | 'education' | 'tech'>('home');

  return (
    <div className="min-h-screen bg-[#040208] text-slate-100 flex overflow-hidden selection:bg-violet-600 selection:text-white">
      
      {/* 1. Far Left Mini Icon Sidebar */}
      <aside className="w-20 bg-[#080511] border-r border-white/[0.06] flex flex-col items-center py-8 justify-between shrink-0 z-30 h-screen sticky top-0 shadow-2xl">
        <div className="space-y-6 flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-purple-500 flex items-center justify-center font-extrabold text-white text-lg shadow-lg shadow-violet-600/40 ring-1 ring-white/20">
            MC
          </div>
          <div className="w-8 h-[1px] bg-white/[0.08]" />
          <button className="w-12 h-12 rounded-2xl bg-violet-600/20 text-violet-400 border border-violet-500/30 flex items-center justify-center shadow-lg shadow-violet-900/30 transition-all hover:scale-105">
            <span className="text-lg">🌐</span>
          </button>
          <button className="w-12 h-12 rounded-2xl text-slate-400 hover:bg-white/[0.05] hover:text-slate-200 flex items-center justify-center transition-all">
            <span className="text-lg">⚡</span>
          </button>
          <button className="w-12 h-12 rounded-2xl text-slate-400 hover:bg-white/[0.05] hover:text-slate-200 flex items-center justify-center transition-all">
            <span className="text-lg">🛡️</span>
          </button>
          <button className="w-12 h-12 rounded-2xl text-slate-400 hover:bg-white/[0.05] hover:text-slate-200 flex items-center justify-center transition-all">
            <span className="text-lg">➕</span>
          </button>
        </div>

        {/* Bottom User Avatar */}
        <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-violet-500/40 shadow-md">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="Avatar" className="w-full h-full object-cover" />
        </div>
      </aside>

      {/* Main App Container */}
      <div className="flex-1 flex flex-col h-screen overflow-y-auto bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-950/20 via-[#040208] to-[#040208]">
        
        {/* Top Header Bar */}
        <header className="sticky top-0 z-40 bg-[#040208]/80 backdrop-blur-2xl border-b border-white/[0.06] px-8 py-5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-bold uppercase tracking-widest text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-full">
              Explore Feed
            </span>
          </div>

          {/* Search Bar */}
          <div className="flex items-center w-[500px] bg-[#0A0714] border border-white/[0.08] rounded-2xl px-5 py-3 focus-within:border-violet-500/60 focus-within:ring-2 focus-within:ring-violet-500/20 transition-all shadow-inner">
            <svg className="w-4 h-4 text-violet-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Explore immersive rooms, communities, or creators..." 
              className="bg-transparent border-none outline-none text-xs w-full text-slate-200 placeholder-slate-500 font-medium"
            />
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center space-x-4">
            <button className="w-11 h-11 rounded-2xl bg-[#0A0714] border border-white/[0.08] text-slate-300 hover:text-white flex items-center justify-center transition-all shadow-md">
              <span className="text-base">📊</span>
            </button>
            <button className="w-11 h-11 rounded-2xl bg-[#0A0714] border border-white/[0.08] text-slate-300 hover:text-white flex items-center justify-center transition-all relative shadow-md">
              <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
              <span className="text-base">🔔</span>
            </button>
          </div>
        </header>

        {/* Dashboard 3-Column Layout */}
        <div className="flex-1 grid grid-cols-1 xl:grid-cols-12 gap-8 p-8 max-w-[1700px] mx-auto w-full">
          
          {/* Left Navigation Column (Span 3) */}
          <div className="hidden xl:block xl:col-span-3 space-y-6">
            <div className="bg-[#0A0714]/90 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-5 shadow-2xl space-y-2 ring-1 ring-white/5">
              <button onClick={() => setActiveTab('home')} className={`w-full flex items-center space-x-4 px-4 py-3.5 rounded-2xl text-xs font-bold tracking-wide transition-all ${activeTab === 'home' ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/30' : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'}`}>
                <span className="text-base">🏠</span>
                <span>Home Feed</span>
              </button>
              <button onClick={() => setActiveTab('music')} className={`w-full flex items-center space-x-4 px-4 py-3.5 rounded-2xl text-xs font-bold tracking-wide transition-all ${activeTab === 'music' ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/30' : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'}`}>
                <span className="text-base">🎵</span>
                <span>Music Lounge</span>
              </button>
              <button onClick={() => setActiveTab('gaming')} className={`w-full flex items-center space-x-4 px-4 py-3.5 rounded-2xl text-xs font-bold tracking-wide transition-all ${activeTab === 'gaming' ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/30' : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'}`}>
                <span className="text-base">🎮</span>
                <span>Gaming & VR Hub</span>
              </button>
              <button onClick={() => setActiveTab('education')} className={`w-full flex items-center space-x-4 px-4 py-3.5 rounded-2xl text-xs font-bold tracking-wide transition-all ${activeTab === 'education' ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/30' : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'}`}>
                <span className="text-base">🎓</span>
                <span>Education Hub</span>
              </button>
              <button onClick={() => setActiveTab('tech')} className={`w-full flex items-center space-x-4 px-4 py-3.5 rounded-2xl text-xs font-bold tracking-wide transition-all ${activeTab === 'tech' ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/30' : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'}`}>
                <span className="text-base">⚡</span>
                <span>Science & Tech</span>
              </button>
            </div>

            {/* Audio Waveform Widget */}
            <div className="bg-[#0A0714]/90 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-6 shadow-2xl space-y-4 ring-1 ring-white/5">
              <div className="flex items-center justify-between text-xs text-slate-400 font-bold">
                <span>🎵 LoFi Spatial Stream</span>
                <span className="text-violet-400 animate-pulse">LIVE</span>
              </div>
              <div className="flex items-center justify-between h-10 px-3 bg-[#040208] rounded-2xl border border-white/[0.05]">
                <div className="w-1 bg-violet-500 h-4 rounded-full animate-pulse"></div>
                <div className="w-1 bg-indigo-500 h-8 rounded-full animate-pulse"></div>
                <div className="w-1 bg-purple-500 h-5 rounded-full animate-pulse"></div>
                <div className="w-1 bg-violet-400 h-9 rounded-full animate-pulse"></div>
                <div className="w-1 bg-indigo-400 h-6 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Center Column: Hero & Featured Communities (Span 6) */}
          <div className="xl:col-span-6 space-y-6">
            
            {/* Hero Banner */}
            <div className="relative overflow-hidden bg-gradient-to-r from-violet-950/60 via-indigo-950/50 to-purple-950/60 border border-violet-500/30 rounded-3xl p-8 shadow-2xl flex flex-col items-center justify-center text-center space-y-3 backdrop-blur-2xl ring-1 ring-white/10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-violet-500/20 via-transparent to-transparent pointer-events-none"></div>
              <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-violet-200 to-indigo-300">
                Find Your Community on ModernConnect
              </h2>
              <p className="text-xs lg:text-sm text-slate-300 max-w-lg font-medium leading-relaxed">
                Engage in immersive VR spaces, earn Nexus Points (NX), and unlock high-tier moderator authority.
              </p>
            </div>

            {/* Featured Community & VR Rooms */}
            <div className="space-y-4">
              <div className="flex items-center justify-between px-1">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Featured Community & VR Rooms</h3>
                <span className="text-xs text-violet-400 hover:underline cursor-pointer font-bold">Explore All</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {/* VR Card */}
                <div className="group relative bg-[#0A0714]/90 backdrop-blur-xl border border-white/[0.08] hover:border-violet-500/50 rounded-3xl p-5 shadow-2xl transition-all space-y-4 cursor-pointer overflow-hidden ring-1 ring-white/5">
                  <div className="h-32 rounded-2xl bg-gradient-to-br from-violet-900/60 via-indigo-900/50 to-slate-900 border border-white/[0.08] flex items-center justify-center relative overflow-hidden shadow-inner">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=500&h=300&fit=crop')] bg-cover bg-center opacity-50 group-hover:scale-105 transition-transform duration-700"></div>
                    <span className="relative z-10 text-xs font-extrabold bg-black/70 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/15 text-violet-300 shadow-xl">
                      🥽 VR Spatial Lounge
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-violet-400 transition-colors flex items-center justify-between">
                      Virtual Reality Hub
                      <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md font-bold">+50 NX / hr</span>
                    </h4>
                    <p className="text-[11px] text-slate-400 line-clamp-2 mt-1 font-medium">Join browser-based spatial audio rooms and earn daily activity rewards.</p>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
                    <span className="text-[11px] text-slate-400 font-semibold">🟢 4,372 Online</span>
                    <button className="bg-violet-600 hover:bg-violet-500 text-white font-bold text-[10px] px-4 py-1.5 rounded-xl transition-all shadow-md shadow-violet-900/40">
                      Join Room
                    </button>
                  </div>
                </div>

                {/* Gaming Card */}
                <div className="group relative bg-[#0A0714]/90 backdrop-blur-xl border border-white/[0.08] hover:border-indigo-500/50 rounded-3xl p-5 shadow-2xl transition-all space-y-4 cursor-pointer overflow-hidden ring-1 ring-white/5">
                  <div className="h-32 rounded-2xl bg-gradient-to-br from-indigo-900/60 via-purple-900/50 to-slate-900 border border-white/[0.08] flex items-center justify-center relative overflow-hidden shadow-inner">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&h=300&fit=crop')] bg-cover bg-center opacity-50 group-hover:scale-105 transition-transform duration-700"></div>
                    <span className="relative z-10 text-xs font-extrabold bg-black/70 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/15 text-indigo-300 shadow-xl">
                      🎮 Gaming Tournaments
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors flex items-center justify-between">
                      Game Play Arena
                      <span className="text-[10px] text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2 py-0.5 rounded-md font-bold">Ranked</span>
                    </h4>
                    <p className="text-[11px] text-slate-400 line-clamp-2 mt-1 font-medium">Participate in daily tournaments and climb the global Nexus leaderboard.</p>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
                    <span className="text-[11px] text-slate-400 font-semibold">🟢 15,372 Online</span>
                    <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-[10px] px-4 py-1.5 rounded-xl transition-all shadow-md shadow-indigo-900/40">
                      Play Now
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Popular Right Now */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between px-1">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Popular Right Now</h3>
                <span className="text-xs text-violet-400 hover:underline cursor-pointer font-bold">See All</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="group bg-[#0A0714]/90 backdrop-blur-xl border border-white/[0.08] hover:border-violet-500/50 rounded-3xl p-4 shadow-2xl transition-all flex items-center space-x-4 cursor-pointer ring-1 ring-white/5">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden relative shrink-0 border border-white/10 shadow-md">
                    <img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=200&h=200&fit=crop" alt="Art" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-white group-hover:text-violet-400 transition-colors">3D Digital Art</h4>
                    <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5 font-medium">Discuss renders & sculpts.</p>
                    <span className="text-[10px] text-slate-500 mt-2 block font-semibold">👥 715,186 Members</span>
                  </div>
                </div>

                <div className="group bg-[#0A0714]/90 backdrop-blur-xl border border-white/[0.08] hover:border-violet-500/50 rounded-3xl p-4 shadow-2xl transition-all flex items-center space-x-4 cursor-pointer ring-1 ring-white/5">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden relative shrink-0 border border-white/10 shadow-md">
                    <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&h=200&fit=crop" alt="NFT" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-white group-hover:text-violet-400 transition-colors">NFT & Digital</h4>
                    <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5 font-medium">Share collectables.</p>
                    <span className="text-[10px] text-slate-500 mt-2 block font-semibold">👥 435,189 Members</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Profile & New Members (Span 3) */}
          <div className="hidden xl:block xl:col-span-3 space-y-6">
            
            {/* User Profile Card */}
            <div className="bg-[#0A0714]/90 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-6 shadow-2xl text-center space-y-4 ring-1 ring-white/5">
              <div className="relative w-20 h-20 mx-auto rounded-2xl overflow-hidden border-2 border-violet-500/50 shadow-xl shadow-violet-900/40">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop" alt="Faye Marc" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Faye Marc</h4>
                <p className="text-xs text-violet-400 font-semibold">@sunset186</p>
              </div>
              <div className="pt-3 border-t border-white/[0.06] flex justify-around text-center">
                <div>
                  <span className="text-xs font-bold text-white block">1,240</span>
                  <span className="text-[10px] text-slate-400 font-semibold">Nexus (NX)</span>
                </div>
                <div>
                  <span className="text-xs font-bold text-violet-400 block">Level 12</span>
                  <span className="text-[10px] text-slate-400 font-semibold">Tier Rank</span>
                </div>
              </div>
            </div>

            {/* New Members Widget */}
            <div className="bg-[#0A0714]/90 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-6 shadow-2xl space-y-4 ring-1 ring-white/5">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">New Members</h3>
                <span className="text-xs text-violet-400 hover:underline cursor-pointer font-bold">See All</span>
              </div>

              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-xl overflow-hidden border border-white/[0.1] shadow-md">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Stella" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-slate-200">Stella John</h5>
                      <p className="text-[10px] text-slate-500 font-medium">5 min ago</p>
                    </div>
                  </div>
                  <span className="text-xs text-violet-400 font-bold cursor-pointer hover:underline">Add</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-xl overflow-hidden border border-white/[0.1] shadow-md">
                      <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" alt="Jason" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-slate-200">Jason Chris</h5>
                      <p className="text-[10px] text-slate-500 font-medium">5 min ago</p>
                    </div>
                  </div>
                  <span className="text-xs text-violet-400 font-bold cursor-pointer hover:underline">Add</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}