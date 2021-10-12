import React from 'react';
import { Wrapper, StyledSpan, Bold } from './index.style';

const ContentSection = () => {

    return (
        <Wrapper>
            <StyledSpan>
                <p> São distribuídas mensalmente cestas básicas com alimentos não
                    perecíveis às famílias cadastradas em nossa Casa. Provém aquelas
                    das doações obtidas nas Campanhas do Quilo promovidas por
                    tarefeiros de Instituição.  </p>
                <p> Em 2015 foram distribuídas 720 cestas. </p>
                <p><Bold>A SUA AJUDA FAZ A DIFERENÇA PARA OS NOSSOS ASSISTIDOS. COLABORE!</Bold></p>
            </StyledSpan>
        </Wrapper>
    );
};

export default ContentSection;