import React from 'react';
import { Wrapper, StyledSpan } from './index.style';

const ContentSection = () => {

    return (
        <Wrapper>
            <StyledSpan>
                <p> É um trabalho realizado no último domingo de cada mês,
                    onde são distribuídos lanche ou sopa, dependendo da
                    estação do ano, aos moradores de rua da capital. São
                    também distribuídas roupas usadas.  </p>
                <p> Em 2015 foram distribuídos em torno de 1.500 porções
                    de sopa/lanches. </p>
            </StyledSpan>
        </Wrapper>
    );
};

export default ContentSection;