import React, { useReducer, createContext } from 'react';
import { CommentType } from 'types/Comment';

const defaultValue: CommentType[] = [];
type ActionType =
  | {
      type: 'ADD_TODO';
      comment: string;
    }
  | { type: 'DELETE_TODO'; id: number };

function reducer(state: CommentType[], action: ActionType): CommentType[] {
  switch (action.type) {
    case 'ADD_TODO': {
      return [{ comment: action.comment }, ...state];
    }
    case 'DELETE_TODO': {
      return [];
    }
  }
}

interface ContextType {
  comments: CommentType[];
  addComment: (comment: string) => void;
  deleteComment: (id: number) => void;
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

  const addComment = (comment: string): void => {
    dispatch({ type: 'ADD_TODO', comment });
  };

  const deleteComment = (id: number): void => {
    dispatch({ type: 'DELETE_TODO', id });
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
