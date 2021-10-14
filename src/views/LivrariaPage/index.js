import React, { useState } from 'react';
import TemplateStructure from '../../components/shared/TemplateStructure';
import ContentSection from '../../components/livraria/ContentSection';
import { Pages } from '../../shared/enums/Pages';
import TemplatePage from '../TemplatePage';

const LivrariaPage = () => {

    const [currentPage] = useState(Pages.Livraria);

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

export default LivrariaPage;