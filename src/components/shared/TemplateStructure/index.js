import React from 'react';
import PropTypes from 'prop-types';
import { StyledItem, StyledItemGroup, Wrapper } from './index.style';
import TemplateMainSection from '../../shared/TemplateMainSection';
import { Pages } from '../../../shared/enums/Pages';

const TemplateStructure = ({ page, imageSource, content, showDaysAndTimes, daysAndTimesList }) => {

    return (
        <Wrapper>
            <StyledItemGroup>
                <StyledItem id={0}>
                    <TemplateMainSection
                        title={page.name}
                        imageSource={imageSource}
                        showDaysAndTimes={showDaysAndTimes}
                        daysAndTimesList={daysAndTimesList}
                    />
                </StyledItem>
                <StyledItem id={page.id}>
                    {content}
                </StyledItem>
            </StyledItemGroup>
        </Wrapper>
    );
};

TemplateStructure.propTypes = {
    page: PropTypes.object,
    imageSource: PropTypes.string,
    content: PropTypes.element,
    showDaysAndTimes: PropTypes.bool,
    daysAndTimesList: PropTypes.arrayOf(PropTypes.string)
};

TemplateStructure.defaultProps = {
    page: Pages.Home,
    imageSource: '\\images\\Sunflowers.png',
    content: <></>,
    showDaysAndTimes: false,
    daysAndTimesList: null
};

export default TemplateStructure;