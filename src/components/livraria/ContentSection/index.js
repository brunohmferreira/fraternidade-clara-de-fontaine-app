import React from 'react';
import Carousel from '../../shared/Carousel';
import { Wrapper, StyledSpan, StyledDiv } from './index.style';

const ContentSection = () => {

    const images = [
        {
          image: "\\images\\LivrariaImage.png",
          caption: ""
        }
    ];

    return (
        <Wrapper>
            <StyledSpan>
                <p>  </p> 
            </StyledSpan>
            <StyledDiv>
                <Carousel data={images} />
            </StyledDiv>
        </Wrapper>
    );
};

export default ContentSection;