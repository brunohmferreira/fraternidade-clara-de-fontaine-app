import React from 'react';
import HoverButton from '../HoverButton';
import { Wrapper, StyledItem } from './index.style';

const GroupHoverButton = () => {
    return (
        <Wrapper>
            <StyledItem.Group>
                <StyledItem>
                    <HoverButton name='YouTube' urlLink='https://www.youtube.com/channel/UCOdDHSWpKYdxh2gCu-ubWeQ' iconName='youtube' colorName='youtube' />
                </StyledItem>
                <StyledItem>
                    <HoverButton name='Facebook' urlLink='https://pt-br.facebook.com/clara.defontaine' iconName='facebook' colorName='facebook' />
                </StyledItem>
                <StyledItem>
                    <HoverButton name='Instagram' urlLink='https://instagram.com/fraternidadeclaradefontaine' iconName='instagram' colorName='instagram' />
                </StyledItem>
            </StyledItem.Group>
        </Wrapper>
    );
};

export default GroupHoverButton;