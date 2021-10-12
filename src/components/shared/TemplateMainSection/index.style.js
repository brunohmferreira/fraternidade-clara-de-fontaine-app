import styled from 'styled-components';
import { Image, Item } from 'semantic-ui-react';

export const StyledBackgroundImage = styled(Image)`
    position: relative;
    width: 100%;
    z-index: -1;
    box-shadow: var(--shadow-yellow);
`;

export const StyledDivTitle = styled.div`
    position: absolute !important;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    z-index: 0;
`;

export const StyledItem = styled(Item)`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;
`;

export const StyledSpanTitle = styled.span`
    font-size: 48px;
    line-height: 48px;
    font-weight: bold;
    color: var(--color-white);
    text-shadow: var(--black-stroke); 
    margin-top: 10%;
`;

export const StyledSpanSubtitle = styled.span`
    font-size: 24px;
    line-height: 24px;
    font-weight: bold;
    color: var(--color-white);
    text-shadow: var(--black-stroke); 
    margin-top: 5%;
`;

export const StyledSpanContent = styled.span`
    font-size: 22px;
    line-height: 22px;
    font-weight: bold;
    color: var(--color-white);
    text-shadow: var(--black-stroke); 
`;