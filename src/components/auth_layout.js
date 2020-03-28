import React, {Component} from "react";
import { Redirect } from 'react-router';
import { isEnableAccess } from '../util/TokenUtils';

class AuthLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: !props.children.props.isAuthenticated?false:true
    }
  }
  render() {
    if(this.state.isAuthenticated && !isEnableAccess())
      return <Redirect to="/login" />
    return(
        <>
            {this.props.children}
        </>
    );
  }
}

export default AuthLayout;
