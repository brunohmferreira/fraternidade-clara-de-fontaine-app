import React from 'react';
import PropTypes from 'prop-types';
import { Pages } from '../../../shared/enums/Pages';
import { Author, Bold, Italic } from './index.style';
import TemplateSection from '../TemplateSection';

const RecepcaoEAtendimentoFraternoSection = ({ handleButtonClick, rightImage }) => {

    const currentSection = Pages.RecepcaoEAtendimentoFraterno;

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
                    <p><Bold>Horários:</Bold></p>
                    <p>Segunda-feira às 20:00</p>
                    <p>Quarta-feira às 20:00</p>
                </>
            }
        />
    );
};

RecepcaoEAtendimentoFraternoSection.propTypes = {
    handleButtonClick: PropTypes.func,
    rightImage: PropTypes.bool
};

RecepcaoEAtendimentoFraternoSection.defaultProps = {
    handleButtonClick: () => {},
    rightImage: false
};

export default RecepcaoEAtendimentoFraternoSection;