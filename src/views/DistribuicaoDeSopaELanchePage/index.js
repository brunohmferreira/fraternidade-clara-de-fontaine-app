import React, { useState } from 'react';
import TemplateStructure from '../../components/shared/TemplateStructure';
import ContentSection from '../../components/distribuicaoDeSopaELanche/ContentSection';
import { Pages } from '../../shared/enums/Pages';
import TemplatePage from '../TemplatePage';

const DistribuicaoDeSopaELanchePage = () => {

    const [currentPage] = useState(Pages.DistribuicaoDeSopaELanche);

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

export default DistribuicaoDeSopaELanchePage;