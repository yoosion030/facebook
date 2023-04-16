import React, { useReducer, createContext } from 'react';
import { CommentType } from 'types/Comment';
import getStoredArray from 'utils/getStoredArray';
import setLocalStorageArray from 'utils/setLocalStorageArray';

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
      const commentId = state[0] ? state[0].commentId + 1 : 0;
      const addData = [{ comment: action.comment, commentId, replies: [] }, ...state];
      setLocalStorageArray(`${action.postId}`, addData);
      return addData;
    }

    case 'DELETE_COMMENT': {
      const deleteData = [...state].filter(v => v.commentId !== action.commentId);
      setLocalStorageArray(`${action.postId}`, deleteData);
      return deleteData;
    }

    case 'ADD_REPLY': {
      const updatedComments = state.map(comment => {
        if (comment.commentId === action.commentId) {
          const updatedReply = {
            replyId: comment.replies ? comment.replies.length : 0,
            comment: action.reply,
          };
          return { ...comment, replies: [...(comment.replies || []), updatedReply] };
        } else {
          return comment;
        }
      });
      setLocalStorageArray(`${action.postId}`, updatedComments);
      return updatedComments;
    }

    case 'DELETE_REPLY': {
      const replies = [...state].filter(v => v.commentId === action.commentId)[0].replies;
      const updatedComments = state.map(comment => {
        if (comment.commentId === action.commentId) {
          return { ...comment, replies: replies?.filter(v => v.replyId !== action.replyId) };
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
  addComment: (comment: string) => void;
  deleteComment: (commentId: number) => void;
  addReply: (reply: string, commentId: number) => void;
  deleteReply: (replyId: number, commentId: number) => void;
}

export const CommentContext = createContext<ContextType>({
  comments: [],
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
  const [state, dispatch] = useReducer(reducer, getStoredArray(`${postId}`));

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
