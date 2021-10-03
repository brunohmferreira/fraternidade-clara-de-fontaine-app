import React from 'react';
import PropTypes from 'prop-types';
import { Pages } from '../../../shared/enums/Pages';
import { Author, Bold, Italic } from './index.style';
import TemplateSection from '../TemplateSection';

const DistribuicaoDeSopaELancheSection = ({ handleButtonClick, rightImage }) => {

    const currentSection = Pages.DistribuicaoDeSopaELanche;

    return (
        <TemplateSection 
            rightImage={rightImage}
            handleButtonClick={handleButtonClick} 
            section={currentSection}
            image=''
            title={currentSection.name}
            text={
                <>
                    <p><Italic>.</Italic></p>
                    <p><Author></Author></p>
                    <p><Bold>Horário: </Bold></p>
                    <p>Domingo</p>
                </>
            }
        />
    );
};

DistribuicaoDeSopaELancheSection.propTypes = {
    handleButtonClick: PropTypes.func,
    rightImage: PropTypes.bool
};

DistribuicaoDeSopaELancheSection.defaultProps = {
    handleButtonClick: () => {},
    rightImage: false
};

export default DistribuicaoDeSopaELancheSection;