import React from 'react';
import PropTypes from 'prop-types';
import { StyledCarousel } from './index.style';

const Carousel = ({ data }) => {

    const carouselTime = 5000;

    return (
        <StyledCarousel
            data={data}
            time={carouselTime}
            width='100%'
            height='min-content'
            radius='8px'
            slideNumber
            slideNumberStyle={{ fontSize: '16px' }}
            automatic
            dots
            slideBackgroundColor='var(--color-white)'
            thumbnails
            thumbnailWidth='48px'
        />
    );
};

Carousel.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object)
};

Carousel.defaultProps = {
    data: []
};

export default Carousel;