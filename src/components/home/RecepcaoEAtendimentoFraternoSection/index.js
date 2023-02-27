import React from 'react';
import PropTypes from 'prop-types';
import { Pages } from '../../../shared/enums/Pages';
import { Author, Bold, Italic } from './index.style';
import TemplateSection from '../TemplateSection';
import TemplateDaysAndTimesList from '../TemplateDaysAndTimesList';

const RecepcaoEAtendimentoFraternoSection = ({ rightImage }) => {

    const currentSection = Pages.RecepcaoEAtendimentoFraterno;

    return (
        <TemplateSection
            rightImage={rightImage}
            section={currentSection}
            image={`${process.env.PUBLIC_URL}\\images\\AtendimentoFraternoImage.png`}
            title={currentSection.name}
            text={
                <>
                    <p><Italic>Vinde a mim todos vós que estais aflitos e sobrecarregados, que eu vos aliviarei.</Italic></p>
                    <p><Author>Mateus 11:28</Author></p>
                    <p><Bold>Horários:</Bold></p>
                    <TemplateDaysAndTimesList daysAndTimesList={currentSection.daysAndTimes} />
                </>
            }
        />
    );
};

RecepcaoEAtendimentoFraternoSection.propTypes = {
    rightImage: PropTypes.bool
};

RecepcaoEAtendimentoFraternoSection.defaultProps = {
    rightImage: false
};

export default RecepcaoEAtendimentoFraternoSection;