import React, { Component } from 'react';
import './Login.css';
import { Link, withRouter } from 'react-router-dom';
import { Form, Input, Button, Icon, notification } from 'antd';
import {connect} from "react-redux"
import { bindActionCreators } from "redux";
import {login, getCurrentUser} from "../../../actions/userAction";
import { saveToken } from '../../../util/TokenUtils';

const FormItem = Form.Item;

const mapStateToProps=(state) => {
    return {
        accessToken: state.accessToken
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({login:login, getCurrentUser:getCurrentUser},dispatch);
}

class Login extends Component {
    goHome = () =>{
        this.props.history.push("/home");
    }
    render() {
        const AntWrappedLoginForm = Form.create()(connect(mapStateToProps,mapDispatchToProps)(LoginForm))
        return (
            <div className="login-container">
                <h1 className="page-title">Login</h1>
                <div className="login-content">
                    <AntWrappedLoginForm goHome={this.goHome}/>
                </div>
            </div>
        );
    }
}
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
    }
    static getDerivedStateFromProps(nextProps) {
        saveToken(nextProps.accessToken);
    }
    handleSubmit (event) {
        event.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const loginRequest = Object.assign({}, values);
                this.props.login(loginRequest).then(() => {
                   notification.success({
                    message: 'Life Code',
                    description: "You're successfully logged in.",
                  });
                this.props.getCurrentUser();
                this.props.goHome();
                }).catch(function (error) {
                    if(error.response && error.response.status === 401) {
                        notification.error({
                            message: 'Life Code',
                            description: 'Your Username or Password is incorrect. Please try again!'
                        });                    
                    } else {
                        notification.error({
                            message: 'Life Code',
                            description: error.message || 'Sorry! Something went wrong. Please try again!'
                        });                                            
                    }
                });
            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('usernameOrEmail', {
                        rules: [{ required: true, message: 'Please input your username or email!' }],
                    })(
                    <Input 
                        prefix={<Icon type="user" />}
                        size="large"
                        name="usernameOrEmail" 
                        placeholder="Username or Email" />    
                    )}
                </FormItem>
                <FormItem>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input 
                        prefix={<Icon type="lock" />}
                        size="large"
                        name="password" 
                        type="password" 
                        placeholder="Password"  />                        
                )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" size="large" className="login-form-button">Login</Button>
                    Or <Link to="/signup">register now!</Link>
                </FormItem>
            </Form>
        );
    }
}
  
export default withRouter(Login);
