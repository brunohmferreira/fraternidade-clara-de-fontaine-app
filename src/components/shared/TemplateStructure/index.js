import React from 'react';
import PropTypes from 'prop-types';
import { StyledDivMainRow, StyledDivContentRow, Wrapper } from './index.style';
import TemplateMainSection from '../../shared/TemplateMainSection';
import { Pages } from '../../../shared/enums/Pages';
import DesktopOrLaptop from '../../../shared/devices/DesktopOrLaptop';
import TabletOrMobile from '../../../shared/devices/TabletOrMobile';

const TemplateStructure = ({ page, imageSource, content, showDaysAndTimes, daysAndTimesList }) => {

    return (
        <Wrapper>
            <StyledDivMainRow key={0}>
                <DesktopOrLaptop>
                    <TemplateMainSection
                        title={page.name}
                        imageSource={imageSource}
                        showDaysAndTimes={showDaysAndTimes}
                        daysAndTimesList={daysAndTimesList}
                    />
                </DesktopOrLaptop>
                <TabletOrMobile>
                    <TemplateMainSection
                        title={page.name}
                        imageSource={`${process.env.PUBLIC_URL}\\images\\SunflowersBackground.png`}
                        showDaysAndTimes={showDaysAndTimes}
                        daysAndTimesList={daysAndTimesList}
                    />
                </TabletOrMobile>
            </StyledDivMainRow>
            <StyledDivContentRow key={page.id}>
                {content}
            </StyledDivContentRow>
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
    imageSource: `${process.env.PUBLIC_URL}\\images\\Sunflowers.png`,
    content: <></>,
    showDaysAndTimes: false,
    daysAndTimesList: null
};

export default TemplateStructure;