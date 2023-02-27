import styled from 'styled-components';

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

export const StyledSpanTitle = styled.span`
    font-size: 20px;
    color: var(--color-secondary);
    text-align: justify;
    font-weight: bold;
`;

export const StyledSpanText = styled.span`
    font-size: 16px;
    color: var(--color-secondary-hover);
    text-align: justify;
`;

export const StyledDiv = styled.div`
    margin: 5% 0% 0% 0%;
    width: 100%;
    height: min-content;
`;

export const StyledDivContent = styled.div`
    margin: 2% 0% 0% 0%;
`;

export const Bold = styled.span`
    font-weight: bold;
`;

export const Italic = styled.span`
    font-style: italic;
`;