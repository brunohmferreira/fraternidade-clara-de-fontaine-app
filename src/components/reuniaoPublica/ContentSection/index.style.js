import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

export const Wrapper = styled.div`
    ${props => props.desktop ? `
        padding: 5% 20%;
    ` : `
        padding: 5%;
    `}
`;

export const StyledSpan = styled.span`
    font-size: 16px;
    color: var(--color-secondary-hover);
    text-align: justify;
`;

export const StyledDiv = styled.div`
    margin: 5% 0% 0% 0%;
    width: 100%;
    height: min-content;
`;

export const StyledSpanTitle = styled.span`
    font-size: 20px;
    color: var(--color-secondary);
    text-align: justify;
    font-weight: bold;
    margin-bottom: 5%;
`;

export const StyledImage = styled(Image)`
    width: 50%;
    height: 50%;
    z-index: 0;
    padding: 2% 0;
    margin: auto;

    ${props => props.widthAndHeight ? `
        width: ${props.widthAndHeight};
        height: ${props.widthAndHeight};
    ` : `
        width: 50%;
        height: 50%;
    `}
`;