import React from 'react';
import { Wrapper, Left, Bold } from '../PageFooter/index.style';

const PageFooter = () => {

    let date = new Date().getFullYear().toString();
    
    return (
        <Wrapper>
            <Left><Bold>Fraternidade Espírita Clara de Fontaine</Bold> - Todos os direitos reservados © {date}</Left>
        </Wrapper>
    );
}

export default PageFooter;