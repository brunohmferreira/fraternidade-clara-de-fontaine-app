import React, { useEffect, useState } from 'react';
import Structure from '../../components/home/Structure';
import { Pages } from '../../shared/enums/Pages';
import TemplatePage from '../TemplatePage';

const HomePage = () => {

    const [currentPage] = useState(Pages.Home);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <TemplatePage 
            currentPage={currentPage}
            content={<Structure />}
        />
    );
};

export default HomePage;