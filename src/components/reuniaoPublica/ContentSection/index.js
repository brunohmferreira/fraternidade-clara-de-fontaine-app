import React from 'react';
import DesktopOrLaptop from '../../../shared/devices/DesktopOrLaptop';
import TabletOrMobile from '../../../shared/devices/TabletOrMobile';
import Carousel from '../../shared/Carousel';
import { Wrapper, StyledSpan, StyledDiv, StyledSpanTitle, StyledImage } from './index.style';

const ContentSection = () => {

    const images = [
        {
            image: `${process.env.PUBLIC_URL}\\images\\TrabalhoReligiosoImage2.png`,
            caption: ''
        }
    ];

    const scheduleImage = `${process.env.PUBLIC_URL}\\images\\TrabalhoReligiosoDezembro2023Image.png`;

    return (
        <>
            <DesktopOrLaptop>
                <Wrapper desktop>
                    <StyledSpanTitle>
                        Agenda do mês
                    </StyledSpanTitle>
                    <StyledImage src={scheduleImage} />
                    <StyledDiv>
                        <StyledSpan>
                            <p> As reuniões públicas tem como objetivo nos trazer temas que nos levam a refletir
                                sobre nossa conduta enquanto encarnados. São temas voltados para a transformação moral cristã do ser. </p>
                            <p> Temas estes extraídos do Evangelho segundo o espiritismo, livro dos espíritos, obras
                                psicografadas por Chico Xavier e outros. </p>
                        </StyledSpan>
                    </StyledDiv>
                    <StyledDiv>
                        <Carousel data={images} />
                    </StyledDiv>
                </Wrapper>
            </DesktopOrLaptop>
            <TabletOrMobile>
                <Wrapper>
                    <StyledSpanTitle>
                        Agenda do mês
                    </StyledSpanTitle>
                    <StyledImage src={scheduleImage} widthAndHeight={'70%'} />
                    <StyledDiv>
                        <StyledSpan>
                            <p> As reuniões públicas tem como objetivo nos trazer temas que nos levam a refletir
                                sobre nossa conduta enquanto encarnados. São temas voltados para a transformação moral cristã do ser. </p>
                            <p> Temas estes extraídos do Evangelho segundo o espiritismo, livro dos espíritos, obras
                                psicografadas por Chico Xavier e outros. </p>
                        </StyledSpan>
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