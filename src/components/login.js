// import React, { useState, useEffect } from 'react';
// import GoogleLogin from 'react-google-login';
// import { login, demoLogin } from '../middleware/auth';
// import { isEmailWhitelisted } from '../utils';
// import Notification, { notify } from 'react-notify-toast';
// import { NOTIFICATION_TIME_MEDIUM } from '../constants';
// import { connect } from 'react-redux';

// const login = () => {
//     const [redirect, setRedirect] = useState(localStorage.getItem('token') !== null && localStorage.getItem('token') !== '');

//     // useEffect(() => {
//     //     if (loginSuccess) {
//     //         setRedirect(true);
//     //     }
//     // }, [loginSuccess]);


//     const demoUserLogin = () => {
//         demoLogin(`test.user@gmail.com`);
//     }

//     const onLoginSuccess = (response) => {
//         // if (isEmailWhitelisted(response.profileObj.email)) {
//         //     handleLogin(response.tokenId);
//         // } else {
//         //     notify.show('Please login with your gmail', 'error', NOTIFICATION_TIME_MEDIUM);
//         // }
//     }

//     const onLoginFailure = (response) => {
//         // if (response.error !== 'popup_closed_by_user') {
//         //     notify.show('There was an error while signing you in. Please try again', 'error', NOTIFICATION_TIME_MEDIUM);
//         // }
//     }

//     return (
//         <div className="hold-transition login-page">
//             <Notification options={{ zIndex: 200, top: '50px' }} />
//             <div className="login-box">
//                 <div className="login-logo">
//                     <b>Coronovirus</b>
//                 </div>
//                 <div className="card">
//                     <div className="card-body login-card-body">
//                         <p className="login-box-msg">Sign in to start your session</p>
//                         <form>
//                             <div className="input-group mb-3">
//                                 <input type="email" className="form-control" placeholder="Email" />
//                                 <div className="input-group-append">
//                                     <div className="input-group-text">
//                                         <span className="fas fa-envelope" />
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="input-group mb-3">
//                                 <input type="password" className="form-control" placeholder="Password" />
//                                 <div className="input-group-append">
//                                     <div className="input-group-text">
//                                         <span className="fas fa-lock" />
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="row">
//                                 <button type="button" className="btn btn-primary btn-block">Sign In</button>
//                             </div>
//                         </form>
//                         <div className="social-auth-links text-center mb-3">
//                             <p>- OR -</p>
//                             <button className="btn btn-block btn-danger">
//                                 <i className="fab fa-google-plus mr-2" /> Sign in using Google+
//         </button>
//                             <GoogleLogin
//                                 clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
//                                 render={renderProps => (
//                                     <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="btn btn-block btn-info">
//                                         Sign in using your Performance Email
//                                     </button>
//                                 )}
//                                 onSuccess={onLoginSuccess}
//                                 onFailure={onLoginFailure}
//                             />
//                         </div>
//                         <div className='col-md-12'>
//                             <a href="register.html" class="text-center">Register a new membership</a>
//                             <button onClick={() => demoUserLogin('admin')} className='btn btn-primary mr-2' style={{ 'margin': '.5rem' }}>Admin</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// const mapStateToProps = (state) => {
//     const { loginSuccess } = state.authReducer;
//     return {
//         loginSuccess: loginSuccess
//     }
// }

// const mapDispatchToProps = (dispatch) => {

//     return {
//         handleLogin: () => dispatch(login()),
//         demoLogin: () => dispatch(demoLogin())
//     };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(login);