import React, { useState, useEffect } from 'react';
import { StyledButton, StyledDiv, StyledIcon, StyledSpan } from './index.style'

const GoToTopButton = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [currentScroll] = useState(false);
  const [showButtonText, setShowButtonText] = useState(false);
  
  useEffect(() => {
    const onScroll = () => {
      var changeVisibility = (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1);
      setIsVisible(changeVisibility);
    }

    window.addEventListener('scroll', onScroll);
  }, [currentScroll]);

  const handleButtonClick = () => {
    document.documentElement.scroll({top: 0, left: 0, behavior: 'smooth' });
    document.body.scroll({top: 0, left: 0, behavior: 'smooth' });
  }
  
  const handleMouseOverLeave = (showButton) => {
    setShowButtonText(showButton);
  }

  return (
    <StyledButton 
      onMouseOver={() => handleMouseOverLeave(true)} 
      onMouseLeave={() => handleMouseOverLeave(false)}
      onClick={() => handleButtonClick()} 
      style={{ display : isVisible ? 'flex' : 'none' }}>
      <StyledDiv>
        {showButtonText && (<StyledSpan>VOLTAR AO TOPO</StyledSpan>)}
        <StyledIcon
          name='arrow up'
          size='large'
        />
      </StyledDiv>
    </StyledButton>
  );
}

export default GoToTopButton;


