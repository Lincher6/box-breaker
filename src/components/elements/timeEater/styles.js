import styled from "styled-components/macro";

export const Container = styled.div`
  border-radius: 70px;
  border: 3px solid #fff;
  position: absolute;
  top: ${({top}) => (top - 30) + 'px'};
  left: ${({left}) => (left - 30) + 'px'};
  display: block;
  width: 120px;
  height: 120px;
  animation: flow 5s ease-out;
  z-index: 2;
  
  &:after{
    content: "";
    position: absolute;
    background-color: #fff;
    top: 13px;
    left: 48%;
    height: 50px;
    width: 4px;
    border-radius: 5px;
    -webkit-transform-origin: 50% 97%;
    transform-origin: 50% 97%;
    -webkit-animation: grdAiguille 2s linear infinite;
    animation: grdAiguille 2s linear infinite;
  }
  
  @-webkit-keyframes grdAiguille{
    0%{-webkit-transform:rotate(0deg);}
    100%{-webkit-transform:rotate(360deg);}
  }

  @keyframes grdAiguille{
    0%{transform:rotate(0deg);}
    100%{transform:rotate(360deg);}
  }
  
  &:before{
    content: "";
    position: absolute;
    background-color: #fff;
    top: 24px;
    left: 48%;
    height: 40px;
    width: 4px;
    border-radius: 5px;
    -webkit-transform-origin: 50% 94%;
    transform-origin: 50% 94%;
    -webkit-animation: ptAiguille 12s linear infinite;
    animation: ptAiguille 12s linear infinite;
  }

  @-webkit-keyframes ptAiguille{
     0%{-webkit-transform:rotate(0deg);}
     100%{-webkit-transform:rotate(360deg);}
  }

  @keyframes ptAiguille{
     0%{transform:rotate(0deg);}
     100%{transform:rotate(360deg);}   
  }
  
  @keyframes flow{
    0%{background-color: transparent; transform: scale(0, 0)}
    25%{background-color: transparent;}
    100%{background-color: red; transform: scale(1, 1)}
  }
  
  &.stop {
    animation-play-state: paused;
    -webkit-animation-play-state: paused;
    -o-animation-play-state: paused;
    -moz-animation-play-state: paused;
  }
`;
