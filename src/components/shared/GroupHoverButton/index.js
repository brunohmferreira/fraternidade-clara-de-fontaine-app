import React from 'react';
import { request } from '../../../services';
import HoverButton from '../HoverButton';
import { Wrapper, StyledDivRow } from './index.style';

const GroupHoverButton = () => {
    return (
        <Wrapper>
            <StyledDivRow row={1}>
                <HoverButton name='YouTube' urlLink={request().env.YOUTUBE_URL} iconName='youtube' colorName='youtube' />
            </StyledDivRow>
            <StyledDivRow row={2}>
                <HoverButton name='Facebook' urlLink={request().env.FACEBOOK_URL} iconName='facebook' colorName='facebook' />
            </StyledDivRow>
            <StyledDivRow row={3}>
                <HoverButton name='Instagram' urlLink={request().env.INSTAGRAM_URL} iconName='instagram' colorName='instagram' />
            </StyledDivRow>
        </Wrapper>
    );
};

export default GroupHoverButton;