
"use client";

import { useMemo, useState } from "react";
import {
  Search,
  Compass,
  Flame,
  TrendingUp,
  Users,
  MessageCircle,
  ChevronRight,
  Plus,
  Check,
  Zap,
  Code2,
  Palette,
  Gamepad2,
  BookOpen,
  Briefcase,
  Sparkles,
  Hash,
  ArrowUpRight,
  Vote,
  Bookmark,
  X,
} from "lucide-react";

const categories = [
  { name: "For You", icon: Sparkles },
  { name: "Technology", icon: Code2 },
  { name: "Gaming", icon: Gamepad2 },
  { name: "Education", icon: BookOpen },
  { name: "Entertainment", icon: Flame },
  { name: "Business", icon: Briefcase },
];

const initialDebates = [
  {
    id: 1,
    category: "Technology",
    title: "Will AI replace developers in the next 5 years?",
    description:
      "The future of coding is changing fast. What do you think happens next?",
    left: "Yes",
    right: "No",
    votes: 2400,
    comments: 184,
    color: "from-violet-500 to-indigo-500",
    tag: "HOT TOPIC",
  },
  {
    id: 2,
    category: "Education",
    title: "Skills matter more than college degrees.",
    description:
      "In today's world, what actually helps people build successful careers?",
    left: "Skills",
    right: "Degrees",
    votes: 1800,
    comments: 126,
    color: "from-emerald-500 to-teal-500",
    tag: "COMMUNITY PICK",
  },
  {
    id: 3,
    category: "Gaming",
    title: "Mobile gaming or PC gaming?",
    description:
      "Better convenience or better performance? Choose your side.",
    left: "Mobile",
    right: "PC",
    votes: 1250,
    comments: 97,
    color: "from-orange-500 to-rose-500",
    tag: "TRENDING",
  },
  {
    id: 4,
    category: "Business",
    title: "Is building an online business worth it?",
    description:
      "Would you choose entrepreneurship or a traditional career?",
    left: "Business",
    right: "Job",
    votes: 980,
    comments: 73,
    color: "from-sky-500 to-blue-500",
    tag: "OPEN DEBATE",
  },
  {
    id: 5,
    category: "Entertainment",
    title: "Movies at home or the cinema?",
    description:
      "Big-screen magic or the comfort of your own sofa?",
    left: "Cinema",
    right: "Home",
    votes: 760,
    comments: 45,
    color: "from-pink-500 to-fuchsia-500",
    tag: "FUN POLL",
  },
];

const rooms = [
  {
    id: "tech",
    name: "Tech Explorers",
    description: "AI, coding, gadgets and the future of technology.",
    members: "12.8k",
    category: "Technology",
    icon: Code2,
    color: "bg-violet-500/15 text-violet-300",
    tag: "TECH",
  },
  {
    id: "creative",
    name: "Creative Minds",
    description: "Design, art, ideas and creative experiments.",
    members: "8.2k",
    category: "Entertainment",
    icon: Palette,
    color: "bg-pink-500/15 text-pink-300",
    tag: "CREATE",
  },
  {
    id: "gaming",
    name: "Gaming Arena",
    description: "Games, strategies, esports and gaming culture.",
    members: "6.4k",
    category: "Gaming",
    icon: Gamepad2,
    color: "bg-emerald-500/15 text-emerald-300",
    tag: "PLAY",
  },
  {
    id: "learning",
    name: "Growth Club",
    description: "Learning, useful habits and personal development.",
    members: "5.7k",
    category: "Education",
    icon: BookOpen,
    color: "bg-amber-500/15 text-amber-300",
    tag: "GROW",
  },
];

const creators = [
  {
    id: "aarav",
    name: "Aarav Sharma",
    handle: "@aaravcreates",
    initials: "AS",
    bio: "Design & technology",
    color: "bg-violet-500/20 text-violet-300",
  },
  {
    id: "priya",
    name: "Priya Verma",
    handle: "@priyalearns",
    initials: "PV",
    bio: "Learning & creativity",
    color: "bg-pink-500/20 text-pink-300",
  },
  {
    id: "rahul",
    name: "Rahul Developer",
    handle: "@rahuldev",
    initials: "RD",
    bio: "Building cool things",
    color: "bg-sky-500/20 text-sky-300",
  },
];

function formatVotes(votes: number) {
  if (votes >= 1000) {
    return `${(votes / 1000).toFixed(1).replace(".0", "")}k`;
  }

  return String(votes);
}

export default function ExplorePage() {
  const [category, setCategory] = useState("For You");
  const [search, setSearch] = useState("");
  const [votes, setVotes] = useState<Record<number, string>>({});
  const [followed, setFollowed] = useState<string[]>([]);
  const [joined, setJoined] = useState<string[]>([]);
  const [bookmarks, setBookmarks] = useState<number[]>([]);
  const [showAllDebates, setShowAllDebates] = useState(false);
  const [showAllRooms, setShowAllRooms] = useState(false);

  const filteredDebates = useMemo(() => {
    const query = search.trim().toLowerCase();

    return initialDebates.filter((debate) => {
      const categoryMatch =
        category === "For You" || debate.category === category;

      const searchMatch =
        !query ||
        `${debate.title} ${debate.description} ${debate.category}`
          .toLowerCase()
          .includes(query);

      return categoryMatch && searchMatch;
    });
  }, [category, search]);

  const filteredRooms = useMemo(() => {
    const query = search.trim().toLowerCase();

    return rooms.filter((room) => {
      const categoryMatch =
        category === "For You" ||
        room.category === category ||
        category === "Business" && room.category === "Technology";

      const searchMatch =
        !query ||
        `${room.name} ${room.description} ${room.category}`
          .toLowerCase()
          .includes(query);

      return categoryMatch && searchMatch;
    });
  }, [category, search]);

  const filteredCreators = creators.filter((creator) => {
    const query = search.trim().toLowerCase();

    return (
      !query ||
      `${creator.name} ${creator.handle} ${creator.bio}`
        .toLowerCase()
        .includes(query)
    );
  });

  const visibleDebates = showAllDebates
    ? filteredDebates
    : filteredDebates.slice(0, 3);

  const visibleRooms = showAllRooms
    ? filteredRooms
    : filteredRooms.slice(0, 3);

  return (
    <main className="min-h-screen bg-[#0b0912] px-4 py-6 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-7">

        {/* PAGE HEADER */}
        <header className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-violet-400">
              <Compass size={16} />
              THE DISCOVERY SPACE
            </div>

            <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
              Discover your{" "}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                next obsession.
              </span>
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
              Find interesting people, join communities and jump into
              conversations that matter to you.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3 self-start rounded-2xl border border-violet-500/20 bg-[#171223] px-4 py-3 sm:self-center">
            <div className="flex size-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
              <Zap size={20} />
            </div>
            <div>
              <p className="text-xs text-slate-400">Your discovery</p>
              <p className="text-sm font-bold">Starts here</p>
            </div>
          </div>
        </header>

        {/* SEARCH */}
        <div className="flex items-center gap-3 rounded-2xl border border-white/[0.09] bg-[#15111f] px-4 transition focus-within:border-violet-500/60 focus-within:ring-4 focus-within:ring-violet-500/10">
          <Search size={20} className="shrink-0 text-slate-500" />

          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search debates, creators, communities..."
            aria-label="Search Explore"
            className="h-13 min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
          />

          {search && (
            <button
              onClick={() => setSearch("")}
              aria-label="Clear search"
              className="rounded-lg p-1.5 text-slate-400 hover:bg-white/10 hover:text-white"
            >
              <X size={17} />
            </button>
          )}

          <span className="hidden rounded-lg border border-white/[0.08] px-2 py-1 text-[10px] text-slate-500 sm:block">
            EXPLORE
          </span>
        </div>

        {/* FEATURE BANNER */}
        <section className="relative isolate overflow-hidden rounded-3xl border border-violet-400/20 bg-gradient-to-br from-[#281545] via-[#211137] to-[#11101c] p-6 sm:p-8">
          <div className="pointer-events-none absolute -right-12 -top-20 -z-10 size-64 rounded-full bg-violet-600/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 right-1/3 -z-10 size-64 rounded-full bg-fuchsia-600/10 blur-3xl" />

          <div className="relative max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-400/10 px-3 py-1.5 text-[11px] font-bold text-violet-200">
              <Flame size={14} />
              THE COMMUNITY PLAYGROUND
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
              One question can
              <br className="hidden sm:block" />{" "}
              start a thousand conversations.
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-6 text-slate-400">
              Share your opinion, challenge an idea and discover perspectives
              you never thought about.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#debates"
                className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-950/40 transition hover:-translate-y-0.5 hover:bg-violet-500"
              >
                Explore debates
                <ArrowUpRight size={17} />
              </a>

              <a
                href="#communities"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.08]"
              >
                Find your people
                <Users size={17} />
              </a>
            </div>
          </div>

          <div className="relative mt-7 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/[0.09] pt-5 text-xs text-slate-400">
            <span className="flex items-center gap-2">
              <Vote size={15} className="text-violet-300" />
              Make your voice count
            </span>
            <span className="flex items-center gap-2">
              <Users size={15} className="text-violet-300" />
              Meet like-minded people
            </span>
            <span className="flex items-center gap-2">
              <Sparkles size={15} className="text-violet-300" />
              Discover something new
            </span>
          </div>
        </section>

        {/* CATEGORY FILTERS */}
        <section>
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-extrabold">Explore your interests</h2>
              <p className="mt-1 text-xs text-slate-500">
                Pick a category and see what's happening.
              </p>
            </div>
            <Hash size={20} className="text-violet-400" />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((item) => {
              const Icon = item.icon;
              const active = category === item.name;

              return (
                <button
                  key={item.name}
                  onClick={() => setCategory(item.name)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-xl border px-3.5 py-2.5 text-xs font-semibold transition ${
                    active
                      ? "border-violet-500/50 bg-violet-600 text-white shadow-lg shadow-violet-950/40"
                      : "border-white/[0.08] bg-[#15111f] text-slate-400 hover:border-violet-400/40 hover:text-white"
                  }`}
                >
                  <Icon size={15} />
                  {item.name}
                </button>
              );
            })}
          </div>
        </section>

        {/* DEBATES + SIDEBAR */}
        <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_270px]">

          {/* DEBATES */}
          <section id="debates" className="min-w-0 space-y-4">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-orange-400/10 text-orange-300">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <h2 className="text-lg font-extrabold">Trending debates</h2>
                  <p className="mt-1 text-xs text-slate-500">
                    The conversations everyone's having.
                  </p>
                </div>
              </div>

              <span className="rounded-lg border border-orange-400/20 bg-orange-400/10 px-2.5 py-1.5 text-[10px] font-bold text-orange-300">
                <Flame size={12} className="mr-1 inline" />
                HOT
              </span>
            </div>

            {visibleDebates.length === 0 && (
              <div className="rounded-2xl border border-dashed border-white/10 bg-[#15111f] p-8 text-center">
                <Search className="mx-auto mb-3 text-slate-500" size={26} />
                <p className="font-bold">Nothing found</p>
                <p className="mt-2 text-sm text-slate-500">
                  Try a different search or category.
                </p>
                <button
                  onClick={() => {
                    setSearch("");
                    setCategory("For You");
                  }}
                  className="mt-4 text-sm font-semibold text-violet-400 hover:text-violet-300"
                >
                  Clear filters
                </button>
              </div>
            )}

            {visibleDebates.map((debate) => {
              const selectedVote = votes[debate.id];

              return (
                <article
                  key={debate.id}
                  className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#15111f] transition hover:border-violet-400/25 hover:shadow-xl hover:shadow-black/20"
                >
                  <div className={`h-1 bg-gradient-to-r ${debate.color}`} />

                  <div className="p-5 sm:p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-lg border border-violet-400/15 bg-violet-400/[0.08] px-2.5 py-1.5 text-[10px] font-bold tracking-wide text-violet-300">
                        {debate.category.toUpperCase()}
                      </span>

                      <button
                        aria-label="Bookmark debate"
                        aria-pressed={bookmarks.includes(debate.id)}
                        onClick={() =>
                          setBookmarks((previous) =>
                            previous.includes(debate.id)
                              ? previous.filter((id) => id !== debate.id)
                              : [...previous, debate.id]
                          )
                        }
                        className={`rounded-lg p-2 transition hover:bg-white/[0.06] ${
                          bookmarks.includes(debate.id)
                            ? "text-violet-300"
                            : "text-slate-500"
                        }`}
                      >
                        <Bookmark
                          size={17}
                          fill={
                            bookmarks.includes(debate.id)
                              ? "currentColor"
                              : "none"
                          }
                        />
                      </button>
                    </div>

                    <h3 className="mt-4 text-lg font-extrabold leading-snug text-slate-100">
                      {debate.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {debate.description}
                    </p>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      {[debate.left, debate.right].map((option) => {
                        const active = selectedVote === option;

                        return (
                          <button
                            key={option}
                            aria-pressed={active}
                            onClick={() =>
                              setVotes((previous) => ({
                                ...previous,
                                [debate.id]: option,
                              }))
                            }
                            className={`min-h-12 rounded-xl border px-3 py-3 text-sm font-bold transition ${
                              active
                                ? "border-violet-500 bg-violet-600 text-white shadow-md shadow-violet-950/40"
                                : "border-white/[0.08] bg-[#0e0b16] text-slate-300 hover:border-violet-400/40 hover:bg-violet-500/10"
                            }`}
                          >
                            {active && (
                              <Check size={15} className="mr-1 inline" />
                            )}
                            {option}
                          </button>
                        );
                      })}
                    </div>

                    {selectedVote && (
                      <p className="mt-3 rounded-lg bg-violet-500/10 px-3 py-2 text-xs text-violet-200">
                        Your selection: {selectedVote}. This demo vote is not
                        saved to a server.
                      </p>
                    )}

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.07] pt-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Users size={14} />
                        {formatVotes(debate.votes)} votes
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MessageCircle size={14} />
                        {debate.comments} comments
                      </span>
                      <span className="font-semibold text-violet-400">
                        {debate.tag}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}

            {filteredDebates.length > 3 && (
              <button
                onClick={() => setShowAllDebates((previous) => !previous)}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-[#15111f] py-3.5 text-sm font-bold text-slate-300 transition hover:border-violet-400/30 hover:text-violet-300"
              >
                {showAllDebates ? "Show less" : "Explore all debates"}
                <ChevronRight
                  size={17}
                  className={showAllDebates ? "rotate-[-90deg]" : ""}
                />
              </button>
            )}
          </section>

          {/* RIGHT COLUMN */}
          <aside className="space-y-6">

            {/* COMMUNITY ROOMS */}
            <section id="communities" className="rounded-2xl border border-white/[0.08] bg-[#15111f] p-4">
              <div className="mb-5 flex items-center justify-between gap-2">
                <div>
                  <h2 className="font-extrabold">Interest rooms</h2>
                  <p className="mt-1 text-xs text-slate-500">
                    Find your people.
                  </p>
                </div>
                <Users size={19} className="text-violet-400" />
              </div>

              <div className="space-y-4">
                {visibleRooms.map((room) => {
                  const Icon = room.icon;
                  const isJoined = joined.includes(room.id);

                  return (
                    <div key={room.id} className="border-b border-white/[0.06] pb-4 last:border-0 last:pb-0">
                      <div className="flex items-start gap-3">
                        <div className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${room.color}`}>
                          <Icon size={19} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-bold text-slate-100">
                            {room.name}
                          </p>
                          <p className="mt-1 text-[11px] leading-5 text-slate-500">
                            {room.description}
                          </p>
                          <p className="mt-2 flex items-center gap-1 text-[10px] text-slate-500">
                            <Users size={12} />
                            {room.members} members
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() =>
                          setJoined((previous) =>
                            isJoined
                              ? previous.filter((id) => id !== room.id)
                              : [...previous, room.id]
                          )
                        }
                        className={`mt-3 flex w-full items-center justify-center gap-2 rounded-lg border py-2 text-xs font-bold transition ${
                          isJoined
                            ? "border-violet-500/30 bg-violet-500/10 text-violet-300"
                            : "border-white/[0.08] bg-white/[0.03] text-slate-300 hover:border-violet-500/40 hover:text-white"
                        }`}
                      >
                        {isJoined ? (
                          <>
                            <Check size={14} /> Joined (demo)
                          </>
                        ) : (
                          <>
                            <Plus size={14} /> Join community
                          </>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>

              {filteredRooms.length > 3 && (
                <button
                  onClick={() => setShowAllRooms((previous) => !previous)}
                  className="mt-4 flex w-full items-center justify-center gap-1 text-xs font-bold text-violet-400 hover:text-violet-300"
                >
                  {showAllRooms ? "Show less" : "View all rooms"}
                  <ChevronRight size={14} />
                </button>
              )}

              {filteredRooms.length === 0 && (
                <p className="text-sm text-slate-500">
                  No matching communities.
                </p>
              )}
            </section>

            {/* CREATORS */}
            <section className="rounded-2xl border border-white/[0.08] bg-[#15111f] p-4">
              <div className="mb-5 flex items-center justify-between gap-2">
                <div>
                  <h2 className="font-extrabold">Creators to discover</h2>
                  <p className="mt-1 text-xs text-slate-500">
                    People worth knowing.
                  </p>
                </div>
                <Sparkles size={19} className="text-violet-400" />
              </div>

              <div className="space-y-4">
                {filteredCreators.map((creator) => {
                  const isFollowing = followed.includes(creator.id);

                  return (
                    <div key={creator.id} className="flex items-center gap-3">
                      <div className={`flex size-10 shrink-0 items-center justify-center rounded-full text-xs font-black ${creator.color}`}>
                        {creator.initials}
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-bold text-slate-100">
                          {creator.name}
                        </p>
                        <p className="truncate text-[10px] text-slate-500">
                          {creator.bio}
                        </p>
                      </div>

                      <button
                        aria-label={isFollowing ? `Unfollow ${creator.name}` : `Follow ${creator.name}`}
                        aria-pressed={isFollowing}
                        onClick={() =>
                          setFollowed((previous) =>
                            isFollowing
                              ? previous.filter((id) => id !== creator.id)
                              : [...previous, creator.id]
                          )
                        }
                        className={`flex size-8 shrink-0 items-center justify-center rounded-lg transition ${
                          isFollowing
                            ? "bg-violet-500/15 text-violet-300"
                            : "border border-white/[0.08] bg-white/[0.03] text-slate-400 hover:border-violet-400/40 hover:text-white"
                        }`}
                      >
                        {isFollowing ? <Check size={15} /> : <Plus size={15} />}
                      </button>
                    </div>
                  );
                })}

                {filteredCreators.length === 0 && (
                  <p className="text-sm text-slate-500">
                    No matching creators.
                  </p>
                )}
              </div>
            </section>

            {/* BOTTOM CARD */}
            <section className="relative overflow-hidden rounded-2xl border border-violet-400/20 bg-gradient-to-br from-[#291847] to-[#171123] p-5">
              <div className="absolute -right-8 -top-8 size-28 rounded-full bg-violet-500/10 blur-2xl" />
              <div className="relative">
                <div className="flex size-10 items-center justify-center rounded-xl bg-violet-400/15 text-violet-300">
                  <Sparkles size={20} />
                </div>
                <h3 className="mt-4 font-extrabold">
                  Have something to say?
                </h3>
                <p className="mt-2 text-xs leading-5 text-slate-400">
                  Start a debate or share your next big idea with the community.
                </p>
                <a
                  href="/"
                  className="mt-4 flex items-center justify-between rounded-xl bg-violet-600 px-4 py-3 text-xs font-bold text-white transition hover:bg-violet-500"
                >
                  Create a post <ArrowUpRight size={16} />
                </a>
              </div>
            </section>

            <div className="flex flex-wrap gap-x-4 gap-y-2 px-1 text-[10px] text-slate-600">
              <a href="/" className="hover:text-violet-300">Home</a>
              <span>Community guidelines</span>
              <span>© ModernConnect</span>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
