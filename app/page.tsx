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
    <div className="min-h-screen bg-[#030107] text-slate-100 flex selection:bg-violet-600 selection:text-white font-sans antialiased overflow-x-hidden relative">
      
      {/* Background Ambient Glowing Orbs (Paid Luxury Look) */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      {/* 1. Far Left Mini Icon Bar */}
      <aside className="w-16 bg-[#07040E]/80 backdrop-blur-2xl border-r border-white/[0.06] flex flex-col items-center py-6 justify-between shrink-0 z-30 sticky top-0 h-screen shadow-2xl">
        <div className="space-y-6 flex flex-col items-center">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-violet-600 via-indigo-500 to-purple-600 flex items-center justify-center font-black text-white shadow-xl shadow-violet-900/50 ring-1 ring-white/20">
            MC
          </div>
          <div className="w-6 h-[1px] bg-white/[0.08]" />
          <button className="w-10 h-10 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30 flex items-center justify-center shadow-lg shadow-violet-900/30 transition-all hover:scale-105">
            <span>🌐</span>
          </button>
          <button className="w-10 h-10 rounded-xl text-slate-400 hover:bg-white/[0.04] hover:text-slate-200 flex items-center justify-center transition-all hover:scale-105">
            <span>⚡</span>
          </button>
          <button className="w-10 h-10 rounded-xl text-slate-400 hover:bg-white/[0.04] hover:text-slate-200 flex items-center justify-center transition-all hover:scale-105">
            <span>🛡️</span>
          </button>
        </div>

        <div className="w-10 h-10 rounded-xl overflow-hidden border border-violet-500/40 shadow-xl ring-2 ring-violet-500/20">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="Avatar" className="w-full h-full object-cover" />
        </div>
      </aside>

      {/* Main App Workspace */}
      <div className="flex-1 flex flex-col min-h-screen relative z-10">
        
        {/* Top Floating Glass Header */}
        <header className="sticky top-0 z-40 bg-[#07040E]/70 backdrop-blur-3xl border-b border-white/[0.08] px-6 py-4 flex items-center justify-between gap-4 shadow-2xl">
          <div className="flex items-center space-x-3">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-violet-400 bg-violet-500/10 border border-violet-500/30 px-3.5 py-1.5 rounded-full shadow-inner flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-ping"></span>
              <span>Enterprise OS v2.0</span>
            </span>
          </div>

          <div className="hidden md:flex items-center flex-1 max-w-md bg-[#0D0A17]/80 border border-white/[0.08] rounded-2xl px-4 py-2.5 focus-within:border-violet-500/60 focus-within:ring-2 focus-within:ring-violet-500/20 transition-all shadow-inner">
            <svg className="w-4 h-4 text-violet-400 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search secure networks, AI rooms, or global feeds..." 
              className="bg-transparent border-none outline-none text-xs w-full text-slate-200 placeholder-slate-500 font-medium"
            />
          </div>

          <div className="flex items-center space-x-3">
            <button onClick={handleClaimReward} className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xl shadow-violet-600/40 border border-white/10 transition-all flex items-center space-x-2">
              <span>🎁</span>
              <span>Claim +50 NX</span>
            </button>
          </div>
        </header>

        {/* 3-Column Luxury Dashboard Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 max-w-[1700px] mx-auto w-full">
          
          {/* Left Column: Rich Navigation Menu */}
          <div className="hidden lg:block lg:col-span-3 space-y-4">
            <div className="bg-[#0D0A17]/80 backdrop-blur-2xl border border-white/[0.08] rounded-3xl p-3.5 shadow-2xl space-y-1.5 ring-1 ring-white/5">
              <div className="px-4 py-2 text-[10px] font-extrabold uppercase tracking-widest text-slate-500">Navigation Hub</div>
              
              <button onClick={() => setActiveTab('home')} className={`w-full flex items-center space-x-3.5 px-4 py-3 rounded-2xl text-xs font-bold transition-all ${activeTab === 'home' ? 'bg-gradient-to-r from-violet-600/30 to-indigo-600/30 text-violet-300 border border-violet-500/40 shadow-lg shadow-violet-900/30' : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'}`}>
                <span>🏠</span>
                <span>Home Feed & Posts</span>
              </button>
              <button onClick={() => setActiveTab('music')} className={`w-full flex items-center space-x-3.5 px-4 py-3 rounded-2xl text-xs font-semibold transition-all ${activeTab === 'music' ? 'bg-gradient-to-r from-violet-600/30 to-indigo-600/30 text-violet-300 border border-violet-500/40 shadow-lg shadow-violet-900/30' : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'}`}>
                <span>🎵</span>
                <span>Music Lounge</span>
              </button>
              <button onClick={() => setActiveTab('gaming')} className={`w-full flex items-center space-x-3.5 px-4 py-3 rounded-2xl text-xs font-semibold transition-all ${activeTab === 'gaming' ? 'bg-gradient-to-r from-violet-600/30 to-indigo-600/30 text-violet-300 border border-violet-500/40 shadow-lg shadow-violet-900/30' : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'}`}>
                <span>🎮</span>
                <span>Gaming & VR Hub</span>
              </button>
              <button onClick={() => setActiveTab('tech')} className={`w-full flex items-center space-x-3.5 px-4 py-3 rounded-2xl text-xs font-semibold transition-all ${activeTab === 'tech' ? 'bg-gradient-to-r from-violet-600/30 to-indigo-600/30 text-violet-300 border border-violet-500/40 shadow-lg shadow-violet-900/30' : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'}`}>
                <span>⚡</span>
                <span>Science & Tech</span>
              </button>
              <button onClick={() => setActiveTab('dev')} className={`w-full flex items-center space-x-3.5 px-4 py-3 rounded-2xl text-xs font-semibold transition-all ${activeTab === 'dev' ? 'bg-gradient-to-r from-violet-600/30 to-indigo-600/30 text-violet-300 border border-violet-500/40 shadow-lg shadow-violet-900/30' : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'}`}>
                <span>🎓</span>
                <span>Student & Dev Hub</span>
              </button>
              <button onClick={() => setActiveTab('art')} className={`w-full flex items-center space-x-3.5 px-4 py-3 rounded-2xl text-xs font-semibold transition-all ${activeTab === 'art' ? 'bg-gradient-to-r from-violet-600/30 to-indigo-600/30 text-violet-300 border border-violet-500/40 shadow-lg shadow-violet-900/30' : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'}`}>
                <span>🎨</span>
                <span>3D Art & NFTs</span>
              </button>
              <button onClick={() => setActiveTab('quests')} className={`w-full flex items-center space-x-3.5 px-4 py-3 rounded-2xl text-xs font-semibold transition-all ${activeTab === 'quests' ? 'bg-gradient-to-r from-violet-600/30 to-indigo-600/30 text-violet-300 border border-violet-500/40 shadow-lg shadow-violet-900/30' : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'}`}>
                <span>🎯</span>
                <span>Daily Quests & NX</span>
              </button>
            </div>
          </div>

          {/* Center Column: Luxury Hero Banner + Live Feed */}
          <div className="lg:col-span-6 space-y-6 w-full">
            
            {/* High-End Obsidian Hero Banner */}
            <div className="relative overflow-hidden bg-gradient-to-r from-violet-950/60 via-[#120D22] to-purple-950/60 border border-violet-500/30 rounded-3xl p-8 shadow-2xl flex flex-col items-center justify-center text-center space-y-3 backdrop-blur-2xl ring-1 ring-white/10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-violet-500/20 via-transparent to-transparent pointer-events-none"></div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-violet-300 bg-violet-500/20 border border-violet-500/40 px-4 py-1.5 rounded-full shadow-inner">
                💎 Premium Verified Network
              </span>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white drop-shadow-md">
                Find Your Community & Share Live
              </h2>
              <p className="text-xs text-slate-300 max-w-md font-medium leading-relaxed">
                Engage in encrypted spaces, publish verified thoughts, and earn Nexus Points (NX) with elite tier privileges.
              </p>
            </div>

            {/* Live Database Feed */}
            <div className="w-full">
              <LiveFeed />
            </div>

          </div>

          {/* Right Column: User Profile & VIP Widgets */}
          <div className="hidden lg:block lg:col-span-3 space-y-6">
            
            {/* Elite Profile Card */}
            <div className="bg-[#0D0A17]/80 backdrop-blur-2xl border border-white/[0.08] rounded-3xl p-6 shadow-2xl text-center space-y-4 ring-1 ring-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-violet-600/10 rounded-full blur-xl pointer-events-none"></div>
              <div className="w-20 h-20 mx-auto rounded-2xl overflow-hidden border-2 border-violet-500/50 shadow-xl shadow-violet-900/50">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-white">Faye Marc</h4>
                <p className="text-xs text-violet-400 font-semibold">@sunset186</p>
              </div>
              <div className="pt-3 border-t border-white/[0.08] flex justify-around text-center">
                <div>
                  <span className="text-xs font-black text-white block">{nxPoints}</span>
                  <span className="text-[10px] text-slate-400 font-semibold tracking-wider">Nexus (NX)</span>
                </div>
                <div>
                  <span className="text-xs font-black text-violet-400 block">Level 12</span>
                  <span className="text-[10px] text-slate-400 font-semibold tracking-wider">Elite Tier</span>
                </div>
              </div>
            </div>

            {/* Verified Network Members */}
            <div className="bg-[#0D0A17]/80 backdrop-blur-2xl border border-white/[0.08] rounded-3xl p-6 shadow-2xl space-y-4 ring-1 ring-white/5">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-400">Verified Members</h3>
              <div className="space-y-3.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-200">Stella John</span>
                  <span className="text-violet-400 font-extrabold cursor-pointer hover:underline bg-violet-500/10 px-2.5 py-1 rounded-lg border border-violet-500/20">Connect</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-200">Jason Chris</span>
                  <span className="text-violet-400 font-extrabold cursor-pointer hover:underline bg-violet-500/10 px-2.5 py-1 rounded-lg border border-violet-500/20">Connect</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}