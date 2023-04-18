import { useContext } from 'react';
import * as I from 'assets';
import * as S from './style';
import { CommentContext } from 'context/CommentProvider';
import { Textarea, Comment } from 'components';

const CommentList = () => {
  const { comments } = useContext(CommentContext);

  return (
    <S.CommentListLayout>
      <I.ProfileIcon width={32} height={32} />
      <S.CommentForm>
        <Textarea mode='comment' />

        {comments.map(comment => (
          <Comment key={comment.commentId} {...comment} />
        ))}
      </S.CommentForm>
    </S.CommentListLayout>
  );
};

export default CommentList;
