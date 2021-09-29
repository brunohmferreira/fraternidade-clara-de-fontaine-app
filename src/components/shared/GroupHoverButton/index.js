import React from 'react';
import HoverButton from '../HoverButton';
import { Wrapper } from './index.style';

const GroupHoverButton = () => {
    return (
        <Wrapper>
            <HoverButton name='YouTube' urlLink='https://www.youtube.com/channel/UCOdDHSWpKYdxh2gCu-ubWeQ' iconName='youtube' colorName='youtube' />
            <br />
            <HoverButton name='Facebook' urlLink='https://pt-br.facebook.com/clara.defontaine' iconName='facebook' colorName='facebook' />
            <br />
            <HoverButton name='Instagram' urlLink='https://instagram.com/fraternidadeclaradefontaine' iconName='instagram' colorName='instagram' />
        </Wrapper>
    );
};

export default GroupHoverButton;