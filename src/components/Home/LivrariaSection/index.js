import React from 'react';
import PropTypes from 'prop-types';
import { Pages } from '../../../shared/enums/Pages';
import { Author, Bold, Italic } from './index.style';
import TemplateSection from '../TemplateSection';

const LivrariaSection = ({ handleButtonClick, rightImage }) => {

    const currentSection = Pages.Livraria;

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
                    <p><Bold>Horário de funcionamento:</Bold></p>
                    <p>Segunda-feira de 20:00 às 21:00</p>
                </>
            }
        />
    );
};

LivrariaSection.propTypes = {
    handleButtonClick: PropTypes.func,
    rightImage: PropTypes.bool
};

LivrariaSection.defaultProps = {
    handleButtonClick: () => {},
    rightImage: false
};

export default LivrariaSection;