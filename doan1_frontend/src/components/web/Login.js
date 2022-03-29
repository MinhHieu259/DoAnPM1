import React, { useEffect } from 'react';
import { mainJS } from '../../js/main';



function Login() {
    useEffect(() => {
        mainJS()
    }, [])
    return (
        <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
             <div className="container mt-2 mb-4">
            <div className="col-12 ml-auto mr-auto">
                <ul className="nav nav-pills nav-fill mb-1" id="pills-tab" role="tablist">
                    <li className="nav-item"> <a className="nav-link active" id="pills-signin-tab" data-toggle="pill" href="#pills-signin" role="tab" aria-controls="pills-signin" aria-selected="true">Đăng nhập</a> </li>
                    <li className="nav-item"> <a className="nav-link" id="pills-signup-tab" data-toggle="pill" href="#pills-signup" role="tab" aria-controls="pills-signup" aria-selected="false">Đăng ký</a> </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-signin" role="tabpanel" aria-labelledby="pills-signin-tab">
                        <div className="col-sm-12 border border-primary shadow rounded pt-2">
                           
                            <form method="post" id="singninFrom">
                                <div className="form-group">
                                    <label className="font-weight-bold">Email <span className="text-danger">*</span></label>
                                    <input type="email" name="email" id="email" className="form-control" placeholder="Enter valid email" required />
                                </div>
                                <div className="form-group">
                                    <label className="font-weight-bold">Mật khẩu <span className="text-danger">*</span></label>
                                    <input type="password" name="password" id="password" className="form-control" placeholder="***********" required />
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col">
                                            <label><input type="checkbox" name="condition" id="condition" /> Lưu thông tin.</label>
                                        </div>
                                        <div className="col text-right"> <a href="javascript:;" data-toggle="modal" data-target="#forgotPass">Quên mật khẩu?</a> </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="submit" name="submit" value="Đăng nhập" className="btn btn-block btn-primary" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-signup" role="tabpanel" aria-labelledby="pills-signup-tab">
                        <div className="col-sm-12 border border-primary shadow rounded pt-2">
                          
                            <form method="post" id="singnupFrom">
                                <div className="form-group">
                                    <label className="font-weight-bold">Email <span className="text-danger">*</span></label>
                                    <input type="email" name="signupemail" id="signupemail" className="form-control" placeholder="Enter valid email" required />
                                </div>
                                <div className="form-group">
                                    <label className="font-weight-bold">Họ và tên <span className="text-danger">*</span></label>
                                    <input type="text" name="signupusername" id="signupusername" className="form-control" placeholder="Choose your user name" required />
                                    <div className="text-danger"><em>This will be your login name!</em></div>
                                </div>
                                <div className="form-group">
                                    <label className="font-weight-bold">Số điện thoại</label>
                                    <input type="text" name="signupphone" id="signupphone" className="form-control" placeholder="(000)-(0000000)" />
                                </div>
                                <div className="form-group">
                                    <label className="font-weight-bold">Mật khẩu <span className="text-danger">*</span></label>
                                    <input type="password" name="signuppassword" id="signuppassword" className="form-control" placeholder="***********" pattern="^\S{6,}$" onchange="this.setCustomValidity(this.validity.patternMismatch ? 'Must have at least 6 characters' : ''); if(this.checkValidity()) form.password_two.pattern = this.value;"
                                        required />
                                </div>
                                <div className="form-group">
                                    <label className="font-weight-bold">Xác nhận mật khẩu <span className="text-danger">*</span></label>
                                    <input type="password" name="signupcpassword" id="signupcpassword" className="form-control" pattern="^\S{6,}$" onchange="this.setCustomValidity(this.validity.patternMismatch ? 'Please enter the same Password as above' : '');" placeholder="***********" required />
                                </div>
                                <div className="form-group">
                                    <input type="submit" name="signupsubmit" value="Đăng ký" className="btn btn-block btn-primary" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="forgotPass" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <form method="post" id="forgotpassForm">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Forgot Password</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Email <span className="text-danger">*</span></label>
                                    <input type="email" name="forgotemail" id="forgotemail" className="form-control" placeholder="Enter your valid email..." required />
                                </div>
                                <div className="form-group">
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Sign In</button>
                                <button type="submit" name="forgotPass" className="btn btn-primary"><i className="fa fa-envelope"></i> Send Request</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
       
    );
}

export default Login
