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

export const Bold = styled.span`
    font-weight: bold;
`;

export const StyledDiv = styled.div`
    margin: 5% 0% 0% 0%;
    width: 100%;
    height: min-content;
`;
