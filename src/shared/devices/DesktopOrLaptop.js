import React from 'react';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';

const DesktopOrLaptop = ({ children }) => {
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
    return isDesktopOrLaptop ? children : null;
};

DesktopOrLaptop.propTypes = {
    children: PropTypes.element
};

DesktopOrLaptop.defaultProps = {
    children: <></>
};

export default DesktopOrLaptop;