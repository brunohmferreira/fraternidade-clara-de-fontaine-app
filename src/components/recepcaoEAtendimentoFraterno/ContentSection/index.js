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
                        <p> Imbuídos dos sentimentos de auxílio, harmonia e amparo, o atendente ao
                            recepcionar um irmão deverá, a través de uma conversa de paz, harmonia
                            e fraternidade, identificar a necessidade de cada irmão que recorre à Casa,
                            encaminhando-o para atendimento de suas necessidades, dentro das nossas
                            possibilidades. </p>
                        <p> Este trabalho se dá tendo como direcionamento a cortesia, boa vontade,
                            respeito e discrição, sem qualquer discriminação de nível cultural, de
                            raça, de condição social, de religião, etc. </p>
                    </StyledSpan>
                </Wrapper>
            </DesktopOrLaptop>
            <TabletOrMobile>
                <Wrapper>
                    <StyledSpan>
                        <p> Imbuídos dos sentimentos de auxílio, harmonia e amparo, o atendente ao
                            recepcionar um irmão deverá, a través de uma conversa de paz, harmonia
                            e fraternidade, identificar a necessidade de cada irmão que recorre à Casa,
                            encaminhando-o para atendimento de suas necessidades, dentro das nossas
                            possibilidades. </p>
                        <p> Este trabalho se dá tendo como direcionamento a cortesia, boa vontade,
                            respeito e discrição, sem qualquer discriminação de nível cultural, de
                            raça, de condição social, de religião, etc. </p>
                    </StyledSpan>
                </Wrapper>
            </TabletOrMobile>
        </>
    );
};

export default ContentSection;