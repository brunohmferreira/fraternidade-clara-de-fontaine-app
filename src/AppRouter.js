import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './config/history';
import { Pages } from './shared/enums/Pages';
import HomePage from './views/HomePage';
import TrabalhoReligiosoPage from './views/TrabalhoReligiosoPage';

const AppRouter = () => {

    //#region configuração de ambiente
    //TODO: ambientes
    //updateEnv(configureEnvironment());
    //#endregion

    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path={`/${Pages.TrabalhoReligioso.path}`} component={TrabalhoReligiosoPage} />

                {process.env.NODE_ENV === 'development' && <Route path="/" component={HomePage} />}
            </Switch>
        </Router>
    );
}

export default AppRouter;