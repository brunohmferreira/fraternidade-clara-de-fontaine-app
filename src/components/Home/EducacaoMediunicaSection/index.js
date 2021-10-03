import React from 'react';
import PropTypes from 'prop-types';
import { Pages } from '../../../shared/enums/Pages';
import { Author, Bold, Italic } from './index.style';
import TemplateSection from '../TemplateSection';

const EducacaoMediunicaSection = ({ handleButtonClick, rightImage }) => {

    const currentSection = Pages.EducacaoMediunica;

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
                    <p><Bold>Horário:</Bold></p>
                    <p>Quinta-feira às 19:30</p>
                </>
            }
        />
    );
};

EducacaoMediunicaSection.propTypes = {
    handleButtonClick: PropTypes.func,
    rightImage: PropTypes.bool
};

EducacaoMediunicaSection.defaultProps = {
    handleButtonClick: () => {},
    rightImage: false
};

export default EducacaoMediunicaSection;