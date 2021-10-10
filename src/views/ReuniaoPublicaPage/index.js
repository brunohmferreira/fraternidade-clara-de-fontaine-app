import React, { useState } from 'react';
import TemplateStructure from '../../components/shared/TemplateStructure';
import ContentSection from '../../components/reuniaoPublica/ContentSection';
import { Pages } from '../../shared/enums/Pages';
import TemplatePage from '../TemplatePage';

const ReuniaoPublicaPage = () => {

    const [currentPage] = useState(Pages.ReuniaoPublica);

    return (
        <TemplatePage 
            showLogoOnTopMenu
            currentPage={currentPage}
            content={<TemplateStructure 
                page={currentPage} 
                content={<ContentSection />}
                showDaysAndTimes
                daysAndTimesList={currentPage.daysAndTimes} 
            />}
        />
    );
};

export default ReuniaoPublicaPage;