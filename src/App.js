import React, { Component } from 'react';
import {withRouter, Switch} from 'react-router-dom';
import AuthRoute from './authRoutes';
import LoadingIndicator from './components/commons/LoadingIndicator';
import withTracker from "./withTracker";
import routes from './routes';
import {notification } from 'antd';
import {createBrowserHistory } from "history";
import {connect} from "react-redux"
import {bindActionCreators } from "redux";
import {getCurrentUser} from "./actions/userAction";
import {isEnableAccess } from './util/TokenUtils';

export const history = createBrowserHistory(); 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    }
    notification.config({
      placement: 'topRight',
      top: 70,
      duration: 3,
    });
  }
  componentDidMount() {
    if(isEnableAccess()) {
      this.props.getCurrentUser();
    }
  }

  render() {
    if(this.state.isLoading) {
      return <LoadingIndicator />
    }
    return (
      <Switch history={history}>
          {routes.map((route, index) => {
            return (
              <AuthRoute
                isAuthenticated={route.isAuthenticated}
                key={index}
                path={route.path}
                exact={route.exact}
                component={withTracker(props => {
                  return (
                    <route.layout {...props}>
                      <route.component {...props} />
                    </route.layout>
                  );
                })} 
              />
            );
          })}
      </Switch>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getCurrentUser:getCurrentUser},dispatch);
}
export default connect(null,mapDispatchToProps)(withRouter(App));