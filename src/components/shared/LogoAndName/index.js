import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';
import { StyledSpan, StyledItem, StyledImage } from './index.style';

const LogoAndName = ({ showName, nameFontSize, imageWidth, imageHeight }) => {

    return (
        <>
        <StyledImage imageWidth={imageWidth} imageHeight={imageHeight} src='\images\SimpleLogo.png' />
        {showName && <Item.Group>
            <StyledItem>
                <Item.Content >
                    <StyledSpan nameFontSize={nameFontSize}>FRATERNIDADE ESPÍRITA</StyledSpan>
                </Item.Content>
            </StyledItem>
            <Item>
                <Item.Content verticalAlign='middle'>
                    <StyledSpan nameFontSize={nameFontSize}>CLARA DE FONTAINE</StyledSpan>
                </Item.Content>
            </Item>
        </Item.Group>}
        </>
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