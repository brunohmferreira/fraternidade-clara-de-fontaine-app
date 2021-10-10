import React, { useState } from 'react';
import TemplateStructure from '../../components/shared/TemplateStructure';
import ContentSection from '../../components/evangelizacaoInfantil/ContentSection';
import { Pages } from '../../shared/enums/Pages';
import TemplatePage from '../TemplatePage';

const EvangelizacaoInfantilPage = () => {

    const [currentPage] = useState(Pages.EvangelizacaoInfantil);

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

export default EvangelizacaoInfantilPage;