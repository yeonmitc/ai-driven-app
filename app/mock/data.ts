import { IPost, IComment } from '@/types';

export interface Post {
  postId: string;
  imageURL: string;
  userName: string;
  likes: number;
  comments: number;
  isLiked: boolean;
  prompt: string;
  createdAt: string;
  userProfile: string;
}

export interface Comment {
  id: string;
  postId: string;
  userName: string;
  content: string;
  createdAt: string;
  userProfile: string;
}

export const mockPosts: IPost[] = [
  {
    postId: "1",
    imageURL: "https://picsum.photos/400/400",
    userName: "김철수",
    likes: 150,
    comments: 23,
    isLiked: false,
    prompt: "우주를 탐험하는 귀여운 고양이",
    createdAt: "2024-03-15T10:30:00Z",
    userProfile: "https://i.pravatar.cc/150?img=1"
  },
  {
    postId: "2",
    imageURL: "https://picsum.photos/400/401",
    userName: "이영희",
    likes: 89,
    comments: 12,
    isLiked: true,
    prompt: "미래도시의 풍경",
    createdAt: "2024-03-15T09:15:00Z",
    userProfile: "https://i.pravatar.cc/150?img=2"
  },
  {
    postId: "3",
    imageURL: "https://picsum.photos/400/402",
    userName: "박지민",
    likes: 234,
    comments: 45,
    isLiked: false,
    prompt: "환상적인 판타지 세계",
    createdAt: "2024-03-15T08:45:00Z",
    userProfile: "https://i.pravatar.cc/150?img=3"
  },
  {
    postId: "4",
    imageURL: "https://picsum.photos/400/403",
    userName: "정다운",
    likes: 167,
    comments: 28,
    isLiked: true,
    prompt: "비오는 날의 도시 풍경",
    createdAt: "2024-03-15T08:00:00Z",
    userProfile: "https://i.pravatar.cc/150?img=4"
  },
  {
    postId: "5",
    imageURL: "https://picsum.photos/400/404",
    userName: "한소희",
    likes: 312,
    comments: 56,
    isLiked: false,
    prompt: "봄날의 벚꽃 정원",
    createdAt: "2024-03-15T07:30:00Z",
    userProfile: "https://i.pravatar.cc/150?img=5"
  },
  {
    postId: "6",
    imageURL: "https://picsum.photos/400/405",
    userName: "최준호",
    likes: 98,
    comments: 15,
    isLiked: false,
    prompt: "신비로운 해저 도시",
    createdAt: "2024-03-15T07:00:00Z",
    userProfile: "https://i.pravatar.cc/150?img=6"
  },
  {
    postId: "7",
    imageURL: "https://picsum.photos/400/406",
    userName: "강민서",
    likes: 245,
    comments: 34,
    isLiked: true,
    prompt: "사이버펑크 스타일의 로봇",
    createdAt: "2024-03-15T06:30:00Z",
    userProfile: "https://i.pravatar.cc/150?img=7"
  },
  {
    postId: "8",
    imageURL: "https://picsum.photos/400/407",
    userName: "임수진",
    likes: 178,
    comments: 29,
    isLiked: false,
    prompt: "마법사의 연구실",
    createdAt: "2024-03-15T06:00:00Z",
    userProfile: "https://i.pravatar.cc/150?img=8"
  },
  {
    postId: "9",
    imageURL: "https://picsum.photos/400/408",
    userName: "송태양",
    likes: 423,
    comments: 67,
    isLiked: true,
    prompt: "은하수가 흐르는 밤하늘",
    createdAt: "2024-03-15T05:30:00Z",
    userProfile: "https://i.pravatar.cc/150?img=9"
  },
  {
    postId: "10",
    imageURL: "https://picsum.photos/400/409",
    userName: "오하늘",
    likes: 156,
    comments: 22,
    isLiked: false,
    prompt: "동화 속 요정의 정원",
    createdAt: "2024-03-15T05:00:00Z",
    userProfile: "https://i.pravatar.cc/150?img=10"
  }
];

export const mockComments: IComment[] = [
  {
    id: "1",
    postId: "1",
    userName: "홍길동",
    content: "정말 멋진 작품이네요!",
    createdAt: "2024-03-15T11:00:00Z",
    userProfile: "https://i.pravatar.cc/150?img=11"
  },
  {
    id: "2",
    postId: "1",
    userName: "김민수",
    content: "어떤 프롬프트를 사용하셨나요?",
    createdAt: "2024-03-15T11:05:00Z",
    userProfile: "https://i.pravatar.cc/150?img=12"
  },
  {
    id: "3",
    postId: "2",
    userName: "이지은",
    content: "미래도시의 분위기가 너무 좋아요!",
    createdAt: "2024-03-15T10:30:00Z",
    userProfile: "https://i.pravatar.cc/150?img=13"
  },
  {
    id: "4",
    postId: "3",
    userName: "박현우",
    content: "색감이 너무 아름답네요",
    createdAt: "2024-03-15T10:15:00Z",
    userProfile: "https://i.pravatar.cc/150?img=14"
  },
  {
    id: "5",
    postId: "4",
    userName: "최유진",
    content: "비오는 날의 감성이 잘 표현되었어요",
    createdAt: "2024-03-15T10:00:00Z",
    userProfile: "https://i.pravatar.cc/150?img=15"
  },
  {
    id: "6",
    postId: "5",
    userName: "정승환",
    content: "벚꽃이 정말 아름답게 표현되었네요",
    createdAt: "2024-03-15T09:45:00Z",
    userProfile: "https://i.pravatar.cc/150?img=16"
  },
  {
    id: "7",
    postId: "6",
    userName: "김태리",
    content: "해저 도시의 신비로움이 잘 느껴져요",
    createdAt: "2024-03-15T09:30:00Z",
    userProfile: "https://i.pravatar.cc/150?img=17"
  },
  {
    id: "8",
    postId: "7",
    userName: "이동욱",
    content: "사이버펑크 감성이 물씬 나네요!",
    createdAt: "2024-03-15T09:15:00Z",
    userProfile: "https://i.pravatar.cc/150?img=18"
  },
  {
    id: "9",
    postId: "8",
    userName: "한지민",
    content: "마법사의 연구실 분위기가 완벽해요",
    createdAt: "2024-03-15T09:00:00Z",
    userProfile: "https://i.pravatar.cc/150?img=19"
  },
  {
    id: "10",
    postId: "9",
    userName: "송중기",
    content: "은하수의 표현이 환상적이에요",
    createdAt: "2024-03-15T08:45:00Z",
    userProfile: "https://i.pravatar.cc/150?img=20"
  }
]; 