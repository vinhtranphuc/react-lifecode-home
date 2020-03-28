import React from 'react';
import {
    Route,
} from "react-router-dom";
import AuthLayout from './components/auth_layout';

const AuthRoute = ({ component: Component, ...rest }) => {
  return(
  <Route
    render={props =>
        <AuthLayout>
          <Component {...rest} {...props} />
        </AuthLayout>
    }
  />
);}

export default AuthRoute