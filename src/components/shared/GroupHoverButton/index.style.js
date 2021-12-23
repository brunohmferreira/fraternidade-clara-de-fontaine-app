import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    position: fixed;
    bottom: 4%;
    right: 2%;
    z-index: 1;
`;

export const StyledDivRow = styled.div`
    grid-column: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 8px;

    ${props => props.row && ` 
        grid-row: ${props.row};
    `}
`;