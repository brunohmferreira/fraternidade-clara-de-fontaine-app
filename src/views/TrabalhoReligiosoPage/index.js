import React, { useState } from 'react';
import TemplateStructure from '../../components/shared/TemplateStructure';
import ContentSection from '../../components/trabalhoReligioso/ContentSection';
import { Pages } from '../../shared/enums/Pages';
import TemplatePage from '../TemplatePage';

const TrabalhoReligiosoPage = () => {

    const [currentPage] = useState(Pages.TrabalhoReligioso);

    return (
        <TemplatePage 
            showLogoOnTopMenu
            currentPage={currentPage}
            content={<TemplateStructure 
                page={currentPage} 
                content={<ContentSection />} 
            />}
        />
    );
};

export default TrabalhoReligiosoPage;