import React from 'react';
import PropTypes from 'prop-types';
import { StyledDiv, StyledDivName, StyledDivLogo, StyledSpan, StyledDivRow, StyledImage } from './index.style';

const LogoAndName = ({ showName, nameFontSize, imageWidth, imageHeight }) => {

    return (
        <StyledDiv singleColumn={!showName}>
            <StyledDivLogo>
                <StyledImage imagewidth={imageWidth} imageheight={imageHeight} src='\images\SimpleLogo.png' />
            </StyledDivLogo>
            {showName && <StyledDivName>
                <StyledDivRow row={1}>
                    <StyledSpan nameFontSize={nameFontSize}>FRATERNIDADE ESPÍRITA</StyledSpan>
                </StyledDivRow>
                <StyledDivRow row={2}>
                    <StyledSpan nameFontSize={nameFontSize}>CLARA DE FONTAINE</StyledSpan>
                </StyledDivRow>
            </StyledDivName>}
        </StyledDiv>
    );
};

LogoAndName.propTypes = {
    showName: PropTypes.bool,
    nameFontSize: PropTypes.string,
    imageWidth: PropTypes.string,
    imageHeight: PropTypes.string
};

LogoAndName.defaultProps = {
    showName: false,
    nameFontSize: '50px',
    imageWidth: '200px',
    imageHeight: '110px'
};

export default LogoAndName;