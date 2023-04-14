import React, { useReducer, createContext } from 'react';
import { CommentType } from 'types/Comment';
import getStoredArray from 'utils/getStoredArray';
import setLocalStorageArray from 'utils/setLocalStorageArray';

type ActionType =
  | {
      type: 'ADD_COMMENT';
      comment: string;
      commentId: number;
      postId: string;
    }
  | { type: 'DELETE_COMMENT'; commentId: number; postId: string }
  | {
      type: 'ADD_REPLY';
      reply: string;
      commentId: number;
      postId: string;
    };

function reducer(state: CommentType[], action: ActionType): CommentType[] {
  switch (action.type) {
    case 'ADD_COMMENT': {
      const addData = [
        { comment: action.comment, commentId: action.commentId, reply: [] },
        ...state,
      ];
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
            replyId: !!comment.replies ? comment.replies.length + 1 : 1,
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
    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
}

interface ContextType {
  comments: CommentType[];
  addComment: (comment: string, commentId: number) => void;
  deleteComment: (commentId: number) => void;
  addReply: (reply: string, commentId: number) => void;
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
});

function CommentProvider({ children, postId }: { children: React.ReactNode; postId: string }) {
  const [state, dispatch] = useReducer(reducer, getStoredArray(`${postId}`));

  const addComment = (comment: string, commentId: number): void => {
    dispatch({ type: 'ADD_COMMENT', comment, commentId, postId });
  };

  const deleteComment = (commentId: number): void => {
    dispatch({ type: 'DELETE_COMMENT', commentId, postId });
  };

  const addReply = (reply: string, commentId: number): void => {
    dispatch({ type: 'ADD_REPLY', reply, commentId, postId });
  };

  return (
    <CommentContext.Provider
      value={{
        comments: state,
        addComment,
        deleteComment,
        addReply,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
}

export default CommentProvider;
