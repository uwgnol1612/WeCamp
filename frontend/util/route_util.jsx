import { Redirect, withRouter, Route } from "react-router-dom";
import { connect } from 'react-redux';
import React from 'react';


const mapStateToProps = (state) => (
    { loggedIn: Boolean(state.session.id) }
)

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route 
        path={path}
        exact={exact}
        render={ props => !loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
    />
);

export const AuthRoute = withRouter(
    connect(mapStateToProps, null)(Auth)
);