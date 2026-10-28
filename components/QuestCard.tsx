'use client';
import { useState } from 'react';

interface QuestProps {
  title: string;
  category: string;
  rewardXp: number;
  daysLeft: number;
}

export default function QuestCard({ title, category, rewardXp, daysLeft }: QuestProps) {
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    setCompleted(true);
  };

  return (
    <div className="bg-[#151221] border border-white/[0.08] rounded-2xl p-5 shadow-xl hover:border-violet-500/30 transition-all">
      <div className="flex justify-between items-start mb-3">
        <span className="bg-violet-500/10 text-violet-400 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-violet-500/20">
          {category}
        </span>
        <span className="text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
          +{rewardXp} XP
        </span>
      </div>

      <h4 className="font-bold text-slate-100 text-base mb-1">{title}</h4>
      <p className="text-xs text-slate-400 mb-4">Complete this mission to boost your developer rank and level up.</p>

      <div className="flex items-center justify-between pt-3 border-t border-white/[0.05]">
        <span className="text-xs text-slate-500 font-medium">⏳ {daysLeft} days remaining</span>
        
        <button
          onClick={handleComplete}
          disabled={completed}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            completed
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 cursor-default'
              : 'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-violet-900/30'
          }`}
        >
          {completed ? '✓ Completed (+XP)' : 'Start Quest'}
        </button>
      </div>
    </div>
  );
}
