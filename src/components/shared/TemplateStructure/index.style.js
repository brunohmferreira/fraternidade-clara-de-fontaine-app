import styled from 'styled-components';
import { Item } from 'semantic-ui-react';

export const Wrapper = styled.div`
    padding: 0;
`;

export const StyledItemGroup = styled(Item.Group)`
    width: 100%;
    z-index: 0;
`;

export const StyledItem = styled(Item)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 !important;
    z-index: 0;
`;