import React from 'react';
import { Icon } from 'semantic-ui-react';
import DesktopOrLaptop from '../../../shared/devices/DesktopOrLaptop';
import TabletOrMobile from '../../../shared/devices/TabletOrMobile';
import Carousel from '../../shared/Carousel';
import { Wrapper, StyledDiv, StyledDivContent, StyledSpanTitle, StyledSpanText, Bold } from './index.style';

const ContentSection = () => {

    const images = [
        {
            image: `${process.env.PUBLIC_URL}\\images\\EducacaoMediunicaImage.png`,
            caption: ''
        }
    ];

    return (
        <>
            <DesktopOrLaptop>
                <Wrapper desktop>
                    <StyledSpanText>
                        <p> Podemos dizer que o objetivo da <Bold>Educação Mediúnica</Bold> na Casa de Clara é o exercício da Mediunidade com
                            Jesus. Com isso, esclarecemos que é a busca do autodesenvolvimento de valores morais e
                            conhecimentos para o atingimento deste objetivo. Podemos comparar a Educação Mediúnica à situação de uma pessoa que
                            concorre ao sorteio de um automóvel e ganha. Ao buscar o automóvel, recebe as chaves e não sabe dirigir. Além
                            de aprender a dirigir, precisa aprender também a ter atitudes moralizadas na condução do automóvel. Ou seja, temos a
                            condição fisiológica da mediunidade, desenvolvemos esta condição através do exercício da mediunidade, e a educamos
                            através do autoconhecimento, autotransformação, conhecimentos  e atividades no bem. </p>
                        <p> Temos por lema o <Bold>&quot;dai de graça o que de graça recebestes&quot;</Bold>. </p>
                    </StyledSpanText>
                    <StyledDiv>
                        <StyledSpanTitle>
                            Dinâmica do estudo
                        </StyledSpanTitle>
                        <StyledDivContent>
                            <StyledSpanText>
                                <p> Em um contexto presencial, temos 2 momentos: </p>
                                <p> <Icon name='bullseye' color='brown' />
                                    Estudo e Prática: O estudo do Evangelho Segundo o Espiritismo/estudo de Livro Mediunidade </p>
                                <p> <Icon name='bullseye' color='brown' />
                                    Prática mediúnica assistida </p>
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
                    <StyledSpanText>
                        <p> Podemos dizer que o objetivo da <Bold>Educação Mediúnica</Bold> na Casa de Clara é o exercício da Mediunidade com
                            Jesus. Com isso, esclarecemos que é a busca do autodesenvolvimento de valores morais e
                            conhecimentos para o atingimento deste objetivo. Podemos comparar a Educação Mediúnica à situação de uma pessoa que
                            concorre ao sorteio de um automóvel e ganha. Ao buscar o automóvel, recebe as chaves e não sabe dirigir. Além
                            de aprender a dirigir, precisa aprender também a ter atitudes moralizadas na condução do automóvel. Ou seja, temos a
                            condição fisiológica da mediunidade, desenvolvemos esta condição através do exercício da mediunidade, e a educamos
                            através do autoconhecimento, autotransformação, conhecimentos  e atividades no bem. </p>
                        <p> Temos por lema o <Bold>&quot;dai de graça o que de graça recebestes&quot;</Bold>. </p>
                    </StyledSpanText>
                    <StyledDiv>
                        <StyledSpanTitle>
                            Dinâmica do estudo
                        </StyledSpanTitle>
                        <StyledDivContent>
                            <StyledSpanText>
                                <p> Em um contexto presencial, temos 2 momentos: </p>
                                <p> <Icon name='bullseye' color='brown' />
                                    Estudo e Prática: O estudo do Evangelho Segundo o Espiritismo/estudo de Livro Mediunidade </p>
                                <p> <Icon name='bullseye' color='brown' />
                                    Prática mediúnica assistida </p>
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