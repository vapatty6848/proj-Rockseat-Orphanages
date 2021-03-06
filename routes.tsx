import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';

// Pages
import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

function Routes(){
  return (
    // Por dentro de todas as rotas é necessario ter o BrowserRouter
    <BrowserRouter>

      {/* O Switch vai fazer com que apenas uma unica rota seja chamada */}
      <Switch>
        {/* exact é usado vai fazer uma comparação de igualdade ou seja, se "/" == "/" */}
        <Route path="/" exact component={LandingLanding}/>
        <Route path="/app" component={OrphanagesMap}/>
      </Switch>

    </BrowserRouter>
  )
}

export default Routes;