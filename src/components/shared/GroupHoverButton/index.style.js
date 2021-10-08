import styled from 'styled-components';
import { Item } from 'semantic-ui-react';

export const Wrapper = styled.div`
    position: fixed;
    bottom: 4%;
    right: 2%;
    z-index: 1;
`;

export const StyledItem = styled(Item)`
    display: flex;
    align-items: center;
    justify-content: end;
`;