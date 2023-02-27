import styled from 'styled-components';
import { Button, Icon } from 'semantic-ui-react';

export const StyledTextButton = styled.span`
    position: relative;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: .2em;
    text-transform: uppercase;
    vertical-align: middle;
    padding: 4px;
`;

export const StyledButton = styled.div`
    position: relative;
    transition: all .5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: var(--color-white);

    &:before {
        content: "";
        position: absolute;
        left: 0;
        display: block;
        border-radius: 30px;
        background: var(--color-primary);
        opacity: .5;
        width: 40px;
        height: 40px;
        transition: all .3s ease;
    }
    
    &:hover{
        color: var(--color-secondary-hover);
        
        &:before {
            width: 100%;
            background-image: linear-gradient(to right, var(--color-primary), var(--color-primary-hover));
            opacity: 1;
        }
    }

    &:active {
        transform: scale(.96);
    }
`;

export const StyledSimpleButton = styled(Button)`
    height: 40px !important;
    width: 200px !important;
    justify-self: center !important;
    border-radius: 12px !important;
    box-shadow: var(--shadow-dp2) !important;
    color: var(--color-secondary-hover) !important;
    font-weight: bold !important;
    font-size: 16px !important;
    background-color: var(--color-primary) !important;
    background-image: linear-gradient(var(--color-primary), var(--color-primary-hover)) !important;
    background-position: 50% 50% !important;
    background-repeat: no-repeat !important;
    background-size: 0% 100% !important;

    &:active {
        transform: scale(.96);
    }
`;

export const StyledIcon = styled(Icon)`
    align-items: center;
    z-index: 0;
`;