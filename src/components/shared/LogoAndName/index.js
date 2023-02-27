import React from 'react';
import PropTypes from 'prop-types';
import { StyledDiv, StyledDivName, StyledDivLogo, StyledSpan, StyledDivRow, StyledImage } from './index.style';
import DesktopOrLaptop from '../../../shared/devices/DesktopOrLaptop';
import TabletOrMobile from '../../../shared/devices/TabletOrMobile';

const LogoAndName = ({ showName, nameFontSize, imageWidth, imageHeight, showLogo }) => {

    return (
        <>
            <DesktopOrLaptop>
                <StyledDiv singleColumn={!showName}>
                    {showLogo && <StyledDivLogo>
                        <StyledImage imagewidth={imageWidth} imageheight={imageHeight} src={`${process.env.PUBLIC_URL}\\images\\SimpleLogo.png`} />
                    </StyledDivLogo>}
                    {showName && <StyledDivName>
                        <StyledDivRow row={1} align='center'>
                            <StyledSpan nameFontSize={nameFontSize}>FRATERNIDADE ESPÍRITA</StyledSpan>
                        </StyledDivRow>
                        <StyledDivRow row={2} align='center'>
                            <StyledSpan nameFontSize={nameFontSize}>CLARA DE FONTAINE</StyledSpan>
                        </StyledDivRow>
                    </StyledDivName>}
                </StyledDiv>
            </DesktopOrLaptop>
            <TabletOrMobile>
                <StyledDiv singleColumn>
                    {showLogo && <StyledDivLogo>
                        <StyledImage imagewidth={imageWidth} imageheight={imageHeight} src={`${process.env.PUBLIC_URL}\\images\\SimpleLogo.png`} />
                    </StyledDivLogo>}
                    {showName && <StyledDivName height='100px'>
                        <StyledDivRow row={1} align='flex-end'>
                            <StyledSpan nameFontSize={nameFontSize}>FRATERNIDADE ESPÍRITA</StyledSpan>
                        </StyledDivRow>
                        <StyledDivRow row={2} align='center'>
                            <StyledSpan nameFontSize={nameFontSize}>CLARA DE FONTAINE</StyledSpan>
                        </StyledDivRow>
                    </StyledDivName>}
                </StyledDiv>
            </TabletOrMobile>
        </>
    );
};

LogoAndName.propTypes = {
    showName: PropTypes.bool,
    nameFontSize: PropTypes.string,
    imageWidth: PropTypes.string,
    imageHeight: PropTypes.string,
    showLogo: PropTypes.bool
};

LogoAndName.defaultProps = {
    showName: false,
    nameFontSize: '50px',
    imageWidth: '200px',
    imageHeight: '110px',
    showLogo: true
};

export default LogoAndName;