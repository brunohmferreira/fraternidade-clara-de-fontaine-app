import React, { useState } from 'react';
import TemplateStructure from '../../components/shared/TemplateStructure';
import ContentSection from '../../components/educacaoMediunica/ContentSection';
import { Pages } from '../../shared/enums/Pages';
import TemplatePage from '../TemplatePage';

const EducacaoMediunicaPage = () => {

    const [currentPage] = useState(Pages.EducacaoMediunica);

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

export default EducacaoMediunicaPage;