import React, { useState, useEffect, useCallback } from 'react';
import { StyledButton, StyledDiv, StyledIcon, StyledSpan } from './index.style'

const GoToTopButton = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [currentScroll] = useState(false);
    const [showButtonText, setShowButtonText] = useState(false);

    const onScroll = () => {
        let changeVisibility = (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1);
        setIsVisible(changeVisibility);
    }

    const handleChangeVisibility = useCallback(
        () => {
            window.addEventListener('scroll', () => onScroll());
        },
        [currentScroll]
    );

    useEffect(() => {
        handleChangeVisibility();

        return () => {
            setIsVisible(false);
        };
    }, [handleChangeVisibility]);

    const handleButtonClick = () => {
        document.documentElement.scroll({top: 0, left: 0, behavior: 'smooth' });
        document.body.scroll({top: 0, left: 0, behavior: 'smooth' });
    }

    const handleMouseOver = (showText) => {
        setTimeout(() => setShowButtonText(showText), 100);
    }

    return (
        <StyledButton
            onMouseOver={() => handleMouseOver(true)}
            onMouseLeave={() => handleMouseOver(false)}
            onClick={() => handleButtonClick()}
            isVisible={isVisible}
        >
            <StyledDiv>
                {showButtonText && (<StyledSpan>VOLTAR AO TOPO</StyledSpan>)}
                <StyledIcon name='arrow up' size='large' />
            </StyledDiv>
        </StyledButton>
    );
}

export default GoToTopButton;


