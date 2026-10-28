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

  // States for Likes, Dislikes and Comments per post
  const [likesMap, setLikesMap] = useState<{ [key: string]: { likes: number; dislikes: number; liked: boolean; disliked: boolean } }>({});
  const [commentsMap, setCommentsMap] = useState<{ [key: string]: string[] }>({});
  const [commentInputMap, setCommentInputMap] = useState<{ [key: string]: string }>({});
  const [activeCommentPostId, setActiveCommentPostId] = useState<string | null>(null);

  // Fetch posts from Supabase database
  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (data) {
      setPosts(data);
      // Initialize likes state for each post
      const initialLikes: any = {};
      data.forEach((p: Post) => {
        initialLikes[p.id] = { likes: 0, dislikes: 0, liked: false, disliked: false };
      });
      setLikesMap(initialLikes);
    }
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

  // Handle Like action
  const handleLike = (postId: string) => {
    setLikesMap(prev => {
      const current = prev[postId] || { likes: 0, dislikes: 0, liked: false, disliked: false };
      if (current.liked) {
        return { ...prev, [postId]: { ...current, likes: current.likes - 1, liked: false } };
      } else {
        return { 
          ...prev, 
          [postId]: { 
            ...current, 
            likes: current.likes + 1, 
            liked: true, 
            dislikes: current.disliked ? current.dislikes - 1 : current.dislikes, 
            disliked: false 
          } 
        };
      }
    });
  };

  // Handle Dislike action
  const handleDislike = (postId: string) => {
    setLikesMap(prev => {
      const current = prev[postId] || { likes: 0, dislikes: 0, liked: false, disliked: false };
      if (current.disliked) {
        return { ...prev, [postId]: { ...current, dislikes: current.dislikes - 1, disliked: false } };
      } else {
        return { 
          ...prev, 
          [postId]: { 
            ...current, 
            dislikes: current.dislikes + 1, 
            disliked: true, 
            likes: current.liked ? current.likes - 1 : current.likes, 
            liked: false 
          } 
        };
      }
    });
  };

  // Handle Adding Comment
  const handleAddComment = (postId: string) => {
    const text = commentInputMap[postId];
    if (!text || !text.trim()) return;
    setCommentsMap(prev => ({
      ...prev,
      [postId]: [...(prev[postId] || []), text.trim()]
    }));
    setCommentInputMap(prev => ({ ...prev, [postId]: '' }));
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
        {posts.map((post) => {
          const postLikes = likesMap[post.id] || { likes: 0, dislikes: 0, liked: false, disliked: false };
          const postComments = commentsMap[post.id] || [];
          const isCommentOpen = activeCommentPostId === post.id;

          return (
            <div key={post.id} className="bg-[#151221] border border-white/[0.08] rounded-2xl p-5 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-violet-600/20 border border-violet-500/30 text-violet-400 font-bold flex items-center justify-center text-xs">
                    {post.author_name ? post.author_name.substring(0, 2).toUpperCase() : 'MC'}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">{post.author_name}</h4>
                    <span className="text-[10px] text-slate-500">{new Date(post.created_at).toLocaleTimeString()}</span>
                  </div>
                </div>
                <span className="text-[10px] font-medium bg-violet-500/10 text-violet-400 border border-violet-500/20 px-2.5 py-0.5 rounded-full">Live Post</span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed pl-12">{post.content}</p>

              {/* Reactions & Comment Action Bar */}
              <div className="flex items-center justify-between pt-2 border-t border-white/[0.05] pl-12">
                <div className="flex items-center space-x-4">
                  {/* Like Button */}
                  <button 
                    onClick={() => handleLike(post.id)}
                    className={`flex items-center space-x-1.5 text-xs px-3 py-1.5 rounded-xl transition-all border ${postLikes.liked ? 'bg-violet-600/20 text-violet-400 border-violet-500/30' : 'bg-[#0B0914] text-slate-400 border-white/[0.06] hover:border-violet-500/30'}`}
                  >
                    <span>👍</span>
                    <span className="font-medium">{postLikes.likes}</span>
                  </button>

                  {/* Dislike Button */}
                  <button 
                    onClick={() => handleDislike(post.id)}
                    className={`flex items-center space-x-1.5 text-xs px-3 py-1.5 rounded-xl transition-all border ${postLikes.disliked ? 'bg-rose-600/20 text-rose-400 border-rose-500/30' : 'bg-[#0B0914] text-slate-400 border-white/[0.06] hover:border-rose-500/30'}`}
                  >
                    <span>👎</span>
                    <span className="font-medium">{postLikes.dislikes}</span>
                  </button>

                  {/* Comment Toggle Button */}
                  <button 
                    onClick={() => setActiveCommentPostId(isCommentOpen ? null : post.id)}
                    className="flex items-center space-x-1.5 text-xs px-3 py-1.5 rounded-xl bg-[#0B0914] text-slate-400 border border-white/[0.06] hover:border-violet-500/30 transition-all"
                  >
                    <span>💬</span>
                    <span className="font-medium">{postComments.length} Comments</span>
                  </button>
                </div>
              </div>

              {/* Comments Dropdown Section */}
              {isCommentOpen && (
                <div className="mt-3 pl-12 space-y-3 pt-3 border-t border-white/[0.04]">
                  <div className="flex space-x-2">
                    <input 
                      type="text"
                      placeholder="Write a comment..."
                      value={commentInputMap[post.id] || ''}
                      onChange={(e) => setCommentInputMap({ ...commentInputMap, [post.id]: e.target.value })}
                      className="flex-1 bg-[#0B0914] border border-white/[0.06] rounded-xl px-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-violet-500/50"
                    />
                    <button 
                      onClick={() => handleAddComment(post.id)}
                      className="bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs px-4 py-2 rounded-xl transition-all"
                    >
                      Reply
                    </button>
                  </div>

                  {/* Comment List */}
                  <div className="space-y-2 pt-1">
                    {postComments.length === 0 ? (
                      <p className="text-[11px] text-slate-500 italic">No comments yet. Be the first to share your thoughts!</p>
                    ) : (
                      postComments.map((comment, index) => (
                        <div key={index} className="bg-[#0B0914] border border-white/[0.05] rounded-xl px-3 py-2 text-xs text-slate-300">
                          {comment}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}