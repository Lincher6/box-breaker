import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
`;

export const Controls = styled.div`
  display: flex;
  flex-wrap: nowrap;
  
  @media (max-width: 1000px) {
    width: 100%;
    justify-content: center;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-grow: .6;
  justify-content: space-between;
  flex-wrap: nowrap;
  
  @media (max-width: 1000px) {
    width: 100%;
    justify-content: center;
  }
`;