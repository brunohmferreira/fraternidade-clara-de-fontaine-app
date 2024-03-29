import React from 'react';
import PropTypes from 'prop-types';
import { Pages } from '../../../shared/enums/Pages';
import { Author, Bold, Italic } from './index.style';
import TemplateSection from '../TemplateSection';
import TemplateDaysAndTimesList from '../TemplateDaysAndTimesList';

const CampanhaDoQuiloEDoacaoDeCestasBasicasSection = ({ rightImage }) => {

    const currentSection = Pages.CampanhaDoQuiloEDoacaoDeCestasBasicas;

    return (
        <TemplateSection
            rightImage={rightImage}
            section={currentSection}
            image={`${process.env.PUBLIC_URL}\\images\\CampanhaDoQuiloImage.png`}
            title={currentSection.name}
            text={
                <>
                    <p><Italic>O Rei responderá: &quot;Digo a verdade: O que vocês fizerem a algum dos
                        meus menores irmãos, a mim o fizeram&quot;.</Italic></p>
                    <p><Author>Mateus 25:40</Author></p>
                    <p><Bold>Horários:</Bold></p>
                    <TemplateDaysAndTimesList daysAndTimesList={currentSection.daysAndTimes} />
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