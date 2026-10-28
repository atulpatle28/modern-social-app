
"use client";

import { useState } from "react";
import {
  Sparkles,
  Flame,
  Zap,
  MessageCircle,
  Bookmark,
  ArrowUpRight,
  Check,
  Plus,
  Users,
  Trophy,
  Target,
  TrendingUp,
  ChevronRight,
  Send,
} from "lucide-react";

const initialPolls = [
  {
    id: 1,
    tag: "TECH BATTLE",
    title: "AI developers ki jagah puri tarah le lega agle 5 saal mein?",
    description: "The future of coding is in your hands.",
    a: "Yes, definitely",
    b: "No, humans matter",
    votes: 2400,
    comments: 184,
    color: "from-violet-500 to-indigo-500",
  },
  {
    id: 2,
    tag: "LIFE & GROWTH",
    title: "Success ke liye sabse important kya hai?",
    description: "Choose what you believe makes the biggest difference.",
    a: "Hard work",
    b: "Smart decisions",
    votes: 1860,
    comments: 96,
    color: "from-fuchsia-500 to-pink-500",
  },
];

const quests = [
  { title: "Share one bold idea", xp: 50, icon: Sparkles },
  { title: "Vote in a community debate", xp: 25, icon: MessageCircle },
  { title: "Discover a new interest", xp: 25, icon: Target },
];

const trends = [
  { tag: "#ArtificialIntelligence", count: "24.8k discussions" },
  { tag: "#WebDevelopment", count: "12.4k discussions" },
  { tag: "#LifeGoals", count: "8.6k discussions" },
];

export default function ModernHomeFeed() {
  const [tab, setTab] = useState("For You");
  const [pollVotes, setPollVotes] = useState<Record<number, string>>({});
  const [saved, setSaved] = useState<number[]>([]);
  const [done, setDone] = useState<number[]>([]);
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState<string[]>([]);

  const publishPost = () => {
    const value = post.trim();
    if (!value) return;
    setPosts((previous) => [value, ...previous]);
    setPost("");
  };

  const visiblePolls =
    tab === "Quests"
      ? []
      : tab === "Following"
        ? initialPolls.slice(0, 1)
        : initialPolls;

  return (
    <main className="min-w-0 space-y-6 bg-[#0b0912] text-slate-100">

      {/* Welcome header */}
      <header className="flex items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-violet-400">
            <Sparkles size={15} />
            YOUR COMMUNITY, YOUR WORLD
          </div>
          <h1 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
            What's your <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">next move?</span>
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Discover ideas. Challenge opinions. Make connections.
          </p>
        </div>
        <div className="hidden size-12 shrink-0 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300 sm:flex">
          <Zap size={23} />
        </div>
      </header>

      {/* Community Pulse */}
      <section className="relative isolate overflow-hidden rounded-3xl border border-violet-400/20 bg-gradient-to-br from-[#291548] via-[#1b112d] to-[#110e19] p-5 sm:p-6">
        <div className="pointer-events-none absolute -right-10 -top-16 -z-10 size-48 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="flex items-center gap-2 text-xs font-bold text-violet-300">
          <span className="size-2 animate-pulse rounded-full bg-emerald-400" />
          COMMUNITY PULSE
          <span className="ml-auto rounded-full border border-white/10 px-2 py-1 text-[10px] text-slate-400">
            TODAY'S SPOTLIGHT
          </span>
        </div>

        <h2 className="mt-4 max-w-lg text-2xl font-black leading-tight sm:text-3xl">
          One opinion can start a thousand conversations.
        </h2>
        <p className="mt-3 max-w-lg text-sm leading-6 text-slate-400">
          What do you believe in? Share your perspective and discover what
          the ModernConnect community thinks.
        </p>

        <a
          href="#battle-arena"
          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-violet-500"
        >
          Enter the Battle Arena
          <ArrowUpRight size={17} />
        </a>

        <div className="mt-6 grid grid-cols-3 gap-2 border-t border-white/10 pt-5">
          <div>
            <p className="text-lg font-black">Discover</p>
            <p className="mt-1 text-[11px] text-slate-400">New ideas</p>
          </div>
          <div>
            <p className="text-lg font-black">Challenge</p>
            <p className="mt-1 text-[11px] text-slate-400">Your thinking</p>
          </div>
          <div>
            <p className="text-lg font-black">Connect</p>
            <p className="mt-1 text-[11px] text-slate-400">With people</p>
          </div>
        </div>
      </section>

      {/* Composer */}
      <section className="rounded-2xl border border-white/[0.08] bg-[#15111f] p-4 sm:p-5">
        <div className="flex gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-sm font-black text-white">
            MC
          </div>
          <div className="min-w-0 flex-1">
            <label htmlFor="community-post" className="mb-2 block text-sm font-bold">
              Create something worth talking about
            </label>
            <textarea
              id="community-post"
              value={post}
              onChange={(event) => setPost(event.target.value)}
              placeholder="What's on your mind? Share an idea, question or hot take..."
              rows={3}
              className="w-full resize-y rounded-xl border border-white/[0.07] bg-[#0e0b16] p-3 text-sm leading-6 text-white outline-none placeholder:text-slate-500 focus:border-violet-500/50"
            />
          </div>
        </div>

        <div className="mt-3 flex justify-end">
          <button
            onClick={publishPost}
            disabled={!post.trim()}
            className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Send size={15} />
            Publish
          </button>
        </div>

        {posts.map((item, index) => (
          <article key={`${item}-${index}`} className="mt-4 rounded-xl border border-white/[0.08] bg-[#0e0b16] p-4">
            <p className="mb-2 text-xs font-bold text-violet-300">YOUR DRAFTED POST</p>
            <p className="whitespace-pre-wrap text-sm leading-6 text-slate-200">{item}</p>
          </article>
        ))}
        <p className="mt-3 text-[11px] text-slate-500">
          Demo mode: posts are visible only in this page session.
        </p>
      </section>

      {/* Navigation tabs */}
      <div className="flex gap-2 overflow-x-auto rounded-2xl border border-white/[0.07] bg-[#15111f] p-2">
        {["For You", "Following", "Quests"].map((item) => (
          <button
            key={item}
            onClick={() => setTab(item)}
            className={`shrink-0 rounded-xl px-4 py-2.5 text-xs font-bold transition ${
              tab === item
                ? "bg-violet-600 text-white shadow-lg shadow-violet-950/40"
                : "text-slate-400 hover:bg-white/[0.05] hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Battle Arena */}
      {tab !== "Quests" && (
        <section id="battle-arena" className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-orange-400/10 text-orange-300">
                <Flame size={20} />
              </div>
              <div>
                <h2 className="text-lg font-black">Battle Arena</h2>
                <p className="mt-1 text-xs text-slate-500">
                  Cast your vote. Respect every opinion.
                </p>
              </div>
            </div>
            <TrendingUp size={20} className="text-violet-400" />
          </div>

          {visiblePolls.map((poll) => {
            const selected = pollVotes[poll.id];

            return (
              <article key={poll.id} className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#15111f]">
                <div className={`h-1 bg-gradient-to-r ${poll.color}`} />
                <div className="p-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-lg border border-violet-400/15 bg-violet-500/10 px-2.5 py-1.5 text-[10px] font-bold tracking-wide text-violet-300">
                      {poll.tag}
                    </span>
                    <button
                      aria-label="Save poll"
                      aria-pressed={saved.includes(poll.id)}
                      onClick={() =>
                        setSaved((previous) =>
                          previous.includes(poll.id)
                            ? previous.filter((id) => id !== poll.id)
                            : [...previous, poll.id]
                        )
                      }
                      className={`rounded-lg p-2 ${saved.includes(poll.id) ? "text-violet-300" : "text-slate-500 hover:text-white"}`}
                    >
                      <Bookmark size={17} fill={saved.includes(poll.id) ? "currentColor" : "none"} />
                    </button>
                  </div>

                  <h3 className="mt-4 text-lg font-extrabold leading-snug">
                    {poll.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">{poll.description}</p>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {[poll.a, poll.b].map((option) => (
                      <button
                        key={option}
                        aria-pressed={selected === option}
                        onClick={() =>
                          setPollVotes((previous) => ({
                            ...previous,
                            [poll.id]: option,
                          }))
                        }
                        className={`rounded-xl border p-3 text-sm font-bold transition ${
                          selected === option
                            ? "border-violet-500 bg-violet-600 text-white"
                            : "border-white/[0.08] bg-[#0e0b16] text-slate-300 hover:border-violet-400/40 hover:bg-violet-500/10"
                        }`}
                      >
                        {selected === option && <Check size={14} className="mr-1 inline" />}
                        {option}
                      </button>
                    ))}
                  </div>

                  {selected && (
                    <p className="mt-3 text-xs text-violet-300">
                      Selected: {selected}. This demo vote is not submitted to a server.
                    </p>
                  )}

                  <div className="mt-4 flex items-center justify-between border-t border-white/[0.07] pt-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Users size={14} />
                      {(poll.votes / 1000).toFixed(1)}k votes
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MessageCircle size={14} />
                      {poll.comments} comments
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      )}

      {/* Daily Quest */}
      {(tab === "Quests" || tab === "For You") && (
        <section className="overflow-hidden rounded-2xl border border-violet-400/20 bg-gradient-to-br from-[#241538] to-[#15111f] p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-violet-300">
                <Zap size={15} />
                YOUR DAILY CHALLENGE
              </div>
              <h2 className="mt-2 text-xl font-black">Small actions. Real progress.</h2>
              <p className="mt-2 text-sm text-slate-400">
                Complete missions and build your community reputation.
              </p>
            </div>
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
              <Trophy size={21} />
            </div>
          </div>

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400 transition-all"
              style={{ width: `${(done.length / quests.length) * 100}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-slate-400">
            {done.length} of {quests.length} missions completed
          </p>

          <div className="mt-4 space-y-2">
            {quests.map((quest, index) => {
              const Icon = quest.icon;
              const completed = done.includes(index);

              return (
                <button
                  key={quest.title}
                  onClick={() =>
                    setDone((previous) =>
                      completed
                        ? previous.filter((id) => id !== index)
                        : [...previous, index]
                    )
                  }
                  className="flex w-full items-center gap-3 rounded-xl border border-white/[0.07] bg-black/15 p-3 text-left transition hover:bg-white/[0.04]"
                >
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300">
                    {completed ? <Check size={17} /> : <Icon size={17} />}
                  </div>
                  <span className="min-w-0 flex-1 text-sm font-semibold">
                    {quest.title}
                  </span>
                  <span className="shrink-0 text-xs font-bold text-amber-300">
                    +{quest.xp} XP
                  </span>
                </button>
              );
            })}
          </div>

          <p className="mt-3 text-[11px] text-slate-500">
            Demo progress resets when the page is refreshed.
          </p>
        </section>
      )}

      {/* Trending topics */}
      <section className="rounded-2xl border border-white/[0.08] bg-[#15111f] p-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-extrabold">Trending topics</h2>
            <p className="mt-1 text-xs text-slate-500">
              Find your next conversation.
            </p>
          </div>
          <TrendingUp size={20} className="text-violet-400" />
        </div>

        <div className="mt-4 space-y-2">
          {trends.map((trend, index) => (
            <button
              key={trend.tag}
              onClick={() => {
                setTab("For You");
              }}
              className="flex w-full items-center gap-3 rounded-xl p-3 text-left transition hover:bg-white/[0.04]"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-xs font-bold text-violet-300">
                {index + 1}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-bold">{trend.tag}</span>
                <span className="mt-1 block text-xs text-slate-500">
                  {trend.count}
                </span>
              </span>
              <ChevronRight size={17} className="text-slate-500" />
            </button>
          ))}
        </div>
      </section>

      <footer className="flex items-center justify-center gap-2 py-3 text-xs text-slate-600">
        <Sparkles size={13} />
        Make every connection count.
      </footer>
    </main>
  );
}
