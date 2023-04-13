interface DetailCommentType {
  comment: string;
}

export interface CommentType {
  comment: string;
  commentId: number;
  detail?: DetailCommentType[];
}
