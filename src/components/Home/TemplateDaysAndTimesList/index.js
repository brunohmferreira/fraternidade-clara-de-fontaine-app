import React from 'react';
import PropTypes from 'prop-types';
import { Bold } from './index.style';

const TemplateDaysAndTimesList = ({ daysAndTimesList, boldText }) => {

    return (
        <>
            {daysAndTimesList && daysAndTimesList.map((dayAndTime, index) => (
                boldText ? (
                    <p key={index}><Bold>{dayAndTime}</Bold></p>
                ) : (
                    <p key={index}>{dayAndTime}</p>
                )
            ))}
        </>
    );
};

TemplateDaysAndTimesList.propTypes = {
    daysAndTimesList: PropTypes.arrayOf(PropTypes.string),
    boldText: PropTypes.bool
};

TemplateDaysAndTimesList.defaultProps = {
    daysAndTimesList: null,
    boldText: false
};

export default TemplateDaysAndTimesList;