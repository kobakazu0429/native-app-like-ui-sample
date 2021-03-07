import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  };

  html,
  body {
    margin: 0 0;
    height: 100%;
    width: 100%;
    overscroll-behavior-y: none;
  };



  ul, li {
    margin: 0;
    padding: 0;
  };

  input, button, textarea, select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    border-radius: 0;
    outline: none;
  };

  button {
    background-color: transparent;
    cursor: pointer;
  };

  a {
    text-decoration: none;
  };

  nav {
    display: inline;
  }
`;
