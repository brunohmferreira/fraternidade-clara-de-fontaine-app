import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Accordion as AccordionSemantic, Icon } from 'semantic-ui-react';
import { StyledAccordionTitle, StyledAccordionContent } from './index.style';

const Accordion = ({ listOfItems, defaultActiveItemIndex }) => {

    const [activeItemIndex, setActiveItemIndex] = useState(defaultActiveItemIndex === null ? -1 : defaultActiveItemIndex);

    const handleClick = (itemKey) => {
        let selectedItem = activeItemIndex === itemKey ? -1 : itemKey;
        setActiveItemIndex(selectedItem);
    }

    return (  
        <AccordionSemantic>
            {listOfItems.map((item) => {
                return (
                    <>
                    <StyledAccordionTitle
                        active={activeItemIndex === item.key}
                        index={item.key}
                        onClick={() => { handleClick(item.key) }}
                        >
                        <Icon name='dropdown' />
                        {item.title}
                    </StyledAccordionTitle>
                    <StyledAccordionContent active={activeItemIndex === item.key}>
                        {item.content}
                    </StyledAccordionContent>
                    </>
                );
            })}
        </AccordionSemantic>
    );
};

Accordion.propTypes = {
    listOfItems: PropTypes.arrayOf(PropTypes.object),
    defaultActiveItemIndex: PropTypes.number
};

Accordion.defaultProps = {
    listOfItems: [],
    defaultActiveItemIndex: null
};

export default Accordion;