import React, { useState } from 'react';
import TemplateStructure from '../../components/shared/TemplateStructure';
import ContentSection from '../../components/sosPreces/ContentSection';
import { Pages } from '../../shared/enums/Pages';
import TemplatePage from '../TemplatePage';

const SosPrecesPage = () => {

    const [currentPage] = useState(Pages.SosPreces);

    return (
        <TemplatePage
            showLogoOnTopMenu
            currentPage={currentPage}
            content={<TemplateStructure
                page={currentPage}
                content={<ContentSection />}
                daysAndTimesList={currentPage.daysAndTimes}
            />}
        />
    );
};

export default SosPrecesPage;