import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import 'normalize.css'
import 'element-theme-default';

import Login from './containers/login';
import Home from './containers/home';


const App = ({ store }) => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() =>
                        true ? (
                            <Redirect to="/home" />
                        ) : (
                            <Redirect to="/login" />
                        )
                    }
                />
                <Route path="/login" component={Login} />
                <Route path="/home" component={Home} />
            </Switch>
        </BrowserRouter>
    </Provider>
);

export default App;
