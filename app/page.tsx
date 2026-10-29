'use client';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'home' | 'music' | 'gaming' | 'education' | 'tech'>('home');

  return (
    <div className="min-h-screen bg-[#07050D] text-slate-100 selection:bg-violet-600 selection:text-white flex overflow-hidden">
      
      {/* Far Left Mini Icon Sidebar */}
      <aside className="w-16 bg-[#0B0914] border-r border-white/[0.06] flex flex-col items-center py-5 justify-between shrink-0 z-50">
        <div className="space-y-6 flex flex-col items-center">
          {/* Logo Icon */}
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center font-black text-white shadow-lg shadow-violet-900/40">
            D
          </div>
          <div className="w-8 h-[1px] bg-white/[0.08]" />
          {/* Nav Icons */}
          <button className="w-10 h-10 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30 flex items-center justify-center transition-all shadow-md">
            <span>🌐</span>
          </button>
          <button className="w-10 h-10 rounded-xl text-slate-400 hover:bg-white/[0.04] hover:text-slate-200 flex items-center justify-center transition-all">
            <span>⚡</span>
          </button>
          <button className="w-10 h-10 rounded-xl text-slate-400 hover:bg-white/[0.04] hover:text-slate-200 flex items-center justify-center transition-all">
            <span>🛡️</span>
          </button>
          <button className="w-10 h-10 rounded-xl text-slate-400 hover:bg-white/[0.04] hover:text-slate-200 flex items-center justify-center transition-all">
            <span>➕</span>
          </button>
        </div>

        {/* Bottom User Avatar */}
        <div className="w-10 h-10 rounded-xl overflow-hidden border border-violet-500/40 shadow-md">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces" alt="Avatar" className="w-full h-full object-cover" />
        </div>
      </aside>

      {/* Main App Container */}
      <div className="flex-1 flex flex-col h-screen overflow-y-auto">
        
        {/* Top Header Bar */}
        <header className="sticky top-0 z-40 bg-[#07050D]/90 backdrop-blur-xl border-b border-white/[0.06] px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="text-sm font-bold text-slate-300 tracking-wide uppercase">Explore</span>
          </div>

          {/* Search Bar */}
          <div className="flex items-center w-[420px] bg-[#120F1D] border border-white/[0.08] rounded-xl px-4 py-2 focus-within:border-violet-500/50 transition-all shadow-inner">
            <svg className="w-4 h-4 text-slate-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Explore communities, rooms, or creators..." 
              className="bg-transparent border-none outline-none text-xs w-full text-slate-200 placeholder-slate-500"
            />
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center space-x-3">
            <button className="w-9 h-9 rounded-xl bg-[#120F1D] border border-white/[0.06] text-slate-400 hover:text-slate-200 flex items-center justify-center transition-all">
              <span>📊</span>
            </button>
            <button className="w-9 h-9 rounded-xl bg-[#120F1D] border border-white/[0.06] text-slate-400 hover:text-slate-200 flex items-center justify-center transition-all relative">
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-violet-500"></span>
              <span>🔔</span>
            </button>
            <button className="w-9 h-9 rounded-xl bg-[#120F1D] border border-white/[0.06] text-slate-400 hover:text-slate-200 flex items-center justify-center transition-all">
              <span>💬</span>
            </button>
          </div>
        </header>

        {/* Dashboard Grid Layout */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 p-6">
          
          {/* Left Navigation Menu */}
          <div className="hidden lg:block lg:col-span-3 space-y-6">
            <div className="bg-[#110E1B] border border-white/[0.06] rounded-2xl p-4 shadow-xl space-y-1">
              <button onClick={() => setActiveTab('home')} className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${activeTab === 'home' ? 'bg-violet-600/20 text-violet-400 border border-violet-500/30' : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'}`}>
                <span>🏠</span>
                <span>Home</span>
              </button>
              <button onClick={() => setActiveTab('music')} className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${activeTab === 'music' ? 'bg-violet-600/20 text-violet-400 border border-violet-500/30' : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'}`}>
                <span>🎵</span>
                <span>Music</span>
              </button>
              <button onClick={() => setActiveTab('gaming')} className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${activeTab === 'gaming' ? 'bg-violet-600/20 text-violet-400 border border-violet-500/30' : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'}`}>
                <span>🎮</span>
                <span>Gaming</span>
              </button>
              <button onClick={() => setActiveTab('education')} className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${activeTab === 'education' ? 'bg-violet-600/20 text-violet-400 border border-violet-500/30' : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'}`}>
                <span>🎓</span>
                <span>Education</span>
              </button>
              <button onClick={() => setActiveTab('tech')} className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${activeTab === 'tech' ? 'bg-violet-600/20 text-violet-400 border border-violet-500/30' : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'}`}>
                <span>⚡</span>
                <span>Science & Tech</span>
              </button>
              <a href="#" className="w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-white/[0.03] transition-all">
                <span>🎬</span>
                <span>Entertainment</span>
              </a>
              <a href="#" className="w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-white/[0.03] transition-all">
                <span>📚</span>
                <span>Student Hubs</span>
              </a>
            </div>

            {/* Audio Waveform Widget at Bottom Left */}
            <div className="bg-[#110E1B] border border-white/[0.06] rounded-2xl p-4 shadow-xl space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                <span>Now Playing - LoFi Chill</span>
                <span className="text-violet-400">Live</span>
              </div>
              <div className="flex items-center justify-between h-8 px-2 bg-[#07050D] rounded-xl border border-white/[0.04]">
                <div className="w-1 bg-violet-500 h-3 rounded-full animate-pulse"></div>
                <div className="w-1 bg-indigo-500 h-6 rounded-full animate-pulse"></div>
                <div className="w-1 bg-purple-500 h-4 rounded-full animate-pulse"></div>
                <div className="w-1 bg-violet-400 h-7 rounded-full animate-pulse"></div>
                <div className="w-1 bg-indigo-400 h-5 rounded-full animate-pulse"></div>
                <div className="w-1 bg-purple-400 h-3 rounded-full animate-pulse"></div>
                <div className="w-1 bg-violet-500 h-6 rounded-full animate-pulse"></div>
              </div>
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 rounded-lg overflow-hidden border border-white/[0.1]">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop" alt="User" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-200">sunset186</h5>
                    <p className="text-[10px] text-slate-500">Active now</p>
                  </div>
                </div>
                <div className="flex space-x-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Main Content Area */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Hero Banner Card */}
            <div className="relative overflow-hidden bg-gradient-to-r from-violet-900/40 via-indigo-900/30 to-purple-900/40 border border-violet-500/20 rounded-3xl p-8 shadow-2xl flex flex-col items-center justify-center text-center space-y-3">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-violet-500/10 via-transparent to-transparent pointer-events-none"></div>
              <h2 className="text-2xl lg:text-3xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-violet-200 to-indigo-300">
                Find Your Community on ModernConnect
              </h2>
              <p className="text-xs lg:text-sm text-slate-400 max-w-md">
                Connect with creators, join live interactive rooms, earn Nexus Points (NX), and build your network.
              </p>
            </div>

            {/* Featured Community Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">Featured Community</h3>
                <span className="text-xs text-violet-400 hover:underline cursor-pointer font-medium">See all</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Card 1: Virtual Reality */}
                <div className="group relative bg-[#110E1B] border border-white/[0.06] hover:border-violet-500/40 rounded-2xl p-5 shadow-xl transition-all space-y-4 cursor-pointer overflow-hidden">
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-violet-600/10 rounded-full blur-2xl group-hover:bg-violet-600/20 transition-all"></div>
                  <div className="h-28 rounded-xl bg-gradient-to-br from-violet-900/50 via-indigo-900/40 to-slate-900 border border-white/[0.05] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=500&h=300&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-500"></div>
                    <span className="relative z-10 text-xs font-bold bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-violet-300">VR Worlds</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-200 group-hover:text-violet-400 transition-colors">Virtual Reality</h4>
                    <p className="text-[11px] text-slate-400 line-clamp-2 mt-1">A community for VR and novices alike, regular and friendly chat.</p>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-white/[0.04]">
                    <span>🟢 4,372 Online</span>
                    <span>👥 405,186 Members</span>
                  </div>
                </div>

                {/* Card 2: Game Play */}
                <div className="group relative bg-[#110E1B] border border-white/[0.06] hover:border-violet-500/40 rounded-2xl p-5 shadow-xl transition-all space-y-4 cursor-pointer overflow-hidden">
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-indigo-600/10 rounded-full blur-2xl group-hover:bg-indigo-600/20 transition-all"></div>
                  <div className="h-28 rounded-xl bg-gradient-to-br from-indigo-900/50 via-purple-900/40 to-slate-900 border border-white/[0.05] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&h=300&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-500"></div>
                    <span className="relative z-10 text-xs font-bold bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-indigo-300">Gaming Arena</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-200 group-hover:text-violet-400 transition-colors">Game Play</h4>
                    <p className="text-[11px] text-slate-400 line-clamp-2 mt-1">Always a new challenge. Great place to make new friends.</p>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-white/[0.04]">
                    <span>🟢 15,372 Online</span>
                    <span>👥 515,186 Members</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Popular Right Now Section */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">Popular Right Now</h3>
                <span className="text-xs text-violet-400 hover:underline cursor-pointer font-medium">See all</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Popular Card 1 */}
                <div className="group bg-[#110E1B] border border-white/[0.06] hover:border-violet-500/40 rounded-2xl p-4 shadow-xl transition-all flex items-center space-x-4 cursor-pointer">
                  <div className="w-16 h-16 rounded-xl overflow-hidden relative shrink-0">
                    <img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=200&h=200&fit=crop" alt="Art" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-slate-200 group-hover:text-violet-400 transition-colors">3D Art</h4>
                    <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">A great place to discuss art.</p>
                    <span className="text-[10px] text-slate-500 mt-2 block">👥 715,186 Members</span>
                  </div>
                </div>

                {/* Popular Card 2 */}
                <div className="group bg-[#110E1B] border border-white/[0.06] hover:border-violet-500/40 rounded-2xl p-4 shadow-xl transition-all flex items-center space-x-4 cursor-pointer">
                  <div className="w-16 h-16 rounded-xl overflow-hidden relative shrink-0">
                    <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&h=200&fit=crop" alt="NFT" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-slate-200 group-hover:text-violet-400 transition-colors">NFT & Digital</h4>
                    <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">An NFT community so that everyone can share their NFTs.</p>
                    <span className="text-[10px] text-slate-500 mt-2 block">👥 435,189 Members</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Sidebar - Profile & Widgets */}
          <div className="hidden lg:block lg:col-span-3 space-y-6">
            
            {/* User Profile Card */}
            <div className="bg-[#110E1B] border border-white/[0.06] rounded-2xl p-5 shadow-xl text-center space-y-4">
              <div className="relative w-20 h-20 mx-auto rounded-2xl overflow-hidden border-2 border-violet-500/40 shadow-lg shadow-violet-900/30">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop" alt="Faye Marc" className="w-full h-full object-cover" />
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
                    <div className="w-9 h-9 rounded-xl overflow-hidden border border-white/[0.1]">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Stella" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h5 className="text-xs font-semibold text-slate-200">Stella John</h5>
                      <p className="text-[10px] text-slate-500">5 min ago</p>
                    </div>
                  </div>
                  <span className="text-xs text-violet-400 font-medium cursor-pointer hover:underline">Add</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-xl overflow-hidden border border-white/[0.1]">
                      <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" alt="Jason" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h5 className="text-xs font-semibold text-slate-200">Jason Chris</h5>
                      <p className="text-[10px] text-slate-500">5 min ago</p>
                    </div>
                  </div>
                  <span className="text-xs text-violet-400 font-medium cursor-pointer hover:underline">Add</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-xl overflow-hidden border border-white/[0.1]">
                      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Jessa" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h5 className="text-xs font-semibold text-slate-200">Jessa Hart</h5>
                      <p className="text-[10px] text-slate-500">5 min ago</p>
                    </div>
                  </div>
                  <span className="text-xs text-violet-400 font-medium cursor-pointer hover:underline">Add</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-xl overflow-hidden border border-white/[0.1]">
                      <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop" alt="Miley" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h5 className="text-xs font-semibold text-slate-200">Miley Chris</h5>
                      <p className="text-[10px] text-slate-500">5 min ago</p>
                    </div>
                  </div>
                  <span className="text-xs text-violet-400 font-medium cursor-pointer hover:underline">Add</span>
                </div>
              </div>
            </div>

            {/* Recent Activity Widget */}
            <div className="bg-[#110E1B] border border-white/[0.06] rounded-2xl p-5 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Recent Activity</h3>
                <span className="text-xs text-violet-400 hover:underline cursor-pointer font-medium">See all</span>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start space-x-2.5">
                  <span className="text-violet-400 mt-0.5">💬</span>
                  <p className="text-[11px] leading-relaxed">
                    <strong className="text-slate-200">Maria Laval</strong> invited you to a channel <span className="text-violet-400">2 min ago</span>
                  </p>
                </div>
                <div className="flex items-start space-x-2.5">
                  <span className="text-indigo-400 mt-0.5">⚡</span>
                  <p className="text-[11px] leading-relaxed">
                    <strong className="text-slate-200">Mark Morain</strong> invited you to a chat <span className="text-violet-400">5 min ago</span>
                  </p>
                </div>
                <div className="flex items-start space-x-2.5">
                  <span className="text-emerald-400 mt-0.5">👋</span>
                  <p className="text-[11px] leading-relaxed">
                    <strong className="text-slate-200">Hola Spine</strong> started following you <span className="text-violet-400">8 min ago</span>
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}