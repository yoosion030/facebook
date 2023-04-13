import React, { useReducer, createContext } from 'react';
import { CommentType } from 'types/Comment';
import setLocalStorageArray from 'utils/setLocalStorageArray';

const defaultValue: CommentType[] = [];
type ActionType =
  | {
      type: 'ADD_TODO';
      comment: string;
      commentId: number;
      postId: number;
    }
  | { type: 'DELETE_TODO'; id: number; postId: number };

function reducer(state: CommentType[], action: ActionType): CommentType[] {
  switch (action.type) {
    case 'ADD_TODO': {
      const addData = [...state, { comment: action.comment, commentId: state.length }];
      setLocalStorageArray(action.postId.toString(), addData);
      return addData;
    }
    case 'DELETE_TODO': {
      const deleteData = [...state].filter(v => v.commentId !== action.id);

      setLocalStorageArray(action.postId.toString(), deleteData);
      return deleteData;
    }
  }
}

interface ContextType {
  comments: CommentType[];
  addComment: (comment: string, commentId: number, postId: number) => void;
  deleteComment: (id: number, postId: number) => void;
}

export const CommentContext = createContext<ContextType>({
  comments: defaultValue,
  addComment: () => {
    console.log();
  },
  deleteComment: () => {
    console.log();
  },
});

function CommentProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, defaultValue);

  const addComment = (comment: string, commentId: number, postId: number): void => {
    dispatch({ type: 'ADD_TODO', comment, commentId, postId });
  };

  const deleteComment = (id: number, postId: number): void => {
    dispatch({ type: 'DELETE_TODO', id, postId });
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
