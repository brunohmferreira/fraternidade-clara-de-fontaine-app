import styled from 'styled-components';
import { Button, Image } from 'semantic-ui-react';

export const StyledBackgroundImage = styled(Image)`
    position: relative;
    width: 100%;
    z-index: -1;
`;

export const StyledImage = styled(Image)`
    width: 100%;
    z-index: 0;
    padding: 0;
`;

export const StyledDivTitle = styled.div`
    position: absolute !important;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    padding-bottom: 10%;
    z-index: 0;
`;

export const StyledDivButton = styled.div`
    position: absolute !important;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    padding-top: 20%;
    z-index: 0;

    ${props => props.paddingTop ? `
        padding-top: ${props.paddingTop};
    ` : `
        padding-top: 20%;
    `}
`;

export const StyledButton = styled(Button)`
    border-radius: 12px !important;
    box-shadow: var(--shadow-dp2) !important;
    color: var(--color-secondary-hover) !important;
    font-weight: bold !important;
    font-size: 16px !important;
    background-color: var(--color-primary) !important;
    background-image: linear-gradient(var(--color-primary), var(--color-primary-hover)) !important;
    background-position: 50% 50% !important;
    background-repeat: no-repeat !important;
    background-size: 0% 100% !important;
    transition: background-size .5s, color .5s, all .3s ease !important;

    &:hover {
        background-size: 100% 100% !important;
        box-shadow: var(--shadow-dp4) !important;
    }

    &:active {
        transform: scale(.96);
    }
`;