'use client';
import { useState } from 'react';
import PollCard from '@/components/PollCard';
import PostCard from '@/components/PostCard';
import QuestCard from '@/components/QuestCard';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'forYou' | 'following' | 'quests'>('forYou');

  return (
    <div className="min-h-screen bg-[#0B0914] text-slate-100 selection:bg-violet-500 selection:text-white">
      
      {/* Top Sticky Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#0B0914]/80 border-b border-white/[0.08] px-4 lg:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <h1 className="text-xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-indigo-300 to-purple-400">
            ModernConnect
          </h1>
          <span className="hidden sm:inline-block text-[10px] font-semibold uppercase tracking-widest bg-violet-500/10 text-violet-400 border border-violet-500/20 px-2.5 py-0.5 rounded-full">
            Pro v2.0
          </span>
        </div>

        {/* Global Search Bar */}
        <div className="hidden md:flex items-center w-96 bg-[#151221] border border-white/[0.08] rounded-xl px-3.5 py-2 focus-within:border-violet-500/50 transition-all shadow-inner">
          <svg className="w-4 h-4 text-slate-500 mr-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            placeholder="Search discussions, polls, or creators..." 
            className="bg-transparent border-none outline-none text-sm w-full text-slate-200 placeholder-slate-500"
          />
        </div>

        {/* User Profile Pill */}
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-500 p-0.5 shadow-lg shadow-violet-900/30 flex items-center justify-center font-bold text-sm text-white">
            MC
          </div>
        </div>
      </header>

      {/* Main Container Layout */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 py-6">
        
        {/* Left Sidebar - Navigation */}
        <div className="hidden lg:block lg:col-span-3 space-y-2 sticky top-24 h-[calc(100vh-7rem)]">
          <div className="bg-[#151221] border border-white/[0.08] rounded-2xl p-4 shadow-xl">
            <nav className="space-y-1">
              <a href="#" className="flex items-center space-x-3 px-3.5 py-2.5 rounded-xl bg-violet-600/15 text-violet-400 font-semibold text-sm transition-all border border-violet-500/20">
                <span>🏠</span>
                <span>Home Feed</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-white/[0.03] font-medium text-sm transition-all">
                <span>🔥</span>
                <span>Discover</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-white/[0.03] font-medium text-sm transition-all">
                <span>🛡️</span>
                <span>Interest Rooms</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-white/[0.03] font-medium text-sm transition-all">
                <span>⚡</span>
                <span>Daily Quests</span>
              </a>
            </nav>
          </div>
        </div>

        {/* Center Content Feed */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Feed Filter Tabs */}
          <div className="flex items-center space-x-2 bg-[#151221] border border-white/[0.08] p-1.5 rounded-2xl shadow-lg">
            <button 
              onClick={() => setActiveTab('forYou')}
              className={`flex-1 py-2.5 text-xs font-semibold rounded-xl transition-all ${activeTab === 'forYou' ? 'bg-violet-600 text-white shadow-md shadow-violet-900/40' : 'text-slate-400 hover:text-slate-200'}`}
            >
              For You
            </button>
            <button 
              onClick={() => setActiveTab('following')}
              className={`flex-1 py-2.5 text-xs font-semibold rounded-xl transition-all ${activeTab === 'following' ? 'bg-violet-600 text-white shadow-md shadow-violet-900/40' : 'text-slate-400 hover:text-slate-200'}`}
            >
              Following
            </button>
            <button 
              onClick={() => setActiveTab('quests')}
              className={`flex-1 py-2.5 text-xs font-semibold rounded-xl transition-all ${activeTab === 'quests' ? 'bg-violet-600 text-white shadow-md shadow-violet-900/40' : 'text-slate-400 hover:text-slate-200'}`}
            >
              Quests & Polls
            </button>
          </div>

          {/* Post Composer Box */}
          <div className="bg-[#151221] border border-white/[0.08] rounded-2xl p-5 shadow-xl space-y-4">
            <textarea 
              rows={3}
              placeholder="What's cooking in your mind? Share an idea or start a debate..."
              className="w-full bg-[#0B0914] border border-white/[0.06] rounded-xl p-4 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-violet-500/50 resize-none transition-all"
            ></textarea>
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center space-x-2 text-xs text-slate-400">
                <button className="hover:text-violet-400 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.05] transition-colors">📊 Poll</button>
                <button className="hover:text-violet-400 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.05] transition-colors">🖼️ Image</button>
              </div>
              <button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold text-xs px-5 py-2.5 rounded-xl shadow-lg shadow-violet-900/30 transition-all">
                Publish Post
              </button>
            </div>
          </div>

          {/* Dynamic Feed Stream */}
          <div className="space-y-6">
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
            
            <PostCard 
              author="Rahul Patle" 
              content="Building ModernConnect with Next.js App Router and Tailwind CSS v4 has been an absolute breeze. The performance and DX are unreal! 🚀" 
              timeAgo="2 hours ago" 
            />
          </div>
        </div>

        {/* Right Sidebar - Widgets & Trends */}
        <div className="hidden lg:block lg:col-span-3 space-y-6 sticky top-24 h-[calc(100vh-7rem)]">
          
          {/* User Level / XP Card */}
          <div className="bg-[#151221] border border-white/[0.08] rounded-2xl p-5 shadow-xl space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-slate-400">PROFILING & XP</span>
              <span className="text-xs font-bold text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2 py-0.5 rounded-md">Lvl 12</span>
            </div>
            <div>
              <div className="flex justify-between text-xs text-slate-300 font-medium mb-1.5">
                <span>Daily Quest Progress</span>
                <span className="text-violet-400 font-bold">75%</span>
              </div>
              <div className="w-full bg-[#0B0914] rounded-full h-2 overflow-hidden border border-white/[0.05]">
                <div className="bg-gradient-to-r from-violet-500 to-indigo-500 h-full rounded-full w-3/4"></div>
              </div>
            </div>
          </div>

          {/* Trending Communities */}
          <div className="bg-[#151221] border border-white/[0.08] rounded-2xl p-5 shadow-xl space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Trending Topics</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between group cursor-pointer">
                <div>
                  <h4 className="text-sm font-semibold text-slate-200 group-hover:text-violet-400 transition-colors">#WebDevelopment</h4>
                  <p className="text-[11px] text-slate-500">12.4k discussions</p>
                </div>
                <span className="text-xs text-violet-400 font-medium">Join</span>
              </div>
              <div className="flex items-center justify-between group cursor-pointer">
                <div>
                  <h4 className="text-sm font-semibold text-slate-200 group-hover:text-violet-400 transition-colors">#ArtificialIntelligence</h4>
                  <p className="text-[11px] text-slate-500">24.8k discussions</p>
                </div>
                <span className="text-xs text-violet-400 font-medium">Join</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}