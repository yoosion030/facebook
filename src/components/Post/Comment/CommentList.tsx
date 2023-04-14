import { useRef, useContext } from 'react';
import styled from '@emotion/styled';
import * as I from 'assets';
import Comment from './Comment';
import { CommentContext } from 'context/CommentProvider';

interface CommentProps {
  id: string;
}

const CommentList = ({ id }: CommentProps) => {
  const { comments, addComment } = useContext(CommentContext);
  const textarea = useRef<HTMLTextAreaElement>(null);

  const handleResizeHeight = () => {
    if (textarea.current) {
      textarea.current.style.height = textarea.current.scrollHeight + 'px';
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) {
      event.preventDefault();
      handleComment(event);
    }
  };

  const handleComment = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const comment = textarea.current?.value;
    if (!comment) return;
    event.preventDefault();
    textarea.current.value = '';
    textarea.current.style.height = '32px';
    addComment(comment, comments.length);
  };

  return (
    <CommentLayout>
      <I.ProfileIcon width={32} height={32} />
      <CommentForm>
        <CommentInput
          placeholder='댓글을 입력하세요...'
          rows={1}
          onChange={handleResizeHeight}
          onKeyDown={handleKeyDown}
          ref={textarea}
        />

        {comments.map(comment => (
          <Comment key={comment.commentId} {...comment} />
        ))}
      </CommentForm>
    </CommentLayout>
  );
};

export default CommentList;

const CommentLayout = styled.div`
  display: flex;
  gap: 10px;
  padding: 8px 16px;
  border-top: 1px solid #cccccc;
`;

const CommentForm = styled.form`
  width: 100%;
`;

const CommentInput = styled.textarea`
  width: 100%;
  height: 32px;
  padding: 8px 12px;
  margin-bottom: 20px;
  background-color: #f0f2f5;
  border: none;
  border-radius: 12px;
  resize: none;
`;
