import React from 'react';
import PropTypes from 'prop-types';
import { Pages } from '../../../shared/enums/Pages';
import { Author, Italic } from './index.style';
import TemplateSection from '../TemplateSection';
import TemplateDaysAndTimesList from '../TemplateDaysAndTimesList';

const SosPrecesSection = ({ rightImage }) => {

    const currentSection = Pages.SosPreces;

    return (
        <TemplateSection 
            rightImage={rightImage}
            section={currentSection}
            image='\images\SosPrecesImage.png'
            title={currentSection.name}
            text={
                <>
                    <p><Italic>- Bem-aventurados os que choram, pois que serão consolados.</Italic></p>
                    <p><Italic>– Bem-aventurados os famintos e os sequiosos de justiça, pois que serão 
                        saciados.</Italic></p>
                    <p><Italic>– Bem-aventurados os que sofrem perseguição pela justiça, pois que é deles 
                        o reino dos céus.</Italic></p>
                    <p><Author>Mateus, 5:4, 6 e 10</Author></p>
                    <TemplateDaysAndTimesList daysAndTimesList={currentSection.daysAndTimes} boldText />
                </>
            }
        />
    );
};

SosPrecesSection.propTypes = {
    rightImage: PropTypes.bool
};

SosPrecesSection.defaultProps = {
    rightImage: false
};

export default SosPrecesSection;