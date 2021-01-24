import styled from 'styled-components/macro';
import {PRIMARY, SECONDARY} from 'lib/constants';
import CircularProgress from '@material-ui/core/CircularProgress';

export const Container = styled.div`
  min-height: 300px;
  position: relative;
`

export const Table = styled.table`
  border-collapse: collapse;
  min-width: 800px;
  @media(max-width: 1000px) {
    min-width: 300px;
  }
`

export const Header = styled.thead`
  text-align: center;
  box-sizing: border-box;
  & td {
    border: 1px solid ${SECONDARY};
  }
  & div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`

export const Body = styled.tbody`
  
`

export const TR = styled.tr`
  line-height: 2rem;
  color: ${({ currentUser }) => currentUser ? PRIMARY : 'inherit'};
`

export const TD = styled.td`
  padding: 0 10px;
  border: 1px solid #0099cc99;
  transition: background-color .2s;
  &:hover {
    cursor: ${({ sortable }) => sortable ? 'pointer' : 'initial'};
    background-color: ${({ sortable }) => sortable ? '#0099cc99' : 'initial'};
   
  }
`

export const Select = styled.select`
  background: transparent;
  outline: none;
  border: none;
  color: ${({ admin }) => admin ? 'gold' : 'white'};
  & option {
    color: black;
  }
`

export const Loader = styled(CircularProgress)`
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -60px;
  margin-left: -60px;
  opacity: .5;
`
export const Back = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
`
