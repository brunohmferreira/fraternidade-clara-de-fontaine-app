import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, StyledTextButton, StyledIcon } from './index.style';
import { Pages } from '../../../shared/enums/Pages';

const ReadMoreButton = ({ handleButtonClick, pageToOpen }) => {

    return (
        <StyledButton onClick={() => handleButtonClick(pageToOpen)}>
            <StyledTextButton>Leia mais</StyledTextButton>
            <StyledIcon name='arrow right' size='large' />
        </StyledButton>
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