import React from 'react';
import PropTypes from 'prop-types';
import { Pages } from '../../../shared/enums/Pages';
import { Bold } from './index.style';
import TemplateSection from '../TemplateSection';

const TrabalhoReligiosoSection = ({ handleButtonClick }) => {

    const availableServices = Object.values(Pages).map(page => page.name); 
    availableServices.shift();

    return (
        <TemplateSection 
            handleButtonClick={handleButtonClick} 
            section={Pages.TrabalhoReligioso}
            image='\images\Facade.png'
            text={
                <>
                    <p>A <Bold>Fraternidade Espírita Clara de Fontaine</Bold> atua na educação religiosa, 
                    ensinando o Evangelho em conjunto com a preparação do indivíduo para o enfrentamento 
                    das dificuldades da vida, de forma que ele se sinta capaz e motivado a reverter 
                    qualquer processo que entenda como negativo, fortalecendo-o contra pensamentos de 
                    autodestruição.</p>
                    <p>A casa oferece, de forma inteiramente gratuita, os seguintes serviços: {availableServices.join('; ')}.</p>
                </>
            }
        />
    );
};

TrabalhoReligiosoSection.propTypes = {
    handleButtonClick: PropTypes.func
};

TrabalhoReligiosoSection.defaultProps = {
    handleButtonClick: () => {}
};

export default TrabalhoReligiosoSection;