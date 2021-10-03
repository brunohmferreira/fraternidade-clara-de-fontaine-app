import React from 'react';
import PropTypes from 'prop-types';
import { StyledItem, StyledItemGroup, Wrapper } from './index.style';
import MainSection from '../MainSection';
import TrabalhoReligiosoSection from '../TrabalhoReligiosoSection';
import ReuniaoPublicaSection from '../ReuniaoPublicaSection';
import RecepcaoEAtendimentoFraternoSection from '../RecepcaoEAtendimentoFraternoSection';
import SosPrecesSection from '../SosPrecesSection';
import ProgramaRenascerSection from '../ProgramaRenascerSection';
import EvangelizacaoInfantilSection from '../EvangelizacaoInfantilSection';
import CampanhaDoQuiloEDoacaoDeCestasBasicasSection from '../CampanhaDoQuiloEDoacaoDeCestasBasicasSection';
import DistribuicaoDeSopaELancheSection from '../DistribuicaoDeSopaELancheSection';
import EducacaoMediunicaSection from '../EducacaoMediunicaSection';
import LivrariaSection from '../LivrariaSection';

const Structure = ({ handleChangePage }) => {

    return (
        <Wrapper>
            <StyledItemGroup>
                <StyledItem id={0}>
                    <MainSection handleButtonClick={handleChangePage} />
                </StyledItem>
                <StyledItem id={1}>
                    <TrabalhoReligiosoSection handleButtonClick={handleChangePage} />
                </StyledItem>
                <StyledItem id={2}>
                    <ReuniaoPublicaSection handleButtonClick={handleChangePage} rightImage/>
                </StyledItem>
                <StyledItem id={3}>
                    <RecepcaoEAtendimentoFraternoSection handleButtonClick={handleChangePage} />
                </StyledItem>
                <StyledItem id={4}>
                    <SosPrecesSection handleButtonClick={handleChangePage} rightImage />
                </StyledItem>
                <StyledItem id={5}>
                    <ProgramaRenascerSection handleButtonClick={handleChangePage} />
                </StyledItem>
                <StyledItem id={6}>
                    <EvangelizacaoInfantilSection handleButtonClick={handleChangePage} rightImage />
                </StyledItem>
                <StyledItem id={7}>
                    <CampanhaDoQuiloEDoacaoDeCestasBasicasSection handleButtonClick={handleChangePage} />
                </StyledItem>
                <StyledItem id={8}>
                    <DistribuicaoDeSopaELancheSection handleButtonClick={handleChangePage} rightImage />
                </StyledItem>
                <StyledItem id={9}>
                    <EducacaoMediunicaSection handleButtonClick={handleChangePage} />
                </StyledItem>
                <StyledItem id={10}>
                    <LivrariaSection handleButtonClick={handleChangePage} rightImage />
                </StyledItem>
            </StyledItemGroup>
            
        </Wrapper>
    );
};

Structure.propTypes = {
    handleChangePage: PropTypes.func
};

Structure.defaultProps = {
    handleChangePage: () => {}
};

export default Structure;