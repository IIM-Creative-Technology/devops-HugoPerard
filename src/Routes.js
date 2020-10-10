import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Home'

export const Routes = () =>  (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*">
        </Route>
    </Switch>
);