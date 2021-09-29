import styled from 'styled-components';
import { Button, Image, Item } from 'semantic-ui-react';

export const StyledBackgroundImage = styled(Image)`
    position: relative;
    width: 100%;
    z-index: -1;
`;

export const StyledImage = styled(Image)`
    width: 20%;
    z-index: 0;
    margin-right: 2%;
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
`;

export const StyledSpan = styled.span`
    font-weight: bold;
    font-size: 50px;
    font-family: Rubik;
    color: var(--color-white);
    text-shadow: var(--black-stroke); 
    z-index: 0;
`;

export const StyledItem = styled(Item)`
    padding-bottom: 2% !important;
`;

export const StyledButton = styled(Button)`
    border-radius: 8px !important;
    box-shadow: var(--shadow-dp2) !important;
    color: var(--color-secondary-hover) !important;
    font-weight: bold !important;
    font-size: 16px !important;
    background-color: var(--color-primary) !important;
    background-image: linear-gradient(var(--color-primary), var(--color-primary-hover)) !important;
    background-position: 50% 50% !important;
    background-repeat: no-repeat !important;
    background-size: 0% 100% !important;
    transition: background-size .5s, color .5s !important;

    &:hover {
        background-size: 100% 100% !important;
        box-shadow: var(--shadow-dp4) !important;
    }
`;