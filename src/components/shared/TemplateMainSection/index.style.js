import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

export const StyledBackgroundImage = styled(Image)`
    position: relative;
    width: 100%;
    height: fit-content;
    z-index: -1;
    box-shadow: var(--shadow-yellow);
`;

export const StyledDivTitle = styled.div`
    position: absolute !important;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 3fr;
    width: 80%;
    z-index: 0;
`;

export const StyledDivRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;

    ${props => props.row && ` 
        grid-row: ${props.row};
    `}
    
    ${props => props.margin ? ` 
        margin: ${props.margin};
    ` : `
        margin: 0;
    `}
`;

export const StyledSpanTitle = styled.span`
    line-height: 48px;
    font-weight: bold;
    color: var(--color-white);
    text-shadow: var(--black-stroke-dp2); 
    margin-top: 10%;

    ${props => props.size && ` 
        font-size: ${props.size};
    `}
`;

export const StyledSpanSubtitle = styled.span`
    font-size: 24px;
    line-height: 24px;
    font-weight: bold;
    color: var(--color-white);
    text-shadow: var(--black-stroke-dp2); 
    margin-top: 2%;
`;

export const StyledSpanContent = styled.span`
    line-height: 22px;
    font-weight: bold;
    color: var(--color-white);
    text-shadow: var(--black-stroke-dp2); 

    ${props => props.size && ` 
        font-size: ${props.size};
    `}
`;