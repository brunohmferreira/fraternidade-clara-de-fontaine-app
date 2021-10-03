import React from 'react';
import PropTypes from 'prop-types';
import { Pages } from '../../../shared/enums/Pages';
import { Author, Bold, Italic } from './index.style';
import TemplateSection from '../TemplateSection';

const ReuniaoPublicaSection = ({ handleButtonClick, rightImage }) => {

    const currentSection = Pages.ReuniaoPublica;

    return (
        <TemplateSection 
            rightImage={rightImage}
            handleButtonClick={handleButtonClick} 
            section={currentSection}
            image='\images\JesusMeeting.png'
            title={currentSection.name}
            text={
                <>
                    <p><Italic>Ninguém cruza nosso caminho por acaso e nós não entramos na vida de alguém sem
                        nenhuma razão.</Italic></p>
                    <p><Author>Chico Xavier</Author></p>
                    <p><Bold>Horário:</Bold></p>
                    <p>Segunda-feira às 20:00</p>
                </>
            }
        />
    );
};

ReuniaoPublicaSection.propTypes = {
    handleButtonClick: PropTypes.func,
    rightImage: PropTypes.bool
};

ReuniaoPublicaSection.defaultProps = {
    handleButtonClick: () => {},
    rightImage: false
};

export default ReuniaoPublicaSection;