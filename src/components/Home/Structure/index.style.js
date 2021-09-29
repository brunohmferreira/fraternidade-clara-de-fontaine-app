import styled from 'styled-components';
import { Item } from 'semantic-ui-react';

export const Wrapper = styled.div`
    padding: 0px;
`;

export const StyledItemGroup = styled(Item.Group)`
    width: 100%;
`;

export const StyledItem = styled(Item)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 !important;
`;