import React from 'react';
import PropTypes from 'prop-types';
import { Pages } from '../../../shared/enums/Pages';
import { Author, Bold, Italic } from './index.style';
import TemplateSection from '../TemplateSection';
import TemplateDaysAndTimesList from '../TemplateDaysAndTimesList';

const DistribuicaoDeSopaELancheSection = ({ rightImage }) => {

    const currentSection = Pages.DistribuicaoDeSopaELanche;

    return (
        <TemplateSection 
            rightImage={rightImage}
            section={currentSection}
            image=''
            title={currentSection.name}
            text={
                <>
                    <p><Italic>.</Italic></p>
                    <p><Author></Author></p>
                    <p><Bold>Horário: </Bold></p>
                    <TemplateDaysAndTimesList daysAndTimesList={currentSection.daysAndTimes} />
                </>
            }
        />
    );
};

DistribuicaoDeSopaELancheSection.propTypes = {
    rightImage: PropTypes.bool
};

DistribuicaoDeSopaELancheSection.defaultProps = {
    rightImage: false
};

export default DistribuicaoDeSopaELancheSection;