import React from 'react';
import PropTypes from 'prop-types';
import { Pages } from '../../../shared/enums/Pages';
import { Author, Italic, Bold } from './index.style';
import TemplateSection from '../TemplateSection';

const ProgramaRenascerSection = ({ handleButtonClick, rightImage }) => {

    const currentSection = Pages.ProgramaRenascer;

    return (
        <TemplateSection 
            rightImage={rightImage}
            handleButtonClick={handleButtonClick} 
            section={currentSection}
            image='\images\ProgramaRenascerLogo.png'
            title={currentSection.name}
            text={
                <>
                    <p><Italic>Ame a vida, não as drogas!</Italic></p>
                    <p><Author>Luiz Antônio - espírito</Author></p>
                    <p><Bold>Horário:</Bold></p>
                    <p>Quinta-feira às 20:00</p>
                </>
            }
        />
    );
};

ProgramaRenascerSection.propTypes = {
    handleButtonClick: PropTypes.func,
    rightImage: PropTypes.bool
};

ProgramaRenascerSection.defaultProps = {
    handleButtonClick: () => {},
    rightImage: false
};

export default ProgramaRenascerSection;