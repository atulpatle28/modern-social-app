'use client';
import { useState } from 'react';
import LiveFeed from '@/components/LiveFeed';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'home' | 'music' | 'gaming' | 'tech'>('home');

  return (
    <div className="min-h-screen bg-[#07050D] text-slate-100 flex overflow-hidden selection:bg-violet-600 selection:text-white">
      
      {/* 1. Far Left Mini Icon Sidebar (Jaise reference image mein hai) */}
      <aside className="w-16 bg-[#0B0914] border-r border-white/[0.06] flex flex-col items-center py-5 justify-between shrink-0 z-30">
        <div className="space-y-6 flex flex-col items-center">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center font-black text-white shadow-lg shadow-violet-900/40">
            MC
          </div>
          <div className="w-8 h-[1px] bg-white/[0.08]" />
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

      {/* Main Container */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Top Header Bar */}
        <header className="bg-[#07050D] border-b border-white/[0.06] px-6 py-3.5 flex items-center justify-between shrink-0 z-20">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Explore</span>
          </div>

          {/* Search Bar */}
          <div className="flex items-center w-[460px] bg-[#120F1D] border border-white/[0.08] rounded-xl px-4 py-2 focus-within:border-violet-500/50 transition-all shadow-inner">
            <svg className="w-4 h-4 text-slate-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Explore communities, rooms, or creators..." 
              className="bg-transparent border-none outline-none text-xs w-full text-slate-200 placeholder-slate-500"
            />
          </div>

          {/* Right Header Icons */}
          <div className="flex items-center space-x-3">
            <button className="w-9 h-9 rounded-xl bg-[#120F1D] border border-white/[0.06] text-slate-400 hover:text-slate-200 flex items-center justify-center">
              <span>📊</span>
            </button>
            <button className="w-9 h-9 rounded-xl bg-[#120F1D] border border-white/[0.06] text-slate-400 hover:text-slate-200 flex items-center justify-center relative">
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-violet-500"></span>
              <span>🔔</span>
            </button>
          </div>
        </header>

        {/* 3-Column Dashboard Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 overflow-y-auto">
          
          {/* Left Column: Categories Menu & Audio Widget */}
          <div className="hidden lg:block lg:col-span-3 space-y-6">
            <div className="bg-[#110E1B] border border-white/[0.06] rounded-2xl p-4 shadow-xl space-y-1">
              <button onClick={() => setActiveTab('home')} className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${activeTab === 'home' ? 'bg-violet-600/20 text-violet-400 border border-violet-500/30' : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'}`}>
                <span>🏠</span>
                <span>Home</span>
              </button>
              <button onClick={() => setActiveTab('music')} className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${activeTab === 'music' ? 'bg-violet-600/20 text-violet-400 border border-violet-500/30' : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'}`}>
                <span>🎵</span>
                <span>Music Hub</span>
              </button>
              <button onClick={() => setActiveTab('gaming')} className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${activeTab === 'gaming' ? 'bg-violet-600/20 text-violet-400 border border-violet-500/30' : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'}`}>
                <span>🎮</span>
                <span>Gaming Arena</span>
              </button>
              <button onClick={() => setActiveTab('tech')} className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${activeTab === 'tech' ? 'bg-violet-600/20 text-violet-400 border border-violet-500/30' : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'}`}>
                <span>⚡</span>
                <span>Science & Tech</span>
              </button>
            </div>

            {/* Audio Waveform Widget */}
            <div className="bg-[#110E1B] border border-white/[0.06] rounded-2xl p-4 shadow-xl space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                <span>Now Playing - LoFi Chill</span>
                <span className="text-violet-400 animate-pulse">Live</span>
              </div>
              <div className="flex items-center justify-between h-8 px-3 bg-[#07050D] rounded-xl border border-white/[0.04]">
                <div className="w-1 bg-violet-500 h-3 rounded-full animate-pulse"></div>
                <div className="w-1 bg-indigo-500 h-6 rounded-full animate-pulse"></div>
                <div className="w-1 bg-purple-500 h-4 rounded-full animate-pulse"></div>
                <div className="w-1 bg-violet-400 h-7 rounded-full animate-pulse"></div>
                <div className="w-1 bg-indigo-400 h-5 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Center Column: Hero Banner & Live Database Feed */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative overflow-hidden bg-gradient-to-r from-violet-900/40 via-indigo-900/30 to-purple-900/40 border border-violet-500/20 rounded-3xl p-6 shadow-2xl text-center space-y-2">
              <h2 className="text-xl lg:text-2xl font-black tracking-tight text-white">
                Find Your Community on ModernConnect
              </h2>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Connect with creators, join live interactive rooms, and earn Nexus Points (NX).
              </p>
            </div>

            {/* Live Feed Component */}
            <LiveFeed />
          </div>

          {/* Right Column: Profile & New Members Widgets */}
          <div className="hidden lg:block lg:col-span-3 space-y-6">
            
            {/* Profile Card */}
            <div className="bg-[#110E1B] border border-white/[0.06] rounded-2xl p-5 shadow-xl text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-2xl overflow-hidden border-2 border-violet-500/40 shadow-lg">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-100">Faye Marc</h4>
                <p className="text-xs text-violet-400">@sunset186</p>
              </div>
            </div>

            {/* New Members Widget */}
            <div className="bg-[#110E1B] border border-white/[0.06] rounded-2xl p-5 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">New Members</h3>
                <span className="text-xs text-violet-400 hover:underline cursor-pointer font-medium">See all</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-xl overflow-hidden border border-white/[0.1]">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Stella" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h5 className="text-xs font-semibold text-slate-200">Stella John</h5>
                      <p className="text-[10px] text-slate-500">5 min ago</p>
                    </div>
                  </div>
                  <span className="text-xs text-violet-400 font-medium cursor-pointer">Add</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-xl overflow-hidden border border-white/[0.1]">
                      <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" alt="Jason" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h5 className="text-xs font-semibold text-slate-200">Jason Chris</h5>
                      <p className="text-[10px] text-slate-500">5 min ago</p>
                    </div>
                  </div>
                  <span className="text-xs text-violet-400 font-medium cursor-pointer">Add</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}