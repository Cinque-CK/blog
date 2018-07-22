import * as classnames from 'classnames';
import * as React from 'react';
import { setToken } from './utils/storageUtil';
// import './login.css';
interface IHomeRouterProps {
    history: any;
}
class Login extends React.Component<IHomeRouterProps> {
    constructor(props: IHomeRouterProps) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            showForm: true
        };
    }
    public render() {
        const state: any = this.state;
        return (
            <div className="page login-page">
                <div className={classnames('form-wrap', { vanished: !state.showForm })}>
                    <div className="form-item input">
                        <span>Username:</span>
                        <input value={state.userName} onChange={this.onInputChange.bind(this, 'userName')} />
                    </div>
                    <div className="form-item input">
                        <span>Password:</span>
                        <input value={state.password} type="password" onChange={this.onInputChange.bind(this, 'password')} />
                    </div>
                    <div className="form-item button">
                        {' '}
                        ——— <button onClick={this.onLoginClick}>LOGIN</button> ———
                    </div>
                </div>
                <style jsx>{`
                    .login-page {
                        position: relative;
                        background: url('/static/images/login_bg.jpg') no-repeat left center;
                        background-size: cover;
                        font-family: 'Courier New', Courier, monospace;
                        font-weight: bold;
                    }
                    
                    .login-page .form-wrap {
                        position: absolute;
                        left: 2%;
                        bottom: 0;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        width: 30%;
                        height: 55%;
                        background: url('/static/images/paper.png') no-repeat center center;
                        background-size: contain;
                        transform: rotate(-30deg);
                        transition: bottom 0.2s linear;
                    }
                    
                    .login-page .form-wrap.vanished {
                        bottom: -55%;
                    }
                    
                    .login-page .form-item {
                        display: flex;
                        align-items: center;
                        margin-top: 30px;
                    }
                    
                    .login-page .form-item.input {
                        font-size: 18px;
                        font-weight: bold;
                        color: #654f3a;
                    }
                    
                    .login-page .form-item.button {
                        margin-top: 50px;
                        font-weight: bold;
                    }
                    
                    .login-page .form-item.input input {
                        margin-left: 10px;
                        width: 200px;
                        background-color: transparent;
                        border: none;
                        border-bottom: 2px dashed #654f3a;
                        font-family: 'Courier New', Courier, monospace;
                        font-size: 20px;
                        font-weight: bold;
                        color: #070300;
                    }
                    
                    .login-page .form-item.input input:focus {
                        outline: none;
                    }
                    
                    .login-page .form-item.button button {
                        border: none;
                        background-color: transparent;
                        font-size: 24px;
                        color: #070300;
                        cursor: pointer;
                        transition: font-weight 0.3s linear;
                    }
                    
                    .login-page .form-item.button button:hover {
                        text-shadow: -1px -1px 0 #070300;
                        -webkit-transition: all 0.3s;
                        -moz-transition: all 0.3s;
                        -o-transition: all 0.3s;
                        transition: all 0.3s;
                    }
                    `}</style>
            </div>
        );
    }

    private onInputChange = (fieldName: string, e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            [fieldName]: e.target.value
        });
    };

    private onLoginClick = (): void => {
        setToken('12345');
        this.setState({
            showForm: false
        });
        setTimeout(() => {
            this.props.history.push('/main');
        }, 300);
    };
}

export default Login;