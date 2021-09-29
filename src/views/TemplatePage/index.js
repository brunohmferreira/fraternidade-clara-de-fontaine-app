import React from 'react';
import PropTypes from 'prop-types';
import GroupHoverButton from '../../components/shared/GroupHoverButton';
import TopMenu from '../../components/shared/TopMenu';
import PageFooter from '../../components/shared/PageFooter';
import { useHistory } from 'react-router-dom';
import GoToTopButton from '../../components/shared/GoToTopButton';

const TemplatePage = ({ currentPage, content }) => {

    const history = useHistory();

    const handleChangePage = (page) => {
        history.push(page.path);
    }

    return (
        <>
            <TopMenu activeItem={currentPage}  handleChangePage={handleChangePage} />
            {content}
            <GoToTopButton />
            <GroupHoverButton />
            <PageFooter />
        </>
    );
};

TemplatePage.propTypes = {
    handleChangePage: PropTypes.func
};

TemplatePage.defaultProps = {
    handleChangePage: () => {}
};

export default TemplatePage;