import styled from 'styled-components';
import { Accordion } from 'semantic-ui-react';

export const StyledAccordionTitle = styled(Accordion.Title)`
    background-color: var(--color-white);
    color: var(--color-secondary-hover) !important;
    font-size: 18px !important;

    &:hover {
        font-weight: bold;
    }

    ${props => props.active && `
        font-weight: bold;
    `}
`;

export const StyledAccordionContent = styled(Accordion.Content)`
    background-color: var(--color-white);
    color: var(--color-secondary-hover);
    font-size: 14px;
`;