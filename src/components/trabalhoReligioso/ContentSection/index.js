import React from 'react';
import DesktopOrLaptop from '../../../shared/devices/DesktopOrLaptop';
import TabletOrMobile from '../../../shared/devices/TabletOrMobile';
import { Pages } from '../../../shared/enums/Pages';
import Carousel from '../../shared/Carousel';
import { Wrapper, StyledSpanText, StyledSpanTitle, StyledDiv, StyledDivContent, Bold } from './index.style';

const ContentSection = () => {

    const availableServices = Object.values(Pages).map(page => page.name);
    availableServices.shift();

    const images = [
        {
            image: `${process.env.PUBLIC_URL}\\images\\Facade.png`,
            caption: ''
        },
        {
            image: `${process.env.PUBLIC_URL}\\images\\TrabalhoReligiosoImage.png`,
            caption: ''
        }
    ];

    return (
        <>
            <DesktopOrLaptop>
                <Wrapper desktop>
                    <StyledSpanText>
                        <p> Como Casa Espírita atua na educação religiosa, ensinando o Evangelho em
                            conjunto com a preparação do indivíduo para o enfrentamento das dificuldades
                            da vida, de forma que ele se sinta capaz e motivado a reverter qualquer
                            processo que entenda como negativo, fortalecendo-o contra pensamentos de
                            autodestruição. </p>
                        <p> Tenta dar ao educando as possibilidades de encarar a vida, o mundo e
                            as pessoas de maneira mais espiritualizada e menos materialista.</p>
                        <p> Como lema da Casa Espírita <Bold>&quot;fora da caridade não há salvação&quot; </Bold>
                            mostramos a necessidade da prática do &quot;amor ao próximo&quot; ensinado pelo Cristo,
                            sendo esta a principal meta de nossa Casa.</p>
                    </StyledSpanText>
                    <StyledDiv>
                        <StyledSpanTitle>
                            Serviços prestados
                        </StyledSpanTitle>
                        <StyledDivContent>
                            <StyledSpanText>
                                <p> A casa oferece, de forma inteiramente gratuita, os seguintes serviços:
                                    {availableServices.join('; ')}.</p>
                                <p> Todos os serviços e demais atividades prestados por esta Instituição
                                    são inteiramente gratuitos, não podendo os membros da administração e
                                    demais trabalhadores, todos voluntários não remunerados, receber
                                    qualquer espécie de pagamento, sob qualquer forma.  </p>
                                <p> A Entidade não distribui resultados, dividendos, bonificações,
                                    participações ou parcelas de seu patrimônio, sob nenhuma forma
                                    ou pretexto. </p>
                                <p> A Sociedade é mantida exclusivamente por doações espontâneas provindas
                                    de seus administradores e tarefeiros voluntários e eventuais promoções
                                    para tal fim. </p>
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
                        <p> Como Casa Espírita atua na educação religiosa, ensinando o Evangelho em
                            conjunto com a preparação do indivíduo para o enfrentamento das dificuldades
                            da vida, de forma que ele se sinta capaz e motivado a reverter qualquer
                            processo que entenda como negativo, fortalecendo-o contra pensamentos de
                            autodestruição. </p>
                        <p> Tenta dar ao educando as possibilidades de encarar a vida, o mundo e
                            as pessoas de maneira mais espiritualizada e menos materialista.</p>
                        <p> Como lema da Casa Espírita <Bold>&quot;fora da caridade não há salvação&quot; </Bold>
                            mostramos a necessidade da prática do &quot;amor ao próximo&quot; ensinado pelo Cristo,
                            sendo esta a principal meta de nossa Casa.</p>
                    </StyledSpanText>
                    <StyledDiv>
                        <StyledSpanTitle>
                            Serviços prestados
                        </StyledSpanTitle>
                        <StyledDivContent>
                            <StyledSpanText>
                                <p> A casa oferece, de forma inteiramente gratuita, os seguintes serviços:
                                    {availableServices.join('; ')}.</p>
                                <p> Todos os serviços e demais atividades prestados por esta Instituição
                                    são inteiramente gratuitos, não podendo os membros da administração e
                                    demais trabalhadores, todos voluntários não remunerados, receber
                                    qualquer espécie de pagamento, sob qualquer forma.  </p>
                                <p> A Entidade não distribui resultados, dividendos, bonificações,
                                    participações ou parcelas de seu patrimônio, sob nenhuma forma
                                    ou pretexto. </p>
                                <p> A Sociedade é mantida exclusivamente por doações espontâneas provindas
                                    de seus administradores e tarefeiros voluntários e eventuais promoções
                                    para tal fim. </p>
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