import { useContext } from 'react';
import * as I from 'assets';
import * as S from './style';
import Comment from './Comment';
import { CommentContext } from 'context/CommentProvider';
import Input from 'components/Input';

const CommentList = () => {
  const { comments } = useContext(CommentContext);

  return (
    <S.CommentListLayout>
      <I.ProfileIcon width={32} height={32} />
      <S.CommentForm>
        <Input mode='comment' />

        {comments.map(comment => (
          <Comment key={comment.commentId} {...comment} />
        ))}
      </S.CommentForm>
    </S.CommentListLayout>
  );
};

export default CommentList;
