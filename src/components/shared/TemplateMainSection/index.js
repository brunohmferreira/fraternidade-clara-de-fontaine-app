import React from 'react';
import PropTypes from 'prop-types';
import { StyledDivTitle, StyledItem, StyledBackgroundImage,
    StyledSpanTitle, StyledSpanSubtitle, StyledSpanContent } from './index.style';
import { Item } from 'semantic-ui-react';

const TemplateMainSection = ({ title, imageSource, showDaysAndTimes, daysAndTimesList }) => {

    return (
        <>
            <StyledBackgroundImage src={imageSource} />
            <StyledDivTitle>
                <Item.Group>
                    <StyledItem>
                        <StyledSpanTitle>
                            {(title || '').toUpperCase()}
                        </StyledSpanTitle>
                    </StyledItem>
                    {showDaysAndTimes && <StyledItem>
                        <StyledSpanSubtitle>
                            {daysAndTimesList.length > 1 ? 'Horários:' : 'Horário:'}
                        </StyledSpanSubtitle>
                    </StyledItem>}
                    {daysAndTimesList && daysAndTimesList.map((dayAndTime, index) => (
                        <StyledItem key={index}>
                            <StyledSpanContent>
                                {dayAndTime}
                            </StyledSpanContent>
                        </StyledItem>
                    ))}
                </Item.Group>
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