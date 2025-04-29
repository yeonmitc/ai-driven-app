'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PostCard from './components/PostCard';
import { mockPosts } from './mock/data';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) {
      setError('프롬프트를 입력해 주세요');
      return;
    }
    router.push(`/generate?prompt=${encodeURIComponent(prompt)}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        {/* 프롬프트 입력 섹션 */}
        <section className="max-w-2xl mx-auto mb-16">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                value={prompt}
                onChange={(e) => {
                  setPrompt(e.target.value);
                  setError('');
                }}
                placeholder="이미지를 생성할 프롬프트를 입력하세요..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
            <button
              type="submit"
              disabled={!prompt.trim()}
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              이미지 생성하기
            </button>
          </form>
        </section>

        {/* 커뮤니티 피드 섹션 */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-center">커뮤니티 갤러리</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full md:max-w-none">
            {mockPosts.map((post) => (
              <PostCard key={post.postId} post={post} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
