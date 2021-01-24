import styled from 'styled-components/macro';
import { createGlobalStyle } from 'styled-components';
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
    -webkit-touch-callout: none;
    -webkit-user-select: none; 
    -moz-user-select: none; 
    -ms-user-select: none; 
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
  
  @media(max-width: 1000px) {
    html {
      font-size: 12px;
    }
  }
    
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
 
  
  a {
    text-decoration: none;
    color: initial;
  }
  
  i {
  margin: 20px;
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
  
  .disabled {
    pointer-events: none;
    opacity: .4;
  }
  
  @keyframes pointsPopUp {
    0%{transform: translate(0, 0); opacity: 1; display: block}
    100%{transform: translate(0, -20px); opacity: 0; display: none}
  }
    
  @keyframes shot {
    0% {transform: scale(0, 0); opacity: 1}
    100% {transform: scale(1, 1); opacity: 0}
  }
  
  @keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }

  @keyframes fadeOut {
    0% {opacity: 1;}
    100% {opacity: 0;}
  }
  
  @keyframes appear {
    0% {opacity: 0; transform: translate(0, 30px)}
    100% {opacity: 1; transform: translate(0, 0)}
  }
`;

export const Span = styled.span`
  color: ${({ color }) => color};
  margin: 0 5px;
  font-weight: ${({ weight }) => weight};
`

export const Column = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default GlobalStyle;