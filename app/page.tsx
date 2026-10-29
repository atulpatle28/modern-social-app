'use client';
import { useState } from 'react';
import LiveFeed from '@/components/LiveFeed';
import QuestCard from '@/components/QuestCard';
import PollCard from '@/components/PollCard';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'explore' | 'home' | 'music' | 'gaming' | 'tech'>('explore');

  return (
    <div className="min-h-screen bg-[#07050D] text-slate-100 selection:bg-violet-600 selection:text-white flex flex-col h-screen overflow-hidden">
      
      {/* Top Header Bar */}
      <header className="sticky top-0 z-50 bg-[#07050D]/90 backdrop-blur-xl border-b border-white/[0.06] px-6 py-3.5 flex items-center justify-between shrink-0">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-indigo-300 to-purple-400">
            ModernConnect
          </h1>
          <span className="text-[10px] font-semibold uppercase tracking-widest bg-violet-500/10 text-violet-400 border border-violet-500/20 px-2.5 py-0.5 rounded-full">
            Pro v2.0
          </span>
        </div>

        {/* Global Search Bar */}
        <div className="hidden md:flex items-center w-[480px] bg-[#120F1D] border border-white/[0.08] rounded-xl px-4 py-2 focus-within:border-violet-500/50 transition-all shadow-inner">
          <svg className="w-4 h-4 text-slate-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            placeholder="Explore communities, discussions, rooms, or creators..." 
            className="bg-transparent border-none outline-none text-xs w-full text-slate-200 placeholder-slate-500"
          />
        </div>

        {/* Top Right Icons & Profile */}
        <div className="flex items-center space-x-3">
          <button className="w-9 h-9 rounded-xl bg-[#120F1D] border border-white/[0.06] text-slate-400 hover:text-slate-200 flex items-center justify-center transition-all">
            <span>📊</span>
          </button>
          <button className="w-9 h-9 rounded-xl bg-[#120F1D] border border-white/[0.06] text-slate-400 hover:text-slate-200 flex items-center justify-center transition-all relative">
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-violet-500"></span>
            <span>🔔</span>
          </button>
          <div className="w-9 h-9 rounded-xl overflow-hidden border border-violet-500/40 shadow-md">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Main App Dashboard Grid */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 overflow-hidden">
        
        {/* Left Sidebar - Navigation & Categories */}
        <div className="hidden lg:block lg:col-span-3 space-y-6 overflow-y-auto pr-2">
          <div className="bg-[#110E1B] border border-white/[0.06] rounded-2xl p-4 shadow-xl space-y-1">
            <button onClick={() => setActiveTab('explore')} className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${activeTab === 'explore' ? 'bg-violet-600/20 text-violet-400 border border-violet-500/30' : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'}`}>
              <span>🌐</span>
              <span>Explore / Home</span>
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
              <div className="w-1 bg-purple-400 h-3 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Center Main Content Area (Live Feed & Community Hero) */}
        <div className="lg:col-span-6 space-y-6 overflow-y-auto pr-2">
          
          {/* Hero Banner */}
          <div className="relative overflow-hidden bg-gradient-to-r from-violet-900/40 via-indigo-900/30 to-purple-900/40 border border-violet-500/20 rounded-3xl p-6 shadow-2xl text-center space-y-2">
            <h2 className="text-xl lg:text-2xl font-black tracking-tight text-white">
              Find Your Community on ModernConnect
            </h2>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Share ideas live, earn Nexus Points (NX), and connect with creators worldwide.
            </p>
          </div>

          {/* Database Live Feed Composer & Posts Stream */}
          <LiveFeed />

          {/* Quests & Polls Section */}
          <div className="space-y-4 pt-2">
            <QuestCard 
              title="7-Day Next.js & Tailwind Consistency Challenge" 
              category="Engineering Quest" 
              rewardXp={250} 
              daysLeft={4} 
            />
            <PollCard 
              author="Alex Rivers" 
              question="Kya AI developers ki jagah puri tarah le lega agle 5 saal mein?" 
            />
          </div>
        </div>

        {/* Right Sidebar - Stats, Members & Activity */}
        <div className="hidden lg:block lg:col-span-3 space-y-6 overflow-y-auto pr-2">
          
          {/* User Stats / NX Points Card */}
          <div className="bg-[#110E1B] border border-white/[0.06] rounded-2xl p-5 shadow-xl space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-slate-400">PROFILING & NX</span>
              <span className="text-xs font-bold text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2 py-0.5 rounded-md">Lvl 12</span>
            </div>
            <div>
              <div className="flex justify-between text-xs text-slate-300 font-medium mb-1.5">
                <span>Nexus Progress</span>
                <span className="text-violet-400 font-bold">75%</span>
              </div>
              <div className="w-full bg-[#07050D] rounded-full h-2 overflow-hidden border border-white/[0.05]">
                <div className="bg-gradient-to-r from-violet-500 to-indigo-500 h-full rounded-full w-3/4"></div>
              </div>
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
  );
}