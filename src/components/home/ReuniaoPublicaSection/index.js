import React from 'react';
import PropTypes from 'prop-types';
import { Pages } from '../../../shared/enums/Pages';
import { Author, Bold, Italic } from './index.style';
import TemplateSection from '../TemplateSection';
import TemplateDaysAndTimesList from '../TemplateDaysAndTimesList';

const ReuniaoPublicaSection = ({ rightImage }) => {

    const currentSection = Pages.ReuniaoPublica;

    return (
        <TemplateSection
            rightImage={rightImage}
            section={currentSection}
            image='\images\ReuniaoPublicaImage.png'
            title={currentSection.name}
            text={
                <>
                    <p><Italic>Ninguém cruza nosso caminho por acaso e nós não entramos na vida de alguém sem
                        nenhuma razão.</Italic></p>
                    <p><Author>Chico Xavier</Author></p>
                    <p><Bold>Horário:</Bold></p>
                    <TemplateDaysAndTimesList daysAndTimesList={currentSection.daysAndTimes} />
                </>
            }
        />
    );
};

ReuniaoPublicaSection.propTypes = {
    rightImage: PropTypes.bool
};

ReuniaoPublicaSection.defaultProps = {
    rightImage: false
};

export default ReuniaoPublicaSection;