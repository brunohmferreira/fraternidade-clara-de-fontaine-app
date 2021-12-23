import React from 'react';
import PropTypes from 'prop-types';
import { StyledDivTitle, StyledDivRow, StyledBackgroundImage,
    StyledSpanTitle, StyledSpanSubtitle, StyledSpanContent } from './index.style';

const TemplateMainSection = ({ title, imageSource, showDaysAndTimes, daysAndTimesList }) => {

    return (
        <>
            <StyledBackgroundImage src={imageSource} />
            <StyledDivTitle>
                <StyledDivRow row={1}>
                    <StyledSpanTitle>
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
                        <StyledSpanContent>
                            {dayAndTime}
                        </StyledSpanContent>
                    </StyledDivRow>
                ))}
            </StyledDivTitle>
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