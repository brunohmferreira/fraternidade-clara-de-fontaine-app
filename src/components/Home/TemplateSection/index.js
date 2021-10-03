import React from 'react';
import PropTypes from 'prop-types';
import { StyledImage, StyledLeftDiv, StyledRightDiv, StyledTitleSpan, StyledTextSpan, StyledItem, Wrapper } from './index.style';
import { Item } from 'semantic-ui-react';
import { Pages } from '../../../shared/enums/Pages';
import ReadMoreButton from '../../shared/ReadMoreButton';

const TemplateSection = ({ handleButtonClick, section, image, title, text, rightImage }) => {

    const ImageSection = () => {
        return (
            <>
                {image && <StyledImage src={image} />}
            </>
        );
    }

    const TextSection = () => {
        return (
            <Item.Group>
                {title && <StyledItem>
                    <StyledTitleSpan>
                        {title}
                    </StyledTitleSpan>
                </StyledItem>}
                {text && <Item>
                    <StyledTextSpan>
                        {text}
                    </StyledTextSpan>
                </Item>}
                {section && <Item>
                    <ReadMoreButton handleButtonClick={handleButtonClick} pageToOpen={section} />
                </Item>}
            </Item.Group>
        );
    }

    return (
        <Wrapper gradientToLeft={rightImage}>
            <StyledLeftDiv center={rightImage}>
                {rightImage ? <TextSection /> : <ImageSection />}
            </StyledLeftDiv>
            <StyledRightDiv center={!rightImage}>
                {rightImage ? <ImageSection /> : <TextSection />}
            </StyledRightDiv>
        </Wrapper>
    );
};

TemplateSection.propTypes = {
    handleButtonClick: PropTypes.func,
    section: PropTypes.object,
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.element,
    rightImage: PropTypes.bool
};

TemplateSection.defaultProps = {
    handleButtonClick: () => {},
    section: Pages.Home,
    image: '',
    title: '',
    text: (<></>),
    rightImage: false
};

export default TemplateSection;