import React, { useEffect, useState } from 'react';
import { mainJS } from '../../js/main';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import swal from 'sweetalert';

function Login() {
    useEffect(() => {
        mainJS()
    }, [])

    const styleError = {    
        color: "red"
    };
    const history = useHistory();
    // Khai báo các trường dl
    const [registerInput, setRegister] = useState({
        signupusername: '',
        signupemail: '',
        signupphone: '',
        signuppassword: '',
        signupcpassword: '',
        error_list: []
    });

    const handleInput = (e) => {
        e.persist();
        setRegister({ ...registerInput, [e.target.name]: e.target.value });
    }

    const registerSubmit = (e) => {
        e.preventDefault();

        const data = {
            signupusername: registerInput.signupusername,
            signupemail: registerInput.signupemail,
            signupphone: registerInput.signupphone,
            signuppassword: registerInput.signuppassword,
            signupcpassword: registerInput.signupcpassword
        }
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`/api/register`, data).then(res => {
                if(res.data.status === 200){
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);
                    swal("Success", res.data.message, "success");
                    history.push('/');
                }else{
                    setRegister({...registerInput , error_list: res.data.validation_errors});
                }
            });
        });
    }

    const [loginInput, setLogin] = useState({
        email: '',
        password: '',
        error_list: []
    });
    const handleLoginInput = (e) => {
        e.persist();
        setLogin({ ...loginInput, [e.target.name]: e.target.value });
    }

    const loginSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: loginInput.email,
            password: loginInput.password
        };
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`api/login`, data).then(res => {
                if (res.data.status === 200) {
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);
                    localStorage.setItem('role', res.data.role);
                    swal("Success", res.data.message, "success");
                    if(res.data.role === 'admin'){
                        history.push('/admin/dashboard');
                    }else{
                        history.push('/');
                    }
                    
                } else if (res.data.status === 401) {
                    swal("Warning", res.data.message, "warning");
                } else {
                    setLogin({ ...loginInput, error_list: res.data.validation_errors });
                }
            });
        });
    }

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
                           
                            <form onSubmit={loginSubmit}>
                                <div className="form-group">
                                    <label className="font-weight-bold">Email <span className="text-danger">*</span></label>
                                    <input type="email" onChange={handleLoginInput} value={loginInput.email} name="email" id="email" className="form-control" placeholder="Nhập email..."  />
                                    <span style={styleError}>{loginInput.error_list.email}</span>
                                </div>
                                <div className="form-group">
                                    <label className="font-weight-bold">Mật khẩu <span className="text-danger">*</span></label>
                                    <input type="password" onChange={handleLoginInput} value={loginInput.password} name="password" id="password" className="form-control" placeholder="Nhập mật khẩu..."  />
                                    <span style={styleError}>{loginInput.error_list.password}</span>
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col">
                                            <label><input type="checkbox" name="condition" id="condition" /> Lưu thông tin.</label>
                                        </div>
                                        <div className="col text-right"> <a  data-toggle="modal" data-target="#forgotPass">Quên mật khẩu?</a> </div>
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
                          
                            <form onSubmit={registerSubmit}>
                                <div className="form-group">
                                    <label className="font-weight-bold">Email <span className="text-danger">*</span></label>
                                    <input type="" onChange={handleInput} value={registerInput.signupemail} name="signupemail" id="signupemail" className="form-control" placeholder="Nhập email..."  />
                                    <div className='text-success' style={{fontStyle: 'italic'}}>* Email này dùng để đăng nhập tài khoản</div>
                                    <span style={styleError}>{registerInput.error_list.signupemail}</span>
                                </div>
                                <div className="form-group">
                                    <label className="font-weight-bold">Họ và tên <span className="text-danger">*</span></label>
                                    <input type="text" onChange={handleInput} value={registerInput.signupusername} name="signupusername" id="signupusername" className="form-control" placeholder="Nhập họ tên..."  />
                                    <span style={styleError}>{registerInput.error_list.signupusername}</span>
                                </div>
                                <div className="form-group">
                                    <label className="font-weight-bold">Số điện thoại</label>
                                    <input type="text" onChange={handleInput} value={registerInput.signupphone} name="signupphone" id="signupphone" className="form-control" placeholder="Nhập số điện thoại..." />
                                    <span style={styleError}>{registerInput.error_list.signupphone}</span>
                                </div>
                                <div className="form-group">
                                    <label className="font-weight-bold">Mật khẩu <span className="text-danger">*</span></label>
                                    <input type="password" onChange={handleInput} value={registerInput.signuppassword} name="signuppassword" id="signuppassword" className="form-control" placeholder="Nhập mật khẩu..." 
                                         />
                                    <span style={styleError}>{registerInput.error_list.signuppassword}</span>
                                </div>
                                <div className="form-group">
                                    <label className="font-weight-bold">Xác nhận mật khẩu <span className="text-danger">*</span></label>
                                    <input type="password"  onChange={handleInput} value={registerInput.signupcpassword} name="signupcpassword" id="signupcpassword" className="form-control"   placeholder="Xác nhận mật khẩu..."  />
                                    <span style={styleError}>{registerInput.error_list.signupcpassword}</span>
                                </div>
                                <div className="form-group">
                                    <input type="submit" name="signupsubmit" value="Đăng ký" className="btn btn-block btn-primary" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="forgotPass" tabIndex={-1} role="dialog" aria-hidden="true">
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
