import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    padding: 0;
`;

export const StyledDivDesktop = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    grid-column: 1;
    margin: 0;
`;

export const StyledDivMobile = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-column: 1;
    margin: 0;
`;