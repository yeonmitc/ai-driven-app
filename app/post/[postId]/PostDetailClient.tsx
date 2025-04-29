'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { mockComments } from '../../mock/data';
import { IPost, IComment, IPostDetailClientProps } from '@/types';

export default function PostDetailClient({ post }: IPostDetailClientProps) {
  const router = useRouter();
  const [comments, setComments] = useState<IComment[]>(
    mockComments.filter(c => c.postId === post.postId)
  );
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [newComment, setNewComment] = useState('');

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: post.prompt,
          text: `${post.userName}님의 AI 생성 이미지`,
          url: window.location.href
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('링크가 클립보드에 복사되었습니다!');
      }
    } catch (error) {
      console.error('공유하기 실패:', error);
    }
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: IComment = {
      id: String(Date.now()),
      postId: post.postId,
      userName: "현재 사용자",
      content: newComment,
      createdAt: new Date().toISOString(),
      userProfile: "https://i.pravatar.cc/150?img=10"
    };

    setComments([...comments, comment]);
    setNewComment('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>돌아가기</span>
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              {/* 이미지 섹션 */}
              <div className="md:w-2/3 relative">
                <div className="relative aspect-square">
                  <Image
                    src={post.imageURL}
                    alt={post.prompt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* 상세 정보 섹션 */}
              <div className="md:w-1/3 border-l">
                {/* 작성자 정보 */}
                <div className="p-4 border-b">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 overflow-hidden rounded-full">
                      <Image
                        src={post.userProfile}
                        alt={post.userName}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{post.userName}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 프롬프트 */}
                <div className="p-4 border-b">
                  <h2 className="text-sm font-medium text-gray-500 mb-2">프롬프트</h2>
                  <p className="text-gray-900">{post.prompt}</p>
                </div>

                {/* 좋아요 & 댓글 & 공유하기 */}
                <div className="p-4 border-b">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handleLikeClick}
                      className="flex items-center gap-1 text-gray-600 hover:text-red-500 transition-colors"
                    >
                      <svg
                        className={`w-6 h-6 ${isLiked ? 'text-red-500 fill-current' : 'fill-none stroke-current'}`}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      <span>{likesCount}</span>
                    </button>
                    <div className="flex items-center gap-1 text-gray-600">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                      <span>{comments.length}</span>
                    </div>
                    <button
                      onClick={handleShare}
                      className="flex items-center gap-1 text-gray-600 hover:text-blue-500 transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                        />
                      </svg>
                      <span>공유</span>
                    </button>
                  </div>
                </div>

                {/* 댓글 섹션 */}
                <div className="flex flex-col h-[calc(100%-13rem)]">
                  <div className="flex-1 overflow-y-auto">
                    <div className="p-4 space-y-4">
                      {comments.map((comment) => (
                        <div key={comment.id} className="flex gap-3">
                          <div className="relative w-8 h-8 overflow-hidden rounded-full shrink-0">
                            <Image
                              src={comment.userProfile}
                              alt={comment.userName}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-sm">
                                {comment.userName}
                              </span>
                              <span className="text-xs text-gray-500">
                                {new Date(comment.createdAt).toLocaleDateString()}
                              </span>
                            </div>
                            <p className="text-gray-700 text-sm mt-1">
                              {comment.content}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 댓글 입력 */}
                  <form onSubmit={handleSubmitComment} className="p-4 border-t mt-auto">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="댓글을 입력하세요..."
                        className="flex-1 px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        type="submit"
                        disabled={!newComment.trim()}
                        className="px-4 py-2 text-sm bg-blue-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
                      >
                        작성
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 