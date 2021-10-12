import React, { useContext } from 'react';
import { Pages } from '../../../shared/enums/Pages';
import { StyledButton, StyledDivTitle, StyledBackgroundImage, StyledDivButton } from './index.style';
import LogoAndName from '../../shared/LogoAndName';
import ChangePageContext from '../../../store/contexts/home/changePageContext';

const MainSection = () => {

    const handleChangePage = useContext(ChangePageContext);

    return (
        <>
            <StyledBackgroundImage src='\images\SunflowersBackground.png' />
            <StyledDivTitle>
                <LogoAndName showName />
            </StyledDivTitle>
            <StyledDivButton>
                <StyledButton content='CONHEÇA NOSSO TRABALHO RELIGIOSO' onClick={() => handleChangePage(Pages.TrabalhoReligioso)} />
            </StyledDivButton>
        </>
    );
};

export default MainSection;