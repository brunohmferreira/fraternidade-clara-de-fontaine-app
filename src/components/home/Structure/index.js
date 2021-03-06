import React from 'react';
import { StyledDiv, Wrapper } from './index.style';
import MainSection from '../MainSection';
import TrabalhoReligiosoSection from '../TrabalhoReligiosoSection';
import ReuniaoPublicaSection from '../ReuniaoPublicaSection';
import RecepcaoEAtendimentoFraternoSection from '../RecepcaoEAtendimentoFraternoSection';
import SosPrecesSection from '../SosPrecesSection';
import ProgramaRenascerSection from '../ProgramaRenascerSection';
import EvangelizacaoInfantilSection from '../EvangelizacaoInfantilSection';
import CampanhaDoQuiloEDoacaoDeCestasBasicasSection from '../CampanhaDoQuiloEDoacaoDeCestasBasicasSection';
import EducacaoMediunicaSection from '../EducacaoMediunicaSection';
import LivrariaSection from '../LivrariaSection';
import { Pages } from '../../../shared/enums/Pages';

const Structure = () => {

    const sections = [
        {
            id: 0,
            content: <MainSection />
        },
        {
            id: Pages.TrabalhoReligioso.id,
            content: <TrabalhoReligiosoSection />
        },
        {
            id: Pages.ReuniaoPublica.id,
            content: <ReuniaoPublicaSection rightImage/>
        },
        {
            id: Pages.RecepcaoEAtendimentoFraterno.id,
            content: <RecepcaoEAtendimentoFraternoSection />
        },
        {
            id: Pages.SosPreces.id,
            content: <SosPrecesSection rightImage />
        },
        {
            id: Pages.ProgramaRenascer.id,
            content: <ProgramaRenascerSection />
        },
        {
            id: Pages.EvangelizacaoInfantil.id,
            content: <EvangelizacaoInfantilSection rightImage />
        },
        {
            id: Pages.CampanhaDoQuiloEDoacaoDeCestasBasicas.id,
            content: <CampanhaDoQuiloEDoacaoDeCestasBasicasSection />
        },
        {
            id: Pages.EducacaoMediunica.id,
            content: <EducacaoMediunicaSection rightImage />
        },
        {
            id: Pages.Livraria.id,
            content: <LivrariaSection />
        }
    ];

    return (
        <Wrapper>
            {sections.map((section) => {
                return (
                    <StyledDiv key={section.id}>
                        {section.content}
                    </StyledDiv>
                );
            })}
        </Wrapper>
    );
};

export default Structure;