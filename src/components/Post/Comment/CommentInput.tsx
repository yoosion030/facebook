import { useRef, useContext } from 'react';
import * as S from './style';
import { CommentContext } from 'context/CommentProvider';

const CommentInput = () => {
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
    addComment(comment);
  };

  return (
    <S.CommentInput
      placeholder='댓글을 입력하세요...'
      rows={1}
      onChange={handleResizeHeight}
      onKeyDown={handleKeyDown}
      ref={textarea}
    />
  );
};

export default CommentInput;
