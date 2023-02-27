import React from 'react';
import DesktopOrLaptop from '../../../shared/devices/DesktopOrLaptop';
import TabletOrMobile from '../../../shared/devices/TabletOrMobile';
import Carousel from '../../shared/Carousel';
import { Wrapper, StyledSpan, StyledDiv, StyledSpanTitle, StyledSpanText, StyledDivContent, Bold, Italic } from './index.style';

const ContentSection = () => {

    const images = [
        {
            image: `${process.env.PUBLIC_URL}\\images\\LivrariaImage.png`,
            caption: ''
        },
        {
            image: `${process.env.PUBLIC_URL}\\images\\LivrariaImage1.png`,
            caption: ''
        },
        {
            image: `${process.env.PUBLIC_URL}\\images\\LivrariaImage2.png`,
            caption: ''
        },
        {
            image: `${process.env.PUBLIC_URL}\\images\\LivrariaImage3.png`,
            caption: ''
        }
    ];

    return (
        <>
            <DesktopOrLaptop>
                <Wrapper desktop>
                    <StyledSpan>
                        <p> &quot;É muito bom ler...O Espiritismo está fundamentado na razão (no raciocínio),
                            na lógica, no equilíbrio e no bom senso, sobretudo na razão, de tal mode
                            que a leitura e, de preferência, a leitura constante, intensa, constitui
                            grande contributo ao seu entendimento, à sua boa compreensão&quot;. <Italic>(Artigo
                            &quot;A importância da leitura de Antônio Moris Cury&quot;)</Italic> </p>
                        <p> &quot;O Livro Espírita liberta, consola, ensina, nos faz parar para refletir sobre
                            o mais simples acontecimento da nossa vida, levando-nos à verdadeira compreensão
                            e a possível modificação. Ler é ser motivado à observação de aspectos da vida
                            que antes nos passavam despercebidos&quot;.<Italic> (Artigo &quot;Livraria – A importância
                            da leitura&quot;)</Italic> </p>
                        <p> &quot;A leitura abre a mente, impulsiona os sonhos e alimenta a alma&quot;. <Italic>(Érico Teixeira)</Italic> </p>
                        <p> Com base nisso, se faz a livraria da Fraternidade Espírita Clara de Fonataine.
                            Acreditamos que a leitura é de extrema importância para o amadurecimento mental e
                            espiritual, por isso disponibilizamos obras de autores vistos como referências
                            para a doutrina Espírita. </p>
                        <p> <Bold>A livraria dispõe de livros usados com preço acessível e recebe doações de
                            livros Espíritas para o nosso acervo onde podemos fazer um maior intercâmbio
                            da leitura Espírita!!!</Bold> </p>
                    </StyledSpan>
                    <StyledDiv>
                        <StyledSpanTitle>
                            Autores das obras disponíveis
                        </StyledSpanTitle>
                        <StyledDivContent>
                            <StyledSpanText>
                                <p> A nossa livraria espirita  conta com vários autores como: </p>
                                <p> Yvone A. Pereira  </p>
                                <p> Richard Simonetti </p>
                                <p> Francisco  Xavier </p>
                                <p> João Nunes Maia </p>
                                <p> Zidane Gama </p>
                                <p> Manoel Philomeno </p>
                                <p> Patrícia </p>
                                <p> J.WRochester </p>
                                <p> Divaldo Franco </p>
                                <p> Obras infantis: Evangelhos, Espiritismo para crianças,
                                    colorindo o Evangelho, etc. </p>
                            </StyledSpanText>
                        </StyledDivContent>
                    </StyledDiv>
                    <StyledDiv>
                        <Carousel data={images} />
                    </StyledDiv>
                </Wrapper>
            </DesktopOrLaptop>
            <TabletOrMobile>
                <Wrapper>
                    <StyledSpan>
                        <p> &quot;É muito bom ler...O Espiritismo está fundamentado na razão (no raciocínio),
                            na lógica, no equilíbrio e no bom senso, sobretudo na razão, de tal mode
                            que a leitura e, de preferência, a leitura constante, intensa, constitui
                            grande contributo ao seu entendimento, à sua boa compreensão&quot;. <Italic>(Artigo
                            &quot;A importância da leitura de Antônio Moris Cury&quot;)</Italic> </p>
                        <p> &quot;O Livro Espírita liberta, consola, ensina, nos faz parar para refletir sobre
                            o mais simples acontecimento da nossa vida, levando-nos à verdadeira compreensão
                            e a possível modificação. Ler é ser motivado à observação de aspectos da vida
                            que antes nos passavam despercebidos&quot;.<Italic> (Artigo &quot;Livraria – A importância
                            da leitura&quot;)</Italic> </p>
                        <p> &quot;A leitura abre a mente, impulsiona os sonhos e alimenta a alma&quot;. <Italic>(Érico Teixeira)</Italic> </p>
                        <p> Com base nisso, se faz a livraria da Fraternidade Espírita Clara de Fonataine.
                            Acreditamos que a leitura é de extrema importância para o amadurecimento mental e
                            espiritual, por isso disponibilizamos obras de autores vistos como referências
                            para a doutrina Espírita. </p>
                        <p> <Bold>A livraria dispõe de livros usados com preço acessível e recebe doações de
                            livros Espíritas para o nosso acervo onde podemos fazer um maior intercâmbio
                            da leitura Espírita!!!</Bold> </p>
                    </StyledSpan>
                    <StyledDiv>
                        <StyledSpanTitle>
                            Autores das obras disponíveis
                        </StyledSpanTitle>
                        <StyledDivContent>
                            <StyledSpanText>
                                <p> A nossa livraria espirita  conta com vários autores como: </p>
                                <p> Yvone A. Pereira  </p>
                                <p> Richard Simonetti </p>
                                <p> Francisco  Xavier </p>
                                <p> João Nunes Maia </p>
                                <p> Zidane Gama </p>
                                <p> Manoel Philomeno </p>
                                <p> Patrícia </p>
                                <p> J.WRochester </p>
                                <p> Divaldo Franco </p>
                                <p> Obras infantis: Evangelhos, Espiritismo para crianças,
                                    colorindo o Evangelho, etc. </p>
                            </StyledSpanText>
                        </StyledDivContent>
                    </StyledDiv>
                    <StyledDiv>
                        <Carousel data={images} />
                    </StyledDiv>
                </Wrapper>
            </TabletOrMobile>
        </>
    );
};

export default ContentSection;