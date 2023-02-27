import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, StyledTextButton, StyledIcon, StyledSimpleButton } from './index.style';
import { Pages } from '../../../shared/enums/Pages';
import DesktopOrLaptop from '../../../shared/devices/DesktopOrLaptop';
import TabletOrMobile from '../../../shared/devices/TabletOrMobile';


const ReadMoreButton = ({ handleButtonClick, pageToOpen }) => {

    return (
        <>
            <DesktopOrLaptop>
                <StyledButton onClick={() => handleButtonClick(pageToOpen)}>
                    <StyledTextButton>Leia mais</StyledTextButton>
                    <StyledIcon name='arrow right' size='large' />
                </StyledButton>
            </DesktopOrLaptop>
            <TabletOrMobile>
                <StyledSimpleButton onClick={() => handleButtonClick(pageToOpen)}>
                    <StyledTextButton>Leia mais</StyledTextButton>
                </StyledSimpleButton>
            </TabletOrMobile>
        </>
    );
};

ReadMoreButton.propTypes = {
    handleButtonClick: PropTypes.func,
    pageToOpen: PropTypes.object
};

ReadMoreButton.defaultProps = {
    handleButtonClick: () => {},
    pageToOpen: Pages.Home
};

export default ReadMoreButton;