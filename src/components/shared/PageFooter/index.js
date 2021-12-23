import React, { useContext } from 'react';
import { Wrapper, Bold, StyledDivFirstRow, StyledDivSecondRow, StyledDivLeftColumn, StyledDivRightColumn,
    StyledSpanButton, StyledDivLogo, StyledSpan, StyledSpanTitle } from '../PageFooter/index.style';
import LogoAndName from '../../shared/LogoAndName';
import { Pages } from '../../../shared/enums/Pages';
import ChangePageContext from '../../../store/contexts/home/changePageContext';
import { request } from '../../../services';

const PageFooter = () => {

    const handleChangePage = useContext(ChangePageContext);

    const currentYear = new Date().getFullYear().toString();
    const availableServices = Object.values(Pages);
    availableServices.shift();

    const handleAddressClick = () => {
        window.open(request().env.GOOGLE_MAPS_URL, '_blank');
    };

    return (
        <Wrapper>
            <StyledDivFirstRow>
                <StyledDivLeftColumn>
                    <StyledDivLogo onClick={() => handleChangePage(Pages.Home)}>
                        <LogoAndName showName nameFontSize='20px' imageWidth='120px' imageHeight='70px' />
                    </StyledDivLogo>
                    <StyledSpan>
                        <StyledSpanTitle>Telefone: &nbsp;</StyledSpanTitle>
                        (31) 3110-1233
                    </StyledSpan>
                    <StyledSpan hoverable clickable onClick={() => handleAddressClick()}>
                        <StyledSpanTitle>Endereço: &nbsp;</StyledSpanTitle >
                        Rua Três Pontas, nº 2.055 - bairro Padre Eustáquio - Belo Horizonte - MG
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
        </Wrapper>
    );
};

export default PageFooter;