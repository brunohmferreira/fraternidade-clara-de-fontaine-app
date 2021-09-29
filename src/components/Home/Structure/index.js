import React from 'react';
import PropTypes from 'prop-types';
import { StyledItem, StyledItemGroup, Wrapper } from './index.style';
import MainSection from '../MainSection';
import TrabalhoReligiosoSection from '../TrabalhoReligiosoSection';

const Structure = ({ handleChangePage }) => {

    return (
        <Wrapper>
            <StyledItemGroup>
                <StyledItem>
                    <MainSection handleButtonClick={handleChangePage} />
                </StyledItem>
                <StyledItem>
                    <TrabalhoReligiosoSection handleButtonClick={handleChangePage} />
                </StyledItem>
            </StyledItemGroup>
            
        </Wrapper>
    );
};

Structure.propTypes = {
    handleChangePage: PropTypes.func
};

Structure.defaultProps = {
    handleChangePage: () => {}
};

export default Structure;