import React, { useState, useEffect } from 'react';
import { demoLogin } from '../middleware/auth';
import Notification from 'react-notify-toast';
import { connect } from 'react-redux';

const loginPage = ({loginSuccess}) => {
    const [redirect, setRedirect] = useState(localStorage.getItem('token') !== null && localStorage.getItem('token') !== '');

    useEffect(() => {
        if (loginSuccess) {
            setRedirect(true);
        }
    }, [loginSuccess]);


    const demoUserLogin = () => {
        demoLogin(`test.user@gmail.com`);
    }

    return (
        <div className="hold-transition login-page">
            <Notification options={{ zIndex: 200, top: '50px' }} />
            <div className="login-box">
                <div className="login-logo">
                    <b>Coronovirus</b>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        {/* <form>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Email" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Password" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <button type="button" className="btn btn-primary btn-block">Sign In</button>
                            </div>
                        </form> */}
                        {/* <div className="social-auth-links text-center mb-3">
                            <p>- OR -</p>
                            <button className="btn btn-block btn-danger">
                                <i className="fab fa-google-plus mr-2" /> Sign in using Google+
        </button>
                            <GoogleLogin
                                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                                render={renderProps => (
                                    <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="btn btn-block btn-info">
                                        Sign in using your Performance Email
                                    </button>
                                )}
                                onSuccess={onLoginSuccess}
                                onFailure={onLoginFailure}
                            />
                        </div> */}
                        <div className='col-md-12 text-center'>
                            <button onClick={() => demoUserLogin()} className='btn btn-primary' style={{ 'margin': '.5rem' }}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const { loginSuccess } = state.authReducer;
    return {
        loginSuccess: loginSuccess
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        demoLogin: () => dispatch(demoLogin())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(loginPage);