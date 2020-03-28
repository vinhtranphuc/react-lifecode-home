import React, { Component } from "react";
import './commons/css/user.css';
import PropTypes from "prop-types";
import {Layout} from 'antd';
import UserHeader from "./user/UserHeader";
const { Content } = Layout;
class UserLayout extends Component {
  render() {
    return(
      <>
        <Layout className="app-container">
          {!this.props.noHeader && <UserHeader/>}
          <Content className="app-content">
            <div className="container">
              {this.props.children}
            </div>
          </Content>
        </Layout>
      </>
    );
  }
}
UserLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noHeader: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

UserLayout.defaultProps = {
  noHeader: false,
  noFooter: false
};

export default UserLayout;
