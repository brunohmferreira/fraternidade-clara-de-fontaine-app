import React, { useContext } from 'react';
import { Wrapper, Bold, StyledDivFirstRow, StyledDivSecondRow, StyledDivLeftColumn, StyledDivRightColumn,
    StyledSpanButton, StyledDivLogo, StyledSpan, StyledSpanTitle } from '../PageFooter/index.style';
import LogoAndName from '../../shared/LogoAndName';
import { Pages } from '../../../shared/enums/Pages';
import ChangePageContext from '../../../store/contexts/home/changePageContext';
import { request } from '../../../services';
import DesktopOrLaptop from '../../../shared/devices/DesktopOrLaptop';
import TabletOrMobile from '../../../shared/devices/TabletOrMobile';

const PageFooter = () => {

    const handleChangePage = useContext(ChangePageContext);

    const currentYear = new Date().getFullYear().toString();
    const availableServices = Object.values(Pages);
    availableServices.shift();

    const address = 'Rua Três Pontas, nº 1.137 B - bairro Carlos Prates - Belo Horizonte - MG - CEP: 30710-560';
    const phone = '(31) 3334-9700';

    const handleAddressClick = () => {
        window.open(request().env.GOOGLE_MAPS_URL, '_blank');
    };

    return (
        <Wrapper>
            <DesktopOrLaptop>
                <StyledDivFirstRow>
                    <StyledDivLeftColumn>
                        <StyledDivLogo onClick={() => handleChangePage(Pages.Home)}>
                            <LogoAndName showName nameFontSize='20px' imageWidth='120px' imageHeight='70px' />
                        </StyledDivLogo>
                        <StyledSpan>
                            <StyledSpanTitle>Telefone (SOS Preces): &nbsp;</StyledSpanTitle>
                            {phone}
                        </StyledSpan>
                        <StyledSpan hoverable clickable onClick={() => handleAddressClick()}>
                            <StyledSpanTitle>Endereço: &nbsp;</StyledSpanTitle >
                            {address}
                        </StyledSpan>
                    </StyledDivLeftColumn>
                    <StyledDivRightColumn>
                        <StyledSpanTitle>Serviços disponíveis</StyledSpanTitle>
                        {availableServices.map((page) => (
                            <StyledSpanButton key={page.id} onClick={() => handleChangePage(page)}>
                                {page.name}
                            </StyledSpanButton>
                        ))}
                    </StyledDivRightColumn>
                </StyledDivFirstRow>
                <StyledDivSecondRow>
                    <span>© {currentYear} Todos os direitos reservados -
                        <Bold> Sociedade Assistencial Clara de Fontaine</Bold></span>
                </StyledDivSecondRow>
            </DesktopOrLaptop>
            <TabletOrMobile>
                <StyledDivLogo onClick={() => handleChangePage(Pages.Home)}>
                    <LogoAndName showName showLogo={false} nameFontSize='25px'/>
                </StyledDivLogo>
                <StyledSpan>
                    <StyledSpanTitle>Telefone (SOS Preces): &nbsp;</StyledSpanTitle>
                </StyledSpan>
                <StyledSpan smallMargin>
                    {phone}
                </StyledSpan>
                <StyledSpan>
                    <StyledSpanTitle>Endereço: &nbsp;</StyledSpanTitle >
                </StyledSpan>
                <StyledSpan smallMargin clickable onClick={() => handleAddressClick()}>
                    {address}
                </StyledSpan>
                <span>© {currentYear} Todos os direitos reservados - <Bold> Sociedade Assistencial Clara de Fontaine</Bold></span>
            </TabletOrMobile>
        </Wrapper>
    );
};

export default PageFooter;