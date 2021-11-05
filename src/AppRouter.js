import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { configureEnvironment } from './config/environment';
import { updateEnv } from './store/actions/env';
import history from './config/history';
import { Pages } from './shared/enums/Pages';
import CampanhaDoQuiloEDoacaoDeCestasBasicasPage from './views/CampanhaDoQuiloEDoacaoDeCestasBasicasPage';
import DistribuicaoDeSopaELanchePage from './views/DistribuicaoDeSopaELanchePage';
import EducacaoMediunicaPage from './views/EducacaoMediunicaPage';
import EvangelizacaoInfantilPage from './views/EvangelizacaoInfantilPage';
import HomePage from './views/HomePage';
import LivrariaPage from './views/LivrariaPage';
import ProgramaRenascerPage from './views/ProgramaRenascerPage';
import RecepcaoEAtendimentoFraterno from './views/RecepcaoEAtendimentoFraternoPage';
import ReuniaoPublicaPage from './views/ReuniaoPublicaPage';
import SosPrecesPage from './views/SosPrecesPage';
import TrabalhoReligiosoPage from './views/TrabalhoReligiosoPage';

const AppRouter = ({ updateEnv }) => {

    //  #region Environment Configurantion
    updateEnv(configureEnvironment());
    //  #endregion

    return (
        <Router history={history}>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path={`/${Pages.TrabalhoReligioso.path}`} component={TrabalhoReligiosoPage} />
                <Route path={`/${Pages.ReuniaoPublica.path}`} component={ReuniaoPublicaPage} />
                <Route path={`/${Pages.RecepcaoEAtendimentoFraterno.path}`} component={RecepcaoEAtendimentoFraterno} />
                <Route path={`/${Pages.SosPreces.path}`} component={SosPrecesPage} />
                <Route path={`/${Pages.ProgramaRenascer.path}`} component={ProgramaRenascerPage} />
                <Route path={`/${Pages.EvangelizacaoInfantil.path}`} component={EvangelizacaoInfantilPage} />
                <Route path={`/${Pages.CampanhaDoQuiloEDoacaoDeCestasBasicas.path}`} component={CampanhaDoQuiloEDoacaoDeCestasBasicasPage} />
                <Route path={`/${Pages.DistribuicaoDeSopaELanche.path}`} component={DistribuicaoDeSopaELanchePage} />
                <Route path={`/${Pages.EducacaoMediunica.path}`} component={EducacaoMediunicaPage} />
                <Route path={`/${Pages.Livraria.path}`} component={LivrariaPage} />

                {process.env.NODE_ENV === 'development' && <Route path='/' component={HomePage} />}
            </Switch>
        </Router>
    );
};

AppRouter.propTypes = {
    updateEnv: PropTypes.func
};

AppRouter.defaultProps = {
    updateEnv: () => {}
};

export default connect(null, { updateEnv })(AppRouter);