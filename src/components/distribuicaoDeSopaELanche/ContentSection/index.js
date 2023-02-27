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
                        <p> É um trabalho realizado no último domingo de cada mês,
                            onde são distribuídos lanche ou sopa, dependendo da
                            estação do ano, às pessoas em situação de rua. São
                            também distribuídas roupas usadas.  </p>
                    </StyledSpan>
                </Wrapper>
            </DesktopOrLaptop>
            <TabletOrMobile>
                <Wrapper>
                    <StyledSpan>
                        <p> É um trabalho realizado no último domingo de cada mês,
                            onde são distribuídos lanche ou sopa, dependendo da
                            estação do ano, às pessoas em situação de rua. São
                            também distribuídas roupas usadas.  </p>
                    </StyledSpan>
                </Wrapper>
            </TabletOrMobile>
        </>
    );
};

export default ContentSection;