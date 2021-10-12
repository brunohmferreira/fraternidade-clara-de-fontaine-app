import React, { useState } from 'react';
import TemplateStructure from '../../components/shared/TemplateStructure';
import ContentSection from '../../components/campanhaDoQuiloEDoacaoDeCestasBasicas/ContentSection';
import { Pages } from '../../shared/enums/Pages';
import TemplatePage from '../TemplatePage';

const CampanhaDoQuiloEDoacaoDeCestasBasicasPage = () => {

    const [currentPage] = useState(Pages.CampanhaDoQuiloEDoacaoDeCestasBasicas);

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

export default CampanhaDoQuiloEDoacaoDeCestasBasicasPage;