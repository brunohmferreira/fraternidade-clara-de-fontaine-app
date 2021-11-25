import React from 'react';
import PropTypes from 'prop-types';
import { Pages } from '../../../shared/enums/Pages';
import { Bold } from './index.style';
import TemplateSection from '../TemplateSection';

const TrabalhoReligiosoSection = ({ rightImage }) => {

    const availableServices = Object.values(Pages).map(page => page.name);
    availableServices.shift();

    return (
        <TemplateSection
            rightImage={rightImage}
            section={Pages.TrabalhoReligioso}
            image='\images\Facade.png'
            text={
                <>
                    <p> A <Bold>Fraternidade Espírita Clara de Fontaine</Bold>, fundada em 02 de setembro de 1994,
                        é uma organização religiosa, com atividades nas áreas assistencial, cultural, beneficente e
                        filantrópica, sem fins lucrativos, de prazo indeterminado e tem domicílio, sede e foro na cidade
                        de Belo Horizonte, estado de Minas Gerais, no endereço da Rua Três Pontas, nº 2.055, bairro
                        Padre Eustáquio.</p>
                    <p> A casa oferece, de forma inteiramente gratuita, os seguintes serviços: {availableServices.join('; ')}.</p>
                </>
            }
        />
    );
};

TrabalhoReligiosoSection.propTypes = {
    rightImage: PropTypes.bool
};

TrabalhoReligiosoSection.defaultProps = {
    rightImage: false
};

export default TrabalhoReligiosoSection;