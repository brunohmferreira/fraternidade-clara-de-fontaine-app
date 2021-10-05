import React from 'react';
import PropTypes from 'prop-types';
import { Pages } from '../../../shared/enums/Pages';
import { Author, Bold, Italic } from './index.style';
import TemplateSection from '../TemplateSection';

const EvangelizacaoInfantilSection = ({ rightImage }) => {

    const currentSection = Pages.EvangelizacaoInfantil;

    return (
        <TemplateSection 
            rightImage={rightImage}
            section={currentSection}
            image='\images\EvangelizacaoInfantilImage.png'
            title={currentSection.name}
            text={
                <>
                    <p><Italic>Deixem vir a mim as crianças e não as impeçam; pois o Reino dos céus pertence aos que são semelhantes a elas.</Italic></p>
                    <p><Author>Mateus 19:14</Author></p>
                    <p><Bold>Horário:</Bold></p>
                    <p>Segunda-feira às 20:00</p>
                </>
            }
        />
    );
};

EvangelizacaoInfantilSection.propTypes = {
    rightImage: PropTypes.bool
};

EvangelizacaoInfantilSection.defaultProps = {
    rightImage: false
};

export default EvangelizacaoInfantilSection;