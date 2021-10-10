import React, { useContext } from 'react';
import { Wrapper, Bold, StyledItem, StyledItemCentralized, StyledItemImage, StyledItemGroup, StyledItemGroupColumn, StyledItemButton, StyledSpan, StyledSpanTitle } from '../PageFooter/index.style';
import LogoAndName from '../../shared/LogoAndName';
import { Item } from 'semantic-ui-react';
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
    }
        
    return (
        <Wrapper>
            <StyledItemGroup>
                <StyledItem>
                    <StyledItemGroupColumn>
                        <StyledItemImage onClick={() => handleChangePage(Pages.Home)}>
                            <LogoAndName showName nameFontSize='20px' imageWidth='120px' imageHeight='70px' />
                        </StyledItemImage>
                        <Item>
                            <StyledSpan>
                                <StyledSpanTitle>Telefone: &nbsp;</StyledSpanTitle> 
                                (31) 3334-9700
                            </StyledSpan>
                        </Item>
                        <Item>
                            <StyledSpan hoverable clickable onClick={() => handleAddressClick()}>
                                <StyledSpanTitle>Endereço: &nbsp;</StyledSpanTitle > 
                                Rua Três Pontas, nº 2.055 - bairro Padre Eustáquio - Belo Horizonte - MG
                            </StyledSpan>
                        </Item>
                    </StyledItemGroupColumn>
                    <StyledItemGroupColumn style={{ display: 'grid', padding: 0 }}>
                        <Item><StyledSpanTitle>Serviços disponíveis</StyledSpanTitle></Item>
                        {availableServices.map((page) => {
                            return (<StyledItemButton onClick={() => {handleChangePage(page)}}>{page.name}</StyledItemButton>);
                        })}
                    </StyledItemGroupColumn>
                </StyledItem>
                <StyledItemCentralized>
                    <span>© {currentYear} Todos os direitos reservados - <Bold>Sociedade Assistencial Clara de Fontaine</Bold></span>
                </StyledItemCentralized>
            </StyledItemGroup>
        </Wrapper>
    );
}

export default PageFooter;