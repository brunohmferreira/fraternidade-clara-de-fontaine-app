import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr;
    padding: 0;
`;

export const StyledDivMainRow = styled.div`
    grid-row: 1;
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;
`;

export const StyledDivContentRow = styled.div`
    grid-row: 2;
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 !important;
    z-index: 0;
`;