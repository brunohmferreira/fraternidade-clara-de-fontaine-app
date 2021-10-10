import React from 'react';
import { Wrapper, StyledSpan,Bold } from './index.style';

const ContentSection = () => {

    return (
        <Wrapper>
            <StyledSpan>
                <p> Sendo nossa instituição uma Casa Espírita, entre seus objetivos 
                    não poderia faltar este trabalho de amparo àqueles que possuem 
                    esta característica natural mas muitas vezes desconhecidas por 
                    aqueles mesmos que a possuem, a mediunidade.  </p>
                <p> Esta tarefa tem por fim o equilíbrio, conhecimento de sua faculdade 
                    e preparo para desenvolver a caridade própria de sua utilização. 
                    Tem por base os ensinamentos do educador Allan Kardec e no evangelho 
                    de Jesus. </p>
                <p> Tem por lema o <Bold>"dai e graça o que de graça recebestes"</Bold>. </p> 
            </StyledSpan>
        </Wrapper>
    );
};

export default ContentSection;