import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Form, Input, Button } from 'element-react';

import './loginContainer.css';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            formType: 'LOGIN', //'REG'
            loginForm: {
                name: '',
                pass: ''
            },
            loginRules: {
                name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                pass: [{ required: true, message: '请输入密码', trigger: 'blur' }]
            },
            registerForm: {
                name: '',
                pass: '',
                checkPass: ''
            },
            registerRules: {
                name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                pass: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    {
                        validator: (rule, value, callback) => {
                            if (value === '') {
                                callback(new Error('请输入密码'));
                            } else {
                                if (this.state.registerForm.checkPass !== '') {
                                    this.refs.registerForm.validateField('checkPass');
                                }
                                callback();
                            }
                        }
                    }
                ],
                checkPass: [
                    { required: true, message: '请再次输入密码', trigger: 'blur' },
                    {
                        validator: (rule, value, callback) => {
                            if (value === '') {
                                callback(new Error('请再次输入密码'));
                            } else if (value !== this.state.registerForm.pass) {
                                callback(new Error('两次输入密码不一致!'));
                            } else {
                                callback();
                            }
                        }
                    }
                ]
            }
        };
    }

    onLoginInputChange = (key, value) => {
        this.setState({
            loginForm: Object.assign({}, this.state.loginForm, { [key]: value })
        });
    };

    onLoginSubmit = e => {
        e.preventDefault();

        this.refs.loginForm.validate(valid => {
            if (valid) {
                this.props.history.push(`/home`)
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    };

    onToRegisterClick = () => {
        this.setState({
            formType: 'REG'
        })
    }

    onRegisterInputChange = (key, value) => {
        this.setState({
            registerForm: Object.assign({}, this.state.registerForm, { [key]: value })
        });
    };

    onRegisterSubmit = e => {
        e.preventDefault();

        this.refs.registerForm.validate(valid => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    };

    onToLoginClick = () => {
        this.setState({
            formType: 'LOGIN'
        })
    }

    render() {
        return (
            <div className="container login-container">
                {this.state.formType === 'LOGIN' ? (
                    <Form ref="loginForm" model={this.state.loginForm} rules={this.state.loginRules} labelWidth="100" className="form login-form">
                        <Form.Item label="用户名" prop="name">
                            <Input value={this.state.loginForm.name} onChange={this.onLoginInputChange.bind(this, 'name')} autoComplete="off" />
                        </Form.Item>
                        <Form.Item label="密码" prop="pass">
                            <Input type="password" value={this.state.loginForm.pass} onChange={this.onLoginInputChange.bind(this, 'pass')} autoComplete="off" />
                        </Form.Item>
                        <div>
                            <span onClick={this.onToRegisterClick}>立即注册</span>
                        </div>
                        <Form.Item>
                            <Button type="primary" onClick={this.onLoginSubmit}>
                                提交
                            </Button>
                        </Form.Item>
                    </Form>
                ) : (
                    <Form ref="registerForm" model={this.state.registerForm} rules={this.state.registerRules} labelWidth="100" className="form register-form">
                        <Form.Item label="用户名" prop="name">
                            <Input value={this.state.registerForm.pass} onChange={this.onRegisterInputChange.bind(this, 'name')} autoComplete="off" />
                        </Form.Item>
                        <Form.Item label="密码" prop="pass">
                            <Input type="password" value={this.state.registerForm.pass} onChange={this.onRegisterInputChange.bind(this, 'pass')} autoComplete="off" />
                        </Form.Item>
                        <Form.Item label="确认密码" prop="checkPass">
                            <Input type="password" value={this.state.registerForm.pass} onChange={this.onRegisterInputChange.bind(this, 'checkPass')} autoComplete="off" />
                        </Form.Item>
                        <div>
                            <span onClick={this.onToLoginClick}>已有账号</span>
                        </div>
                        <Form.Item>
                            <Button type="primary" onClick={this.onRegisterSubmit}>
                                提交
                            </Button>
                        </Form.Item>
                    </Form>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({}, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
