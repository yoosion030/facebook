import styled from '@emotion/styled';
import * as I from 'assets';
import { useRef } from 'react';

const Comment = () => {
  const textarea = useRef<HTMLTextAreaElement>(null);
  const handleResizeHeight = () => {
    if (textarea.current) {
      textarea.current.style.height = textarea.current.scrollHeight + 'px';
    }
  };

  const handleComment = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    handleResizeHeight();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleComment(event);
    }
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
      </CommentForm>
    </CommentLayout>
  );
};

export default Comment;

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
  background-color: #f0f2f5;
  border: none;
  border-radius: 12px;
  resize: none;
`;
