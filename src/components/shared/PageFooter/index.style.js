import styled from 'styled-components';
import { Item } from 'semantic-ui-react';

export const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    color: var(--color-white);
    background-color: var(--color-gray);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;
`;

export const Bold = styled.label`
    font-weight: bold;
`;

export const StyledItemGroup = styled(Item.Group)`
    width: 100%;
    justify-content: center;
`;

export const StyledItemGroupColumn = styled(Item.Group)`
    width: 50%;
    justify-content: center;
    padding-left: 10%;
`;

export const StyledItem = styled(Item)`
    width: 100%;
`;

export const StyledItemImage = styled(Item)`
    margin: 10% !important;
    cursor: pointer;
`;

export const StyledItemCentralized = styled(Item)`
    justify-content: center;
    padding-bottom: 1% !important;
`;

export const StyledItemButton = styled(Item)`
    cursor: pointer;
    font-size: 14px !important;
    line-height: 1%;

    &:hover {
        font-weight: bold;
    }
`;

export const StyledSpan = styled.span`
    font-size: 20px;
    line-height: 30px;

    ${props => props.clickable && `
        cursor: pointer;
    `}
    
    ${props => props.hoverable && `
        &:hover {
            font-weight: bold;
        }
    `}
`;

export const StyledSpanTitle = styled.span`
    text-shadow: var(--black-stroke); 
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
`;