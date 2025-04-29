// Post 관련 인터페이스
export interface IPost {
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

// Comment 관련 인터페이스
export interface IComment {
  id: string;
  postId: string;
  userName: string;
  content: string;
  createdAt: string;
  userProfile: string;
}

// 컴포넌트 Props 인터페이스
export interface IPostCardProps {
  post: IPost;
}

export interface IPostDetailClientProps {
  post: IPost;
}

export interface IPageProps {
  params: {
    postId: string;
  };
}

// API 요청/응답 인터페이스
export interface IGenerateRequest {
  prompt: string;
  styleOptions: {
    artStyle: string;  // 디지털아트, 수채화, 유화, 펜화, 연필화, 로고_미니멀, 로고_3D, 로고_그라디언트, 로고_빈티지, 로고_모던
    colorTone: string; // 밝은, 어두운, 파스텔, 흑백, 컬러풀, 모노톤, 메탈릭
  };
}

export interface IGenerateResponse {
  success: true;
  imageUrl: string;
}

export interface IErrorResponse {
  success: false;
  error: {
    code: string;    // UNAUTHORIZED | INVALID_PROMPT | GENERATION_FAILED
    message: string;
  };
}

// 커뮤니티 피드 API 응답 인터페이스
export interface ICommunityFeedResponse {
  posts: IPost[];
  totalCount: number;
  hasMore: boolean;
}

// 좋아요 API 응답 인터페이스
export interface ILikeResponse {
  success: boolean;
  likes: number;
  isLiked: boolean;
  error?: {
    code: string;
    message: string;
  };
}

// 댓글 API 응답 인터페이스
export interface ICommentsResponse {
  comments: IComment[];
}

export interface ICommentResponse {
  success: boolean;
  comment?: IComment;
  error?: {
    code: string;
    message: string;
  };
}
