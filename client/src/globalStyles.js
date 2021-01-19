import {createGlobalStyle} from 'styled-components';
import digitalClockFont from './assets/fonts/digital-7.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'DigitalClock';
    font-display: block;
    src: local('DigitalClock'), url(${digitalClockFont}) format('truetype');
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
  
  a {
    text-decoration: none;
    color: initial;
  }
    
  .app {
    display: flex;
    width: 100vw;
    height: 100vh;
    padding: 0;
    overflow: hidden;
  }
  
  .app.column {
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }
    
  .flash {
    position: fixed;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid white;
    opacity: 0;
    pointer-events: none;
    animation: shot .6s;
    z-index: 2;
  }
  
  .popUp {
    opacity: 0;
    position: absolute;
    color: orange;
    font-size: 2em;
    animation: pointsPopUp 1.5s;
  }
  
  .loader {
    position: absolute;
  }
  
  .smallButton {
    
  }
  
  @keyframes pointsPopUp {
    0%{transform: translate(0, 0); opacity: 1; display: block}
    100%{transform: translate(0, -20px); opacity: 0; display: none}
  }
    
  @keyframes shot {
    0% {transform: scale(0, 0); opacity: 1}
    100% {transform: scale(1, 1); opacity: 0}
  }
`;

export default GlobalStyle;