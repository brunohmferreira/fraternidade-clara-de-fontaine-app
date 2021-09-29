import React from 'react';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';
import { Pages } from '../../../shared/enums/Pages';
import { StyledButton, StyledSpan, StyledDivTitle, StyledBackgroundImage, StyledImage, StyledItem, StyledDivButton } from './index.style';

const MainSection = ({ handleButtonClick }) => {

    return (
        <>
        <StyledBackgroundImage src='\images\Sunflowers.png' />
        <StyledDivTitle>
            <StyledImage src='\images\SimpleLogo.png' />
            <Item.Group>
                <StyledItem>
                    <Item.Content verticalAlign='middle'>
                        <StyledSpan>FRATERNIDADE ESPÍRITA</StyledSpan>
                    </Item.Content>
                </StyledItem>
                <Item>
                    <Item.Content verticalAlign='middle'>
                        <StyledSpan>CLARA DE FONTAINE</StyledSpan>
                    </Item.Content>
                </Item>
            </Item.Group>
        </StyledDivTitle>
        <StyledDivButton>
            <StyledButton content='CONHEÇA NOSSO TRABALHO RELIGIOSO' onClick={() => handleButtonClick(Pages.TrabalhoReligioso)} />
        </StyledDivButton>
        </>
    );
};

MainSection.propTypes = {
    handleButtonClick: PropTypes.func
};

MainSection.defaultProps = {
    handleButtonClick: () => {}
};

export default MainSection;