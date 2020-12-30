import { createGlobalStyle } from 'styled-components';
import font from './assets/fonts/digital-7.ttf'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'DigitalClock';
    font-display: block;
    src: local('DigitalClock'), url(${font}) format('truetype');
  }
    
  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
      -moz-user-select: none; /* Old versions of Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
      user-select: none;
  }

    body {
      background-color: #182533;
      color: white;
      overflow: hidden;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    
    .app {
      display: flex;
      width: 100vw;
      height: 100vh;
      padding: 0;
      overflow: hidden;
    }
`;

export default GlobalStyle;