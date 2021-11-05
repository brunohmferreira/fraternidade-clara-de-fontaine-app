import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

export const StyledDiv = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    width: 100%;

    ${props => props.singleColumn ? ` 
        grid-template-columns: 1fr;
    ` : `
        grid-template-columns: repeat(2, 1fr);
    `}
`;

export const StyledDivName = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    width: fit-content;
`;

export const StyledDivRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

    ${props => props.row && ` 
         grid-row: ${props.row};
    `}
`;

export const StyledDivLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;

    ${props => props.row && ` 
         grid-row: ${props.row};
    `}
`;

export const StyledImage = styled(Image)`
    z-index: 0;
    margin-right: 8px !important;

    ${props => props.imagewidth && `
        width: ${props.imagewidth};
    `}
    
    ${props => props.imageheight && `
        height: ${props.imageheight};
    `}
`;

export const StyledSpan = styled.span`
    font-weight: bold;
    font-family: Rubik;
    color: var(--color-white);
    text-shadow: var(--black-stroke-dp2); 
    z-index: 0;
    white-space: nowrap;

    ${props => props.nameFontSize ? `
        font-size: ${props.nameFontSize};
    ` : `
        font-size: 50px;
    `}
`;