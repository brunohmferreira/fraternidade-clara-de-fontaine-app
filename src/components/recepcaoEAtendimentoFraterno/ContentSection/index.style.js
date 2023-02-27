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