import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledButton, StyledSpan, StyledIcon, StyledDiv } from './index.style';


const HoverButton = ({ name, urlLink, iconName, colorName }) => {

    const [showButtonText, setShowButtonText] = useState(false);

    const handleButtonClick = () => {
        window.open(`${urlLink}`, '_blank');
    };

    const handleMouseOver = (showText) => {
        setTimeout(() => setShowButtonText(showText), 100);
    };

    return (
        <StyledButton
            onMouseOver={() => handleMouseOver(true)}
            onMouseLeave={() => handleMouseOver(false)}
            onClick={() => handleButtonClick()}
            circular
            color={colorName}
        >
            <StyledDiv>
                {showButtonText && (<StyledSpan>{name}</StyledSpan>)}
                <StyledIcon
                    name={iconName}
                    size='large'
                />
            </StyledDiv>
        </StyledButton>
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