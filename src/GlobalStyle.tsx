import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`${css`
  :root {
    --section-rotate: 9vw;

    //COLORS
    --greenColor-55: #55c57a;
    --mainColor-f7: #f7f7f7;
    --lineColor-e0: #e0e0e0;
    --whiteColor: #fff;
    --headingAlertColor: #eb4d4b;
    --headingLightGreen: #7dd56f;
    --darkGreen: #28b487;
    --darkOrange: #ff7730;
    --lightGray: var(--lightGray);
    --gray: var(--gray);
    --white-f2: var(--white-f2);
  }

  ::-moz-selection {
    background-color: var(--greenColor-55);
    color: var(--whiteColor);
  }

  ::selection {
    background-color: var(--greenColor-55);
    color: var(--whiteColor);
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
    color: var(--lightGray);
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
