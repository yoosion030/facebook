import React, { useReducer, createContext, useState } from 'react';
import { CommentType } from 'types/Comment';
import { getStoredArray, setLocalStorageArray } from 'utils';

type ActionType =
  | {
      type: 'ADD_COMMENT';
      comment: string;
      postId: string;
    }
  | { type: 'DELETE_COMMENT'; commentId: number; postId: string }
  | {
      type: 'ADD_REPLY';
      reply: string;
      commentId: number;
      postId: string;
    }
  | {
      type: 'DELETE_REPLY';
      replyId: number;
      commentId: number;
      postId: string;
    };

function reducer(state: CommentType[], action: ActionType): CommentType[] {
  switch (action.type) {
    case 'ADD_COMMENT': {
      const maxCommentId = Math.max(...state.map(comment => comment.commentId), 0);
      const newComment = {
        comment: action.comment,
        commentId: maxCommentId + 1,
        replies: [],
      };
      const updatedComments = [newComment, ...state];
      setLocalStorageArray(`${action.postId}`, updatedComments);
      return updatedComments;
    }

    case 'DELETE_COMMENT': {
      const deleteData = [...state].filter(v => v.commentId !== action.commentId);
      setLocalStorageArray(`${action.postId}`, deleteData);
      return deleteData;
    }

    case 'ADD_REPLY': {
      const targetComment = state.find(comment => comment.commentId === action.commentId);
      if (!targetComment) return state;

      const maxReplyId = Math.max(
        ...(targetComment.replies?.map(reply => reply.replyId) || [0]),
        0,
      );
      const newReply = {
        replyId: maxReplyId + 1,
        comment: action.reply,
      };

      const updatedComment = {
        ...targetComment,
        replies: [...(targetComment.replies || []), newReply],
      };

      const updatedComments = state.map(comment =>
        comment.commentId === action.commentId ? updatedComment : comment,
      );

      setLocalStorageArray(`${action.postId}`, updatedComments);
      return updatedComments;
    }

    case 'DELETE_REPLY': {
      const targetComment = state.find(comment => comment.commentId === action.commentId);
      if (!targetComment) return state;

      const updatedReplies = targetComment.replies?.filter(
        reply => reply.replyId !== action.replyId,
      );

      const updatedComments = state.map(comment => {
        if (comment.commentId === action.commentId) {
          return { ...comment, replies: updatedReplies };
        } else {
          return comment;
        }
      });

      setLocalStorageArray(`${action.postId}`, updatedComments);
      return updatedComments;
    }
  }
}

interface ContextType {
  comments: CommentType[];
  textareaFocus: boolean | null;
  handleTextareaFocus: () => void;
  addComment: (comment: string) => void;
  deleteComment: (commentId: number) => void;
  addReply: (reply: string, commentId: number) => void;
  deleteReply: (replyId: number, commentId: number) => void;
}

export const CommentContext = createContext<ContextType>({
  comments: [],
  textareaFocus: null,
  handleTextareaFocus: () => {
    console.log('handleTextareaFocus function is not defined');
  },
  addComment: () => {
    console.log('addComment function is not defined');
  },
  deleteComment: () => {
    console.log('deleteComment function is not defined');
  },
  addReply: () => {
    console.log('addReply function is not defined');
  },
  deleteReply: () => {
    console.log('deleteReply function is not defined');
  },
});

function CommentProvider({ children, postId }: { children: React.ReactNode; postId: string }) {
  const [textareaFocus, setTextareaFocus] = useState<boolean | null>(null);

  const handleTextareaFocus = () => {
    setTextareaFocus(!textareaFocus);
  };

  const [state, dispatch] = useReducer(reducer, getStoredArray<CommentType>(`${postId}`));

  const addComment = (comment: string): void => {
    dispatch({ type: 'ADD_COMMENT', comment, postId });
  };

  const deleteComment = (commentId: number): void => {
    dispatch({ type: 'DELETE_COMMENT', commentId, postId });
  };

  const addReply = (reply: string, commentId: number): void => {
    dispatch({ type: 'ADD_REPLY', reply, commentId, postId });
  };

  const deleteReply = (replyId: number, commentId: number): void => {
    dispatch({ type: 'DELETE_REPLY', replyId, postId, commentId });
  };

  return (
    <CommentContext.Provider
      value={{
        comments: state,
        textareaFocus,
        handleTextareaFocus,
        addComment,
        deleteComment,
        addReply,
        deleteReply,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
}

export default CommentProvider;
