import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import GroupHoverButton from '../../components/shared/GroupHoverButton';
import TopMenu from '../../components/shared/TopMenu';
import PageFooter from '../../components/shared/PageFooter';
import { useHistory } from 'react-router-dom';
import GoToTopButton from '../../components/shared/GoToTopButton';
import ChangePageContext from '../../store/contexts/home/changePageContext';
import { Pages } from '../../shared/enums/Pages';

const TemplatePage = ({ currentPage, content, showLogoOnTopMenu }) => {

    const history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChangePage = (page) => {
        history.push(page.path);
    };

    return (
        <ChangePageContext.Provider value={handleChangePage}>
            <TopMenu
                showLogo={showLogoOnTopMenu}
                activeItem={currentPage}
                handleChangePage={handleChangePage}
            />
            {content}
            <GoToTopButton />
            <GroupHoverButton />
            <PageFooter />
        </ChangePageContext.Provider>
    );
};

TemplatePage.propTypes = {
    currentPage: PropTypes.object,
    content: PropTypes.element,
    showLogoOnTopMenu: PropTypes.bool
};

TemplatePage.defaultProps = {
    currentPage: Pages.Home,
    content: <></>,
    showLogoOnTopMenu: false
};

export default TemplatePage;