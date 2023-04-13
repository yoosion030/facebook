import React, { useReducer, createContext } from 'react';
import { CommentType } from 'types/Comment';
import getStoredArray from 'utils/getStoredArray';
import setLocalStorageArray from 'utils/setLocalStorageArray';

type ActionType =
  | {
      type: 'ADD_COMMENT';
      comment: string;
      commentId: number;
      postId: number;
    }
  | { type: 'DELETE_COMMENT'; commentId: number; postId: number };

function reducer(state: CommentType[], action: ActionType): CommentType[] {
  switch (action.type) {
    case 'ADD_COMMENT': {
      const addData = [...state, { comment: action.comment, commentId: action.commentId }];
      setLocalStorageArray(`${action.postId.toString()}`, addData);
      return addData;
    }
    case 'DELETE_COMMENT': {
      const deleteData = [...state].filter(v => v.commentId !== action.commentId);
      setLocalStorageArray(`${action.postId.toString()}`, deleteData);
      return deleteData;
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
}

export const CommentContext = createContext<ContextType>({
  comments: [],
  addComment: () => {
    console.log('addComment function is not defined');
  },
  deleteComment: () => {
    console.log('deleteComment function is not defined');
  },
});

function CommentProvider({ children, postId }: { children: React.ReactNode; postId: number }) {
  const [state, dispatch] = useReducer(reducer, getStoredArray(`${postId.toString()}`));

  const addComment = (comment: string, commentId: number): void => {
    dispatch({ type: 'ADD_COMMENT', comment, commentId, postId });
  };

  const deleteComment = (commentId: number): void => {
    dispatch({ type: 'DELETE_COMMENT', commentId, postId });
  };

  return (
    <CommentContext.Provider
      value={{
        comments: state,
        addComment,
        deleteComment,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
}

export default CommentProvider;
