import React, { useState } from 'react';
import Structure from '../../components/Home/Structure';
import { Pages } from '../../shared/enums/Pages';
import { useHistory } from 'react-router-dom';
import TemplatePage from '../TemplatePage';

const HomePage = () => {

    const [currentPage] = useState(Pages.Home);

    const history = useHistory();

    const handleChangePage = (page) => {
        history.push(page.path);
    }

    return (
        <TemplatePage 
            currentPage={currentPage}
            content={<Structure handleChangePage={handleChangePage} />}
        />
    );
};

export default HomePage;