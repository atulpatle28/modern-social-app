'use client';
import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

interface Post {
  id: string;
  content: string;
  author_name: string;
  created_at: string;
}

export default function LiveFeed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newContent, setNewContent] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch posts from Supabase database
  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (data) setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Publish new post to database
  const handlePublish = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newContent.trim() || !authorName.trim()) return;

    setLoading(true);
    const { error } = await supabase.from('posts').insert([
      { content: newContent, author_name: authorName }
    ]);

    if (!error) {
      setNewContent('');
      fetchPosts(); // Refresh feed
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      {/* Post Composer */}
      <form onSubmit={handlePublish} className="bg-[#151221] border border-white/[0.08] rounded-2xl p-5 shadow-xl space-y-4">
        <input 
          type="text"
          placeholder="Your Name / Handle..."
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          className="w-full bg-[#0B0914] border border-white/[0.06] rounded-xl px-4 py-2.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-violet-500/50"
          required
        />
        <textarea 
          rows={3}
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          placeholder="What's cooking in your mind? Share live with everyone..."
          className="w-full bg-[#0B0914] border border-white/[0.06] rounded-xl p-4 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-violet-500/50 resize-none transition-all"
          required
        ></textarea>
        <div className="flex items-center justify-between pt-1">
          <span className="text-[11px] text-slate-500">⚡ Live Database Connected</span>
          <button 
            type="submit" 
            disabled={loading}
            className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold text-xs px-5 py-2.5 rounded-xl shadow-lg shadow-violet-900/30 transition-all disabled:opacity-50"
          >
            {loading ? 'Publishing...' : 'Publish Live Post'}
          </button>
        </div>
      </form>

      {/* Live Posts Stream */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-[#151221] border border-white/[0.08] rounded-2xl p-5 shadow-xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-xl bg-violet-600/20 border border-violet-500/30 text-violet-400 font-bold flex items-center justify-center text-xs">
                  {post.author_name.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">{post.author_name}</h4>
                  <span className="text-[10px] text-slate-500">{new Date(post.created_at).toLocaleTimeString()}</span>
                </div>
              </div>
              <span className="text-[10px] font-medium bg-violet-500/10 text-violet-400 border border-violet-500/20 px-2.5 py-0.5 rounded-full">Live Post</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed pl-11">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}