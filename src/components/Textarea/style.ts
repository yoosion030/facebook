import styled from '@emotion/styled';
import { TextareaModeType } from 'types/Textarea';

interface TextareaProps {
  mode: TextareaModeType;
}

export const Textarea = styled.textarea<TextareaProps>`
  height: 32px;
  padding: 8px 12px;
  margin-bottom: 20px;
  background-color: #f0f2f5;
  border: none;
  border-radius: 12px;
  resize: none;
  width: ${({ mode }) => (mode === 'reply' ? '80%' : '100%')};
  margin-left: ${({ mode }) => (mode === 'reply' ? '50px' : '0px')};
`;
