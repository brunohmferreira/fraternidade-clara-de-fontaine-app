import React from 'react';
import PropTypes from 'prop-types';
import { StyledDivTitle, StyledDivRow, StyledBackgroundImage,
    StyledSpanTitle, StyledSpanSubtitle, StyledSpanContent } from './index.style';
import DesktopOrLaptop from '../../../shared/devices/DesktopOrLaptop';
import TabletOrMobile from '../../../shared/devices/TabletOrMobile';

const TemplateMainSection = ({ title, imageSource, showDaysAndTimes, daysAndTimesList }) => {

    return (
        <>
            <DesktopOrLaptop>
                <StyledBackgroundImage src={imageSource} />
                <StyledDivTitle>
                    <StyledDivRow row={1}>
                        <StyledSpanTitle size='48px'>
                            {(title || '').toUpperCase()}
                        </StyledSpanTitle>
                    </StyledDivRow>
                    <StyledDivRow row={2} margin='8px'>
                        {showDaysAndTimes &&
                            <StyledSpanSubtitle>
                                {daysAndTimesList.length > 1 ? 'Horários:' : 'Horário:'}
                            </StyledSpanSubtitle>
                        }
                    </StyledDivRow>
                    {daysAndTimesList && daysAndTimesList.map((dayAndTime, index) => (
                        <StyledDivRow row={index + 3} key={index} margin='8px'>
                            <StyledSpanContent size='22px'>
                                {dayAndTime}
                            </StyledSpanContent>
                        </StyledDivRow>
                    ))}
                </StyledDivTitle>
            </DesktopOrLaptop>
            <TabletOrMobile>
                <StyledBackgroundImage src={imageSource} />
                <StyledDivTitle>
                    <StyledDivRow row={1}>
                        <StyledSpanTitle size='20px'>
                            {(title || '').toUpperCase()}
                        </StyledSpanTitle>
                    </StyledDivRow>
                    {daysAndTimesList && daysAndTimesList.map((dayAndTime, index) => (
                        <StyledDivRow row={index + 3} key={index} margin='2px'>
                            <StyledSpanContent size='16px'>
                                {dayAndTime}
                            </StyledSpanContent>
                        </StyledDivRow>
                    ))}
                </StyledDivTitle>
            </TabletOrMobile>
        </>
    );
};

TemplateMainSection.propTypes = {
    title: PropTypes.string,
    imageSource: PropTypes.string,
    showDaysAndTimes: PropTypes.bool,
    daysAndTimesList: PropTypes.arrayOf(PropTypes.string)
};

TemplateMainSection.defaultProps = {
    title: '',
    imageSource: '',
    showDaysAndTimes: false,
    daysAndTimesList: null
};

export default TemplateMainSection;