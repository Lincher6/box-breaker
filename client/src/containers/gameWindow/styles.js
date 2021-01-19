import styled from 'styled-components/macro'

export const Container = styled.div`
  padding: 0 0 20px 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  
  @media (max-width: 1000px) {
    padding: 0 10px 10px 10px;
  }
`