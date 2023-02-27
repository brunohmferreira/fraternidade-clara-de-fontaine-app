import React from 'react';
import DesktopOrLaptop from '../../../shared/devices/DesktopOrLaptop';
import TabletOrMobile from '../../../shared/devices/TabletOrMobile';
import Carousel from '../../shared/Carousel';
import { Wrapper, StyledSpan, StyledDiv, Bold } from './index.style';

const ContentSection = () => {

    const images = [
        {
            image: `${process.env.PUBLIC_URL}\\images\\SosPrecesImage.png`,
            caption: ''
        },
        {
            image: `${process.env.PUBLIC_URL}\\images\\SosPrecesImage1.png`,
            caption: ''
        },
        {
            image: `${process.env.PUBLIC_URL}\\images\\SosPrecesImage2.png`,
            caption: ''
        },
        {
            image: `${process.env.PUBLIC_URL}\\images\\SosPrecesImage3.png`,
            caption: ''
        }
    ];

    return (
        <>
            <DesktopOrLaptop>
                <Wrapper desktop>
                    <StyledSpan>
                        <p> Esta atividade tem por objetivo prestar assistência espiritual e
                            emocional às pessoas que ligam para o telefone <Bold>(31) 3334-9700</Bold>,
                            instalado no endereço desta Sociedade, em busca de alívio, conforto e força para
                            enfrentar as vicissitudes da vida. </p>
                        <p> É um atendimento gratuito pelo qual o atendido, normalmente sofrendo por
                            problemas emocionais, familiares, saúde e diversos outros semelhantes
                            que trazem desânimo depressões que geram muitas vezes situações de
                            tentativas de suicídios.  </p>
                        <p> É um trabalho que muito gratifica nossa Casa. </p>
                    </StyledSpan>
                    <StyledDiv>
                        <Carousel data={images} />
                    </StyledDiv>
                </Wrapper>
            </DesktopOrLaptop>
            <TabletOrMobile>
                <Wrapper>
                    <StyledSpan>
                        <p> Esta atividade tem por objetivo prestar assistência espiritual e
                            emocional às pessoas que ligam para o telefone <Bold>(31) 3334-9700</Bold>,
                            instalado no endereço desta Sociedade, em busca de alívio, conforto e força para
                            enfrentar as vicissitudes da vida. </p>
                        <p> É um atendimento gratuito pelo qual o atendido, normalmente sofrendo por
                            problemas emocionais, familiares, saúde e diversos outros semelhantes
                            que trazem desânimo depressões que geram muitas vezes situações de
                            tentativas de suicídios.  </p>
                        <p> É um trabalho que muito gratifica nossa Casa. </p>
                    </StyledSpan>
                    <StyledDiv>
                        <Carousel data={images} />
                    </StyledDiv>
                </Wrapper>
            </TabletOrMobile>
        </>
    );
};

export default ContentSection;