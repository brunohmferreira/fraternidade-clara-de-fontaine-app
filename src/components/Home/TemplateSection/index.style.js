import styled from 'styled-components';
import { Image, Item } from 'semantic-ui-react';

export const Wrapper = styled.div`
    padding: 0px;
    height: 500px;
    width: 100%;
    display: flex;

    ${props => props.gradientToLeft ? `
        background-image: linear-gradient(to left, var(--color-secondary), var(--color-secondary-hover));
    ` : `
        background-image: linear-gradient(to right, var(--color-secondary), var(--color-secondary-hover));
    `}
`;

export const StyledImage = styled(Image)`
    height: 100%;
    z-index: 0;
    padding: 0;
`;

export const StyledLeftDiv = styled.div`
    height: 100%;
    width: 50%;
    left: 0;
    z-index: 0;
    position: relative;
    display: flex;

    ${props => props.center ? `
        justify-content: center;
        align-items: center;
        padding: 10%;
    ` : `
        justify-content: left;
        align-items: left;
    `}
`;

export const StyledRightDiv = styled.div`
    height: 100%;
    width: 50%;
    right: 0;
    z-index: 0;
    position: relative;
    display: flex;
    
    ${props => props.center ? `
        justify-content: center;
        align-items: center;
        padding: 10%;
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
    margin-bottom: 10%;
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

export const StyledItem = styled(Item)`
    display: block !important;
`;