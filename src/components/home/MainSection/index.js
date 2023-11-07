import React, { useContext } from 'react';
import { Pages } from '../../../shared/enums/Pages';
import { StyledButton, StyledDivTitle, StyledBackgroundImage, StyledDivButton, StyledImage } from './index.style';
import LogoAndName from '../../shared/LogoAndName';
import ChangePageContext from '../../../store/contexts/home/changePageContext';
import DesktopOrLaptop from '../../../shared/devices/DesktopOrLaptop';
import TabletOrMobile from '../../../shared/devices/TabletOrMobile';

const MainSection = () => {

    const handleChangePage = useContext(ChangePageContext);

    return (
        <>
            <DesktopOrLaptop>
                <StyledBackgroundImage src={`${process.env.PUBLIC_URL}\\images\\SunflowersBackground.png`} />
                <StyledDivTitle>
                    <LogoAndName showName />
                </StyledDivTitle>
                <StyledDivButton>
                    <StyledButton content='CONHEÇA NOSSO TRABALHO RELIGIOSO' onClick={() => handleChangePage(Pages.TrabalhoReligioso)} />
                </StyledDivButton>
                <StyledDivButton paddingTop={'30%'}>
                    <StyledButton content='VEJA NOSSA AGENDA DE REUNIÕES PÚBLICAS' onClick={() => handleChangePage(Pages.ReuniaoPublica)} />
                </StyledDivButton>
            </DesktopOrLaptop>
            <TabletOrMobile>
                <StyledImage src={`${process.env.PUBLIC_URL}\\images\\SunflowersBackground.png`} />
                <StyledDivTitle>
                    <LogoAndName showName showLogo={false} nameFontSize='25px' />
                </StyledDivTitle>
                <StyledDivButton paddingTop={'30%'}>
                    <StyledButton content='AGENDA DE REUNIÕES PÚBLICAS' onClick={() => handleChangePage(Pages.ReuniaoPublica)} />
                </StyledDivButton>
            </TabletOrMobile>
        </>
    );
};

export default MainSection;