import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

export const Wrapper = styled.div`
    padding: 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    min-height: 300px;
    max-height: 800px;

    ${props => props.gradientToLeft ? `
        background-image: linear-gradient(to left, var(--color-secondary), var(--color-secondary-hover));
    ` : `
        background-image: linear-gradient(to right, var(--color-secondary), var(--color-secondary-hover));
    `}
`;

export const StyledImage = styled(Image)`
    width: 100%;
    height: 100%;
    z-index: 0;
    padding: 0;
`;

export const StyledLeftDiv = styled.div`
    grid-column: 1;
    width: 100%;
    height: min-content;
    left: 0;
    z-index: 0;
    position: relative;
    display: flex;
    flex-direction: column;

    ${props => props.center ? `
        justify-content: center;
        align-items: center;
        padding: 10% 5%;
    ` : `
        justify-content: left;
        align-items: left;
    `}
`;

export const StyledRightDiv = styled.div`
    grid-column: 2;
    width: 100%;
    height: min-content;
    right: 0;
    z-index: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    
    ${props => props.center ? `
        justify-content: center;
        align-items: center;
        padding: 10% 5%;
    ` : `
        justify-content: right;
        align-items: right;
    `}
`;

export const StyledTitleSpan = styled.span`
    color: var(--color-white);
    font-size: 24px;
    font-weight: bold;
    text-align: justify;
    line-height: 30px;
    margin-bottom: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledTextSpan = styled.span`
    color: var(--color-white);
    font-size: 16px;
    text-align: justify;
    line-height: 30px;
    margin-bottom: 10%;
`;