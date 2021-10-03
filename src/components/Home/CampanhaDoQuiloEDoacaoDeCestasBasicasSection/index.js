import React from 'react';
import PropTypes from 'prop-types';
import { Pages } from '../../../shared/enums/Pages';
import { Author, Bold, Italic } from './index.style';
import TemplateSection from '../TemplateSection';

const CampanhaDoQuiloEDoacaoDeCestasBasicasSection = ({ handleButtonClick, rightImage }) => {

    const currentSection = Pages.CampanhaDoQuiloEDoacaoDeCestasBasicas;

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
                    <p>Sábado às 8:45</p>
                    <p>Domingo às 8:45</p>
                </>
            }
        />
    );
};

CampanhaDoQuiloEDoacaoDeCestasBasicasSection.propTypes = {
    handleButtonClick: PropTypes.func,
    rightImage: PropTypes.bool
};

CampanhaDoQuiloEDoacaoDeCestasBasicasSection.defaultProps = {
    handleButtonClick: () => {},
    rightImage: false
};

export default CampanhaDoQuiloEDoacaoDeCestasBasicasSection;