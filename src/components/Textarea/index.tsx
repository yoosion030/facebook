import { useRef, useContext, useEffect } from 'react';
import * as S from './style';
import { CommentContext } from 'context/CommentProvider';
import { TextareaModeType } from 'types/Textarea';

interface TextAreaProps {
  mode: TextareaModeType;
  commentId?: number;
}

const TextArea = ({ mode, commentId = 0 }: TextAreaProps) => {
  const { textareaFocus, addReply, addComment } = useContext(CommentContext);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleResizeHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) {
      event.preventDefault();
      handleComment(event);
    }
  };

  const handleComment = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const comment = textareaRef.current?.value;
    if (!comment) return;
    event.preventDefault();
    textareaRef.current.value = '';
    textareaRef.current.style.height = '32px';
    mode === 'reply' ? addReply(comment, commentId) : addComment(comment);
  };

  useEffect(() => {
    if (mode === 'comment' && textareaRef.current && textareaFocus !== null)
      textareaRef.current.focus();
  }, [textareaFocus]);

  return (
    <S.Textarea
      placeholder={`${mode === 'reply' ? '답글' : '댓글'}을 입력하세요. . .`}
      rows={1}
      onChange={handleResizeHeight}
      onKeyDown={handleKeyDown}
      ref={textareaRef}
      mode={mode}
    />
  );
};

export default TextArea;
