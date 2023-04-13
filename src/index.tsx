import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from 'style/GlobalStyle';
import CommentProvider from 'context/CommentProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <CommentProvider>
      <GlobalStyle />
      <App />
    </CommentProvider>
  </React.StrictMode>,
);
