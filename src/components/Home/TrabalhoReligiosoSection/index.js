import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './index.style';

const TrabalhoReligiosoSection = ({ handleButtonClick }) => {

    return (
        <Wrapper>
            <h1>Bruno</h1>
        </Wrapper>
    );
};

TrabalhoReligiosoSection.propTypes = {
    handleButtonClick: PropTypes.func
};

TrabalhoReligiosoSection.defaultProps = {
    handleButtonClick: () => {}
};

export default TrabalhoReligiosoSection;