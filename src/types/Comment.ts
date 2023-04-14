export interface ReplyCommentType {
  replyId: number;
  comment: string;
}

export interface CommentType {
  comment: string;
  commentId: number;
  replies?: ReplyCommentType[];
}
