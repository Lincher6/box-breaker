import styled from 'styled-components/macro';
import {SECONDARY} from 'lib/constants';

export const Form = styled.form`
  display: flex;
  align-items: center;
`

export const Button = styled.button`
  background-color: transparent;
  outline: none;
  margin-left: -20px;
  border: none;
  color: ${SECONDARY};
  opacity: .6;
  cursor: pointer;
`