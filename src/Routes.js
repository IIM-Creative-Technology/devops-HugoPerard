import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useLocation } from 'react-use';
import { Home } from './Home'

export const Routes = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="*">
            </Route>
        </Switch>
    );
};