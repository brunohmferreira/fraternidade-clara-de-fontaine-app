import React, { useState } from 'react';
import { Pages } from '../../shared/enums/Pages';
import TemplatePage from '../TemplatePage';

const TrabalhoReligiosoPage = () => {

    const [currentPage] = useState(Pages.TrabalhoReligioso);

    return (
        <TemplatePage 
            currentPage={currentPage}
            content={<h1>Bruno</h1>}
            showLogoOnTopMenu
        />
    );
};

export default TrabalhoReligiosoPage;