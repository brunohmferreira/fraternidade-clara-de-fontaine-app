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
            </DesktopOrLaptop>
            <TabletOrMobile>
                <StyledImage src={`${process.env.PUBLIC_URL}\\images\\SunflowersBackground.png`} />
                <StyledDivTitle>
                    <LogoAndName showName showLogo={false} nameFontSize='25px' />
                </StyledDivTitle>
            </TabletOrMobile>
        </>
    );
};

export default MainSection;