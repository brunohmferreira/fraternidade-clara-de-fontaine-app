import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

export const StyledButton = styled.button`
  display: none;
  height: 40px;
  width: 40px;
  position: fixed;
  bottom: 5%;
  left: 2%;
  z-index: 1;
  border: none;
  outline: none;
  background-image: linear-gradient(to right, var(--color-primary), var(--color-primary-hover));
  opacity: 0.5;
  color: var(--color-secondary-hover);
  cursor: pointer;
  border-radius: 8px;
  transition: all .2s linear;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;

  &:hover {
    opacity: 1;
    width: 170px;
    display: flex;
    box-shadow: var(--shadow-dp1);
  }
`;

export const StyledSpan = styled.span`
  color: var(--color-secondary-hover);
  font-weight: bold;
  margin-right: 4px;
`;

export const StyledDiv = styled.div`
  display: flex; 
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledIcon = styled(Icon)`
  align-items: center;
`;