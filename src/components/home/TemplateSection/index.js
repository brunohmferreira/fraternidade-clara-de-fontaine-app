import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StyledImage, StyledLeftDiv, StyledRightDiv, StyledTitleSpan, StyledTextSpan, Wrapper } from './index.style';
import { Pages } from '../../../shared/enums/Pages';
import ReadMoreButton from '../../shared/ReadMoreButton';
import ChangePageContext from '../../../store/contexts/home/changePageContext';
import DesktopOrLaptop from '../../../shared/devices/DesktopOrLaptop';
import TabletOrMobile from '../../../shared/devices/TabletOrMobile';

const TemplateSection = ({ section, image, title, text, rightImage }) => {

    const handleChangePage = useContext(ChangePageContext);

    const ImageSection = () => (
        <>
            {image && <StyledImage src={image} />}
        </>
    );

    const TextSection = () => (
        <>
            {title && <StyledTitleSpan>
                {title}
            </StyledTitleSpan>}
            {text && <StyledTextSpan>
                {text}
            </StyledTextSpan>}
            {section &&
                <ReadMoreButton handleButtonClick={handleChangePage} pageToOpen={section} />}
        </>
    );

    return (
        <>
            <DesktopOrLaptop>
                <Wrapper gradientToLeft={rightImage} desktop>
                    <StyledLeftDiv center={rightImage}>
                        {rightImage ? <TextSection /> : <ImageSection />}
                    </StyledLeftDiv>
                    <StyledRightDiv center={!rightImage}>
                        {rightImage ? <ImageSection /> : <TextSection />}
                    </StyledRightDiv>
                </Wrapper>
            </DesktopOrLaptop>
            <TabletOrMobile>
                <Wrapper gradientToLeft={rightImage}>
                    <TextSection />
                </Wrapper>
            </TabletOrMobile>
        </>
    );
};

TemplateSection.propTypes = {
    section: PropTypes.object,
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.element,
    rightImage: PropTypes.bool
};

TemplateSection.defaultProps = {
    section: Pages.Home,
    image: '',
    title: '',
    text: (<></>),
    rightImage: false
};

export default TemplateSection;