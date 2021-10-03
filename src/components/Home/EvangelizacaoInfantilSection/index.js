import React from 'react';
import PropTypes from 'prop-types';
import { Pages } from '../../../shared/enums/Pages';
import { Author, Bold, Italic } from './index.style';
import TemplateSection from '../TemplateSection';

const EvangelizacaoInfantilSection = ({ handleButtonClick, rightImage }) => {

    const currentSection = Pages.EvangelizacaoInfantil;

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
                    <p>Segunda-feira às 20:00</p>
                </>
            }
        />
    );
};

EvangelizacaoInfantilSection.propTypes = {
    handleButtonClick: PropTypes.func,
    rightImage: PropTypes.bool
};

EvangelizacaoInfantilSection.defaultProps = {
    handleButtonClick: () => {},
    rightImage: false
};

export default EvangelizacaoInfantilSection;