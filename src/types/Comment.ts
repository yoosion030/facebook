interface DetailCommentType {
  comment: string;
}

export interface CommentType {
  comment: string;
  detail?: DetailCommentType[];
}
