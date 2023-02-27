import React from 'react';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';


const TabletOrMobile = ({ children }) => {
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
    return isTabletOrMobile ? children : null;
};

TabletOrMobile.propTypes = {
    children: PropTypes.element
};

TabletOrMobile.defaultProps = {
    children: <></>
};

export default TabletOrMobile;