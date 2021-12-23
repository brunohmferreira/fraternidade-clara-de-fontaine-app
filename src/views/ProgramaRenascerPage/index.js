import React, { useState } from 'react';
import TemplateStructure from '../../components/shared/TemplateStructure';
import ContentSection from '../../components/programaRenascer/ContentSection';
import { Pages } from '../../shared/enums/Pages';
import TemplatePage from '../TemplatePage';

const ProgramaRenascerPage = () => {

    const [currentPage] = useState(Pages.ProgramaRenascer);

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

export default ProgramaRenascerPage;