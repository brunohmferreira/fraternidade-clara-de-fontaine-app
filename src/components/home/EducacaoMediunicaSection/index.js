import React from 'react';
import PropTypes from 'prop-types';
import { Pages } from '../../../shared/enums/Pages';
import { Author, Bold, Italic } from './index.style';
import TemplateSection from '../TemplateSection';
import TemplateDaysAndTimesList from '../TemplateDaysAndTimesList';

const EducacaoMediunicaSection = ({ rightImage }) => {

    const currentSection = Pages.EducacaoMediunica;

    return (
        <TemplateSection
            rightImage={rightImage}
            section={currentSection}
            image={`${process.env.PUBLIC_URL}\\images\\EducacaoMediunicaImage.png`}
            title={currentSection.name}
            text={
                <>
                    <p><Italic>A mediunidade é uma coisa sagrada, que deve ser praticada
                        santamente religiosamente.</Italic></p>
                    <p><Author>Allan Kardec</Author></p>
                    <p><Bold>Horário:</Bold></p>
                    <TemplateDaysAndTimesList daysAndTimesList={currentSection.daysAndTimes} />
                </>
            }
        />
    );
};

EducacaoMediunicaSection.propTypes = {
    rightImage: PropTypes.bool
};

EducacaoMediunicaSection.defaultProps = {
    rightImage: false
};

export default EducacaoMediunicaSection;