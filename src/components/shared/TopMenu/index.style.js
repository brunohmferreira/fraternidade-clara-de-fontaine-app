import styled from 'styled-components';
import { Image, Menu } from 'semantic-ui-react'

export const StyledImage = styled(Image)`
    width: 40%;
    padding-left: 1%;
    padding-bottom: 1%;
`;
export const StyledMenu = styled(Menu)`
    z-index: 1;
    position: absolute;
    width: 100%;
    background-color: transparent !important;
    border : 0 !important;
`;

export const StyledMenuItem = styled(Menu.Item)`
    color: var(--color-white) !important;
    font-size: 18px;
    padding-bottom: 8px !important;
    width: min-content;
    text-align: center;
    border-bottom: 4px solid transparent !important;
    text-shadow: var(--shadow-dp1);
    transition: all .5s linear !important;
    
    ${props => props.active && `
        border-bottom: 4px solid var(--color-secondary) !important;
        color: var(--color-secondary) !important;
        box-shadow: var(--shadow-dp3) !important;
    `}

    &:hover {
        ${props => !props.active && `
            color: var(--color-secondary) !important;
            text-shadow: var(--shadow-dp2);
        `}
    }
`;