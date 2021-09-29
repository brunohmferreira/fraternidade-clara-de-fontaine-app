import styled from 'styled-components';
import { Button, Popup } from 'semantic-ui-react'

export const StyledButton = styled(Button)`
    box-shadow: var(--shadow-dp1);
    opacity: 0.7;
    margin: 4px !important;
    cursor: pointer;
    
    &:hover {
        opacity: 1;
    }
`;

export const StyledPopup = styled(Popup)`
    border-radius: 8;
    padding: 0;
    margin: 0;
`;