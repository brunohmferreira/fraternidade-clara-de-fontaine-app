import React from 'react';
import DesktopOrLaptop from '../../../shared/devices/DesktopOrLaptop';
import TabletOrMobile from '../../../shared/devices/TabletOrMobile';
import Carousel from '../../shared/Carousel';
import { Wrapper, StyledSpan, StyledDiv } from './index.style';

const ContentSection = () => {

    const images = [
        {
            image: `${process.env.PUBLIC_URL}\\images\\EvangelizacaoInfantilImage1.png`,
            caption: ''
        },
        {
            image: `${process.env.PUBLIC_URL}\\images\\EvangelizacaoInfantilImage2.png`,
            caption: ''
        },
        {
            image: `${process.env.PUBLIC_URL}\\images\\EvangelizacaoInfantilImage3.png`,
            caption: ''
        },
        {
            image: `${process.env.PUBLIC_URL}\\images\\EvangelizacaoInfantilImage4.png`,
            caption: ''
        },
        {
            image: `${process.env.PUBLIC_URL}\\images\\EvangelizacaoInfantilImage5.png`,
            caption: ''
        },
        {
            image: `${process.env.PUBLIC_URL}\\images\\EvangelizacaoInfantilImage6.png`,
            caption: ''
        },
        {
            image: `${process.env.PUBLIC_URL}\\images\\EvangelizacaoInfantilImage7.png`,
            caption: ''
        }
    ];

    return (
        <>
            <DesktopOrLaptop>
                <Wrapper desktop>
                    <StyledSpan>
                        <p> As crianças e os jovens recebem orientações preventivas em relação
                            ao uso de drogas, tendo por objetivo principal a conscientização e
                            o preparo para a vida de solidariedade e fraternidade, tendo por
                            base os ensinos do Cristo, através de seu evangelho. </p>
                    </StyledSpan>
                    <StyledDiv>
                        <Carousel data={images} />
                    </StyledDiv>
                </Wrapper>
            </DesktopOrLaptop>
            <TabletOrMobile>
                <Wrapper>
                    <StyledSpan>
                        <p> As crianças e os jovens recebem orientações preventivas em relação
                            ao uso de drogas, tendo por objetivo principal a conscientização e
                            o preparo para a vida de solidariedade e fraternidade, tendo por
                            base os ensinos do Cristo, através de seu evangelho. </p>
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