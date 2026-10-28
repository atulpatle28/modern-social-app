'use client';
import { useState } from 'react';

interface PollProps {
  author: string;
  question: string;
}

export default function PollCard({ author, question }: PollProps) {
  const [votes, setVotes] = useState({ yes: 12, no: 4 }); // Starter engagement numbers
  const [hasVoted, setHasVoted] = useState(false);
  const [userVote, setUserVote] = useState<'yes' | 'no' | null>(null);

  const handleVote = (type: 'yes' | 'no') => {
    if (!hasVoted) {
      setVotes(prev => ({ ...prev, [type]: prev[type] + 1 }));
      setUserVote(type);
      setHasVoted(true);
    }
  };

  const totalVotes = votes.yes + votes.no;
  const yesPercentage = totalVotes === 0 ? 0 : Math.round((votes.yes / totalVotes) * 100);
  const noPercentage = totalVotes === 0 ? 0 : Math.round((votes.no / totalVotes) * 100);

  return (
    <div className="bg-[#1C182E] border border-slate-800/80 rounded-2xl p-6 shadow-xl mb-6">
      <div className="flex justify-between items-center mb-3">
        <span className="bg-violet-500/10 text-violet-400 text-xs font-semibold px-3 py-1 rounded-full border border-violet-500/20">
          Battle of Opinions • By {author}
        </span>
        <span className="text-xs text-slate-400">{totalVotes} total votes</span>
      </div>

      <h3 className="text-lg font-bold text-slate-100 mb-5">{question}</h3>

      {!hasVoted ? (
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => handleVote('yes')} 
            className="w-full bg-slate-900/60 hover:bg-violet-600/10 border border-slate-800 hover:border-violet-500/50 text-slate-200 hover:text-violet-300 font-semibold py-3 px-4 rounded-xl transition-all shadow-sm flex items-center justify-center space-x-2"
          >
            <span>👍</span>
            <span>Yes</span>
          </button>
          <button 
            onClick={() => handleVote('no')} 
            className="w-full bg-slate-900/60 hover:bg-rose-600/10 border border-slate-800 hover:border-rose-500/50 text-slate-200 hover:text-rose-300 font-semibold py-3 px-4 rounded-xl transition-all shadow-sm flex items-center justify-center space-x-2"
          >
            <span>👎</span>
            <span>No</span>
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Yes Result Bar */}
          <div className="relative overflow-hidden bg-slate-900/60 border border-slate-800 rounded-xl p-4">
            <div 
              className={`absolute inset-y-0 left-0 transition-all duration-700 ${userVote === 'yes' ? 'bg-violet-600/30 border-r-2 border-violet-500' : 'bg-slate-800/40'}`} 
              style={{ width: `${yesPercentage}%` }}
            />
            <div className="flex justify-between items-center relative z-10">
              <span className={`font-semibold ${userVote === 'yes' ? 'text-violet-300' : 'text-slate-300'}`}>
                👍 Yes {userVote === 'yes' && '(Your Vote)'}
              </span>
              <span className="text-sm font-bold text-violet-400">{yesPercentage}%</span>
            </div>
          </div>

          {/* No Result Bar */}
          <div className="relative overflow-hidden bg-slate-900/60 border border-slate-800 rounded-xl p-4">
            <div 
              className={`absolute inset-y-0 left-0 transition-all duration-700 ${userVote === 'no' ? 'bg-rose-600/30 border-r-2 border-rose-500' : 'bg-slate-800/40'}`} 
              style={{ width: `${noPercentage}%` }}
            />
            <div className="flex justify-between items-center relative z-10">
              <span className={`font-semibold ${userVote === 'no' ? 'text-rose-300' : 'text-slate-300'}`}>
                👎 No {userVote === 'no' && '(Your Vote)'}
              </span>
              <span className="text-sm font-bold text-rose-400">{noPercentage}%</span>
            </div>
          </div>
          <p className="text-center text-xs text-slate-500 pt-1">Vote recorded securely. Thanks for participating!</p>
        </div>
      )}
    </div>
  );
}