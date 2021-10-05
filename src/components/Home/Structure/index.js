import React from 'react';
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
import { Pages } from '../../../shared/enums/Pages';

const Structure = () => {

    return (
        <Wrapper>
            <StyledItemGroup>
                <StyledItem id={0}>
                    <MainSection />
                </StyledItem>
                <StyledItem id={Pages.TrabalhoReligioso.id}>
                    <TrabalhoReligiosoSection />
                </StyledItem>
                <StyledItem id={Pages.ReuniaoPublica.id}>
                    <ReuniaoPublicaSection rightImage/>
                </StyledItem>
                <StyledItem id={Pages.RecepcaoEAtendimentoFraterno.id}>
                    <RecepcaoEAtendimentoFraternoSection />
                </StyledItem>
                <StyledItem id={Pages.SosPreces.id}>
                    <SosPrecesSection rightImage />
                </StyledItem>
                <StyledItem id={Pages.ProgramaRenascer.id}>
                    <ProgramaRenascerSection />
                </StyledItem>
                <StyledItem id={Pages.EvangelizacaoInfantil.id}>
                    <EvangelizacaoInfantilSection rightImage />
                </StyledItem>
                <StyledItem id={Pages.CampanhaDoQuiloEDoacaoDeCestasBasicas.id}>
                    <CampanhaDoQuiloEDoacaoDeCestasBasicasSection />
                </StyledItem>
                <StyledItem id={Pages.DistribuicaoDeSopaELanche.id}>
                    <DistribuicaoDeSopaELancheSection rightImage />
                </StyledItem>
                <StyledItem id={Pages.EducacaoMediunica.id}>
                    <EducacaoMediunicaSection />
                </StyledItem>
                <StyledItem id={Pages.Livraria.id}>
                    <LivrariaSection rightImage />
                </StyledItem>
            </StyledItemGroup>
            
        </Wrapper>
    );
};

export default Structure;