'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Post } from '../mock/data';
import { mockComments } from '../mock/data';
import { Comment } from '../mock/data';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState(mockComments.filter(comment => comment.postId === post.postId));
  const [newComment, setNewComment] = useState('');

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
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
    <div className="relative">
      {/* 메인 카드 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-4">
        <div>
          <Link href={`/post/${post.postId}`}>
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={post.imageURL}
                alt={post.prompt}
                fill
                className="object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
          </Link>
          
          <div className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="relative w-8 h-8 overflow-hidden rounded-full">
                <Image
                  src={post.userProfile}
                  alt={post.userName}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-medium">{post.userName}</span>
            </div>
            
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.prompt}</p>
            
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
              
              <button
                onClick={() => setShowComments(!showComments)}
                className="flex items-center gap-1 text-gray-600 hover:text-blue-500 transition-colors"
              >
                <svg
                  className={`w-6 h-6 ${showComments ? 'text-blue-500' : ''}`}
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
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 댓글 오버레이 */}
      {showComments && (
        <div className="absolute inset-0 bg-white rounded-lg shadow-lg z-10">
          <div className="h-full flex flex-col">
            {/* 헤더 */}
            <div className="p-4 border-b flex justify-between items-center bg-white rounded-t-lg">
              <h2 className="text-lg font-semibold">댓글</h2>
              <button 
                onClick={() => setShowComments(false)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600"
              >
                <span className="text-sm">닫기</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* 게시물 미리보기 */}
            <div className="p-4 border-b bg-gray-50">
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
                  <p className="font-medium text-base">{post.userName}</p>
                  <p className="text-sm text-gray-600 line-clamp-1">{post.prompt}</p>
                </div>
              </div>
            </div>
            
            {/* 댓글 목록 */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="flex gap-3">
                  <div className="relative w-10 h-10 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={comment.userProfile}
                      alt={comment.userName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-base">{comment.userName}</span>
                      <span className="text-sm text-gray-500">
                        {new Date(comment.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-base text-gray-700 leading-relaxed">{comment.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 댓글 입력 폼 */}
            <form onSubmit={handleSubmitComment} className="border-t p-4 bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="댓글을 입력하세요..."
                  className="flex-1 px-4 py-2 text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  disabled={!newComment.trim()}
                  className="px-4 py-2 text-base bg-blue-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
                >
                  작성
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 