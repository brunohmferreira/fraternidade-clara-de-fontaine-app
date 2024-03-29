import React from 'react';
import DesktopOrLaptop from '../../../shared/devices/DesktopOrLaptop';
import TabletOrMobile from '../../../shared/devices/TabletOrMobile';
import Carousel from '../../shared/Carousel';
import { Wrapper, StyledSpan, StyledDiv } from './index.style';

const ContentSection = () => {

    const images = [
        {
            image: `${process.env.PUBLIC_URL}\\images\\AtendimentoFraternoImage2.png`,
            caption: ''
        },
        {
            image: `${process.env.PUBLIC_URL}\\images\\AtendimentoFraternoImage.png`,
            caption: ''
        },
        {
            image: `${process.env.PUBLIC_URL}\\images\\AtendimentoFraternoImage3.png`,
            caption: ''
        }
    ];

    return (
        <>
            <DesktopOrLaptop>
                <Wrapper desktop>
                    <StyledSpan>
                        <p> Imbuídos dos sentimentos de auxílio, harmonia e amparo, o atendente, ao
                            recepcionar um irmão, deverá, através de uma conversa de paz, harmonia
                            e fraternidade, identificar a necessidade de cada um que recorre à Casa,
                            encaminhando-o para o atendimento de suas necessidades, dentro das nossas
                            possibilidades. </p>
                        <p> Este trabalho se dá tendo como direcionamento a cortesia, boa vontade,
                            respeito e discrição, sem qualquer discriminação de nível cultural, de
                            raça, de condição social, de religião, etc. </p>
                    </StyledSpan>
                    <StyledDiv>
                        <Carousel data={images} />
                    </StyledDiv>
                </Wrapper>
            </DesktopOrLaptop>
            <TabletOrMobile>
                <Wrapper>
                    <StyledSpan>
                        <p> Imbuídos dos sentimentos de auxílio, harmonia e amparo, o atendente, ao
                            recepcionar um irmão, deverá, através de uma conversa de paz, harmonia
                            e fraternidade, identificar a necessidade de cada um que recorre à Casa,
                            encaminhando-o para o atendimento de suas necessidades, dentro das nossas
                            possibilidades. </p>
                        <p> Este trabalho se dá tendo como direcionamento a cortesia, boa vontade,
                            respeito e discrição, sem qualquer discriminação de nível cultural, de
                            raça, de condição social, de religião, etc. </p>
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