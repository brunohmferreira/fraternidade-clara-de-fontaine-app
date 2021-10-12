import styled from 'styled-components';
import { Item, Image } from 'semantic-ui-react';

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
    text-shadow: var(--black-stroke); 
    z-index: 0;

    ${props => props.nameFontSize ? `
        font-size: ${props.nameFontSize};
    ` : `
        font-size: 50px;
    `}
`;

export const StyledItem = styled(Item)`
    padding-bottom: 1% !important;
`;