import React from 'react';
import PropTypes from 'prop-types';
import { Pages } from '../../../shared/enums/Pages';
import { Author, Bold, Italic } from './index.style';
import TemplateSection from '../TemplateSection';

const SosPrecesSection = ({ handleButtonClick, rightImage }) => {

    const currentSection = Pages.SosPreces;

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
                    <p><Bold>Atendimento diariamente pelo telefone: </Bold></p>
                    <p><Bold>(31) 3334-9700</Bold></p>
                </>
            }
        />
    );
};

SosPrecesSection.propTypes = {
    handleButtonClick: PropTypes.func,
    rightImage: PropTypes.bool
};

SosPrecesSection.defaultProps = {
    handleButtonClick: () => {},
    rightImage: false
};

export default SosPrecesSection;