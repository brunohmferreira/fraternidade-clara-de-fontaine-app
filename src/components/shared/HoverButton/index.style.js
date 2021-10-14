import styled from 'styled-components';
import { Button, Icon } from 'semantic-ui-react';

export const StyledButton = styled(Button)`
  width: 44px !important;
  height: 44px;
  display: flex;
  z-index: 1;
  border: none;
  outline: none;
  opacity: 0.6;
  cursor: pointer;
  transition: all .2s linear !important;
  justify-content: center;
  align-items: center;
  padding: 10px !important;

  &:hover {
    opacity: 1;
    width: 120px !important;
    display: flex;
    box-shadow: var(--shadow-dp2);
  }

  &:active {
    transform: scale(.96);
  }
`;

export const StyledSpan = styled.span`
  color: var(--color-white);
  font-weight: bold;
  margin-right: 4px;
`;

export const StyledIcon = styled(Icon)`
  align-items: center;
  margin: 0 !important;
`;

export const StyledDiv = styled.div`
  display: flex; 
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;