import React from 'react';
import PropTypes from 'prop-types';
import { Pages } from '../../../shared/enums/Pages';
import { Author, Bold, Italic } from './index.style';
import TemplateSection from '../TemplateSection';

const LivrariaSection = ({ rightImage }) => {

    const currentSection = Pages.Livraria;

    return (
        <TemplateSection 
            rightImage={rightImage}
            section={currentSection}
            image='\images\LivrariaImage.png'
            title={currentSection.name}
            text={
                <>
                    <p><Italic>Deus nos concede a cada dia uma página de vida nova no livro 
                        do tempo. Aquilo que colocarmos nela, corre por nossa conta.</Italic></p>
                    <p><Author>Chico Xavier</Author></p>
                    <p><Bold>Horário de funcionamento:</Bold></p>
                    <p>Segunda-feira de 20:00 às 21:00</p>
                </>
            }
        />
    );
};

LivrariaSection.propTypes = {
    rightImage: PropTypes.bool
};

LivrariaSection.defaultProps = {
    rightImage: false
};

export default LivrariaSection;