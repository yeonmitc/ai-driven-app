import { mockPosts } from '../../mock/data';
import PostDetailClient from './PostDetailClient';
import { IPageProps } from '@/types';

async function getPost(postId: string) {
  // 실제 API 호출로 대체될 수 있는 부분
  return mockPosts.find(p => p.postId === postId);
}

export default async function PostDetail({ params }: IPageProps) {
  const post = await getPost(params.postId);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">게시물을 찾을 수 없습니다.</p>
      </div>
    );
  }

  return <PostDetailClient post={post} />;
} 