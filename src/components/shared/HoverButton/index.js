import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './index.style';


const HoverButton = ({ name, urlLink, iconName, colorName }) => {

    const handleButtonClick = () => {
        window.open(`${urlLink}`, '_blank');
    }

    return (
        <StyledButton
            circular
            color={colorName} 
            icon={iconName} 
            size="large"
            onClick={handleButtonClick}
            data-toggle='tooltip'
            title={name}
        />
    );
};

HoverButton.propTypes = {
    name: PropTypes.string,
    urlLink: PropTypes.string,
    iconName: PropTypes.string,
    colorName: PropTypes.string
};

HoverButton.defaultProps = {
    name: '',
    urlLink: '',
    iconName: '',
    colorName: 'var(--color-white)'
};

export default HoverButton;