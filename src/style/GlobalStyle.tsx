import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset';

export const GlobalStyle = () => (
  <Global
    styles={css`
      ${emotionReset}
      body {
        font-family: 'Noto Sans KR', sans-serif;
        background-color: #f0f2f5;
      }

      a {
        text-decoration: none;
      }

      body::-webkit-scrollbar {
        width: 16px;
      }

      body::-webkit-scrollbar-thumb {
        background-color: #ffffff;
        border-radius: 10px;
        height: 56px;
        background-clip: content-box;
      }

      body::-webkit-scrollbar-thumb:hover {
        background-color: #cbcbcb;
      }

      *,
      *::after,
      *::before {
        box-sizing: border-box;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-smoothing: antialiased;
      }

      button {
        font-family: 'Noto Sans KR', sans-serif;
      }

      input {
        font-family: 'Noto Sans KR', sans-serif;
      }
    `}
  />
);
