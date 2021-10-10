import React, { useState } from 'react';
import TemplateStructure from '../../components/shared/TemplateStructure';
import ContentSection from '../../components/recepcaoEAtendimentoFraterno/ContentSection';
import { Pages } from '../../shared/enums/Pages';
import TemplatePage from '../TemplatePage';

const RecepcaoEAtendimentoFraterno = () => {

    const [currentPage] = useState(Pages.RecepcaoEAtendimentoFraterno);

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

export default RecepcaoEAtendimentoFraterno;