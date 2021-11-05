import React from 'react';
import Carousel from '../../shared/Carousel';
import { Wrapper, StyledSpan, StyledDiv } from './index.style';

const ContentSection = () => {

    const images = [
        {
            image: "\\images\\EvangelizacaoInfantilImage1.png",
            caption: ""
        },
        {
            image: "\\images\\EvangelizacaoInfantilImage2.png",
            caption: ""
        },
        {
            image: "\\images\\EvangelizacaoInfantilImage3.png",
            caption: ""
        },
        {
            image: "\\images\\EvangelizacaoInfantilImage4.png",
            caption: ""
        },
        {
            image: "\\images\\EvangelizacaoInfantilImage5.png",
            caption: ""
        },
        {
            image: "\\images\\EvangelizacaoInfantilImage6.png",
            caption: ""
        },
        {
            image: "\\images\\EvangelizacaoInfantilImage7.png",
            caption: ""
        }
    ];

    return (
        <Wrapper>
            <StyledSpan>
                <p> As crianças e os jovens recebem orientações preventivas em relação
                    ao uso de drogas, tendo por objetivo principal a conscientização e
                    o preparo para a vida de solidariedade e fraternidade, tendo por
                    base os ensinos do Cristo, através de seu evangelho. </p>
                <p> São reuniões semanais que se estendem por todo o ano, tendo a presença
                    de 40 jovens em 2015. </p>
            </StyledSpan>
            <StyledDiv>
                <Carousel data={images} />
            </StyledDiv>
        </Wrapper>
    );
};

export default ContentSection;