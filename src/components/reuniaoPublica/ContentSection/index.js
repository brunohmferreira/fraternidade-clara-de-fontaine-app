import React from 'react';
import DesktopOrLaptop from '../../../shared/devices/DesktopOrLaptop';
import TabletOrMobile from '../../../shared/devices/TabletOrMobile';
import { Wrapper, StyledSpan } from './index.style';

const ContentSection = () => {

    return (
        <>
            <DesktopOrLaptop>
                <Wrapper desktop>
                    <StyledSpan>
                        <p> As reuniões públicas tem como objetivo nos trazer temas que nos levam a refletir
                            sobre nossa conduta enquanto encarnados. </p>
                        <p> São temas voltados para a transformação moral cristã do ser. </p>
                        <p> Temas estes extraídos do Evangelho segundo o espiritismo, livro dos espíritos, obras
                            psicografadas por Chico Xavier e outros. </p>
                        <p> As nossas palestras estão disponíveis para visualização em nosso canal do YouTube. </p>
                    </StyledSpan>
                </Wrapper>
            </DesktopOrLaptop>
            <TabletOrMobile>
                <Wrapper>
                    <StyledSpan>
                        <p> As reuniões públicas tem como objetivo nos trazer temas que nos levam a refletir
                            sobre nossa conduta enquanto encarnados. </p>
                        <p> São temas voltados para a transformação moral cristã do ser. </p>
                        <p> Temas estes extraídos do Evangelho segundo o espiritismo, livro dos espíritos, obras
                            psicografadas por Chico Xavier e outros. </p>
                        <p> As nossas palestras estão disponíveis para visualização em nosso canal do YouTube. </p>
                    </StyledSpan>
                </Wrapper>
            </TabletOrMobile>
        </>
    );
};

export default ContentSection;