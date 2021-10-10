import React from 'react';
import { request } from '../../../services';
import HoverButton from '../HoverButton';
import { Wrapper, StyledItem } from './index.style';

const GroupHoverButton = () => {
    return (
        <Wrapper>
            <StyledItem.Group>
                <StyledItem>
                    <HoverButton name='YouTube' urlLink={request().env.YOUTUBE_URL} iconName='youtube' colorName='youtube' />
                </StyledItem>
                <StyledItem>
                    <HoverButton name='Facebook' urlLink={request().env.FACEBOOK_URL} iconName='facebook' colorName='facebook' />
                </StyledItem>
                <StyledItem>
                    <HoverButton name='Instagram' urlLink={request().env.INSTAGRAM_URL} iconName='instagram' colorName='instagram' />
                </StyledItem>
            </StyledItem.Group>
        </Wrapper>
    );
};

export default GroupHoverButton;