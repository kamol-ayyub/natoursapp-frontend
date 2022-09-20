import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`${css`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Poppins:wght@200;300;400;500;600;700&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200&display=swap');

  :root {
    --section-rotate: 9vw;
  }

  ::-moz-selection {
    background-color: #55c57a;
    color: #fff;
  }

  ::selection {
    background-color: #55c57a;
    color: #fff;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    line-height: 1.6;
    font-weight: 300;
    font-family: 'Lato', sans-serif;
    color: #777;
    padding: 3rem;
    min-height: 100vh;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
`}`;

export default GlobalStyle;
