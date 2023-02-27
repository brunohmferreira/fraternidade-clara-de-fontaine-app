import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    color: var(--color-white);
    background-color: var(--color-gray);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr;
    z-index: 0;
`;

export const StyledDivFirstRow = styled.div`
    width: 100%;
    height: fit-content;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-row: 1;
    grid-template-columns: repeat(2, 1fr);
    z-index: 0;
`;

export const StyledDivSecondRow = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-row: 2;
    z-index: 0;
    padding: 16px;
`;

export const Bold = styled.span`
    font-weight: bold;
`;

export const StyledDivLeftColumn = styled.div`
    width: 100%;
    grid-column: 1;
    margin: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const StyledDivRightColumn = styled.div`
    width: 100%;
    grid-column: 2;
    margin: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const StyledDivLogo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 16px;
`;

export const StyledSpanButton = styled.span`
    cursor: pointer;
    font-size: 14px !important;
    line-height: 30px;

    &:hover {
        font-weight: bold;
    }
`;

export const StyledSpan = styled.span`
    font-size: 20px;
    line-height: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    ${props => props.clickable && `
        cursor: pointer;
    `}
    
    ${props => props.hoverable && `
        &:hover {
            font-weight: bold;
        }
    `}

    ${props => props.smallMargin ? `
        margin: 2px 10%;
    ` : `
        margin: 16px 10%;
    `}
`;

export const StyledSpanTitle = styled.span`
    text-shadow: var(--black-stroke-dp2); 
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    margin: 8px;
`;