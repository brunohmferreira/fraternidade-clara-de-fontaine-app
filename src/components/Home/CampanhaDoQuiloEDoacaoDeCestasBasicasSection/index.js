import React from 'react';
import PropTypes from 'prop-types';
import { Pages } from '../../../shared/enums/Pages';
import { Author, Bold, Italic } from './index.style';
import TemplateSection from '../TemplateSection';

const CampanhaDoQuiloEDoacaoDeCestasBasicasSection = ({ rightImage }) => {

    const currentSection = Pages.CampanhaDoQuiloEDoacaoDeCestasBasicas;

    return (
        <TemplateSection 
            rightImage={rightImage}
            section={currentSection}
            image='\images\CampanhaDoQuiloImage.png'
            title={currentSection.name}
            text={
                <>
                    <p><Italic>O Rei responderá: 'Digo a verdade: O que vocês fizerem a algum dos meus menores irmãos, a mim o fizeram.</Italic></p>
                    <p><Author>Mateus 25:40</Author></p>
                    <p><Bold>Horários:</Bold></p>
                    <p>Sábado às 8:45</p>
                    <p>Domingo às 8:45</p>
                </>
            }
        />
    );
};

CampanhaDoQuiloEDoacaoDeCestasBasicasSection.propTypes = {
    rightImage: PropTypes.bool
};

CampanhaDoQuiloEDoacaoDeCestasBasicasSection.defaultProps = {
    rightImage: false
};

export default CampanhaDoQuiloEDoacaoDeCestasBasicasSection;