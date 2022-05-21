import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';


function NavBar() {
    const styleError = {
        color: "red",
        fontStyle: "italic"
    };

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
                if (res.data.status === 200) {
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);
                    localStorage.setItem('role', res.data.role);
                    localStorage.setItem('user_id', res.data.id);
                    swal("Success", res.data.message, "success");
                    history.push('/thongtincanhan');
                } else {
                    setRegister({ ...registerInput, error_list: res.data.validation_errors });
                }
            });
        });
    }

    const loginFaceBook = (e) => {
        e.preventDefault();
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.get(`/api/login-facebook`).then(res => {
               
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
                    localStorage.setItem('user_id', res.data.id);
                    swal("Success", res.data.message, "success");
                    if (res.data.role === 'admin') {
                        history.push('/admin/dashboard');
                    } else {
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
    const history = useHistory();
    const [{ alt, src }, setPicture] = useState([]);

    useEffect(() => {
        let userId = localStorage.getItem('user_id');
        if (userId != null) {
            axios.get(`/api/edit-thong-tin-ca-nhan/${userId}`).then(res => {
                if (res.data.status === 200) {
                    setPicture({ src: "http://localhost:8000/" + res.data.nguoiDung.avatar })
                } else if (res.data.status === 404) {
                    swal("Lỗi", res.data.message, "error");
                    history.push('/');
                }
            });
        }
    }, [localStorage.getItem('user_id')]);

    const logoutSubmit = (e) => {
        e.preventDefault();
        axios.post(`api/logout`).then(res => {
            if (res.data.status === 200) {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');
                localStorage.removeItem('role');
                localStorage.removeItem('user_id');
                swal("Success", res.data.message, "success");
                history.push('/');
            }
        });
    }
    var AuthButtons = '';
    if (!localStorage.getItem('auth_token')) {
        AuthButtons = (
            <ul className='navbar-nav'>
                <li className="nav-item">
                    <Link className="nav-link" to="" data-toggle="modal" data-target="#modalLoginForm">Đăng nhập</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="" data-toggle="modal" data-target="#modalRegisterForm">Đăng ký</Link>
                </li>
            </ul>
        );
    } else {
        AuthButtons = (
            <div className="nav-item dropdown">
                <Link to="#" data-toggle="dropdown" className="nav-link dropdown-toggle user-action"> <img src={src} alt="anh" width={"30"} className="img-circle" /></Link>
                <div className="dropdown-menu">
                    <Link to="#" className="dropdown-item"><i className="fa-solid fa-list-check"></i> Quản lý tin đăng</Link>
                    <Link to="/thongtincanhan" className="dropdown-item"><i className="fa-solid fa-user"></i> Thông tin cá nhân</Link>
                    <Link to="#" className="dropdown-item"><i className="fa-solid fa-lock"></i> Thay đổi mật khẩu</Link>
                    <div className="dropdown-divider"></div>
                    <Link to="#" onClick={logoutSubmit} className="dropdown-item"><i className="fa-solid fa-power-off"></i> Đăng xuất</Link>
                </div>
            </div>
        );
    }

    var adminButton = '';
    if (localStorage.getItem('role') === 'admin') {
        adminButton = (
            <li className="nav-item">
                <Link className="nav-link " to="admin/dashboard">Quản trị</Link>
            </li>
        );
    } else if (localStorage.getItem('role') === '' || localStorage.getItem('role') == null) {
        adminButton = (
            <li className="nav-item">
            </li>
        );
    }

    return (
        <div>
            <div className="box-collapse">
                <div className="title-box-d">
                    <h3 className="title-d">Tìm kiếm</h3>
                </div>
                <span className="close-box-collapse right-boxed bi bi-x"></span>
                <div className="box-collapse-wrap form">
                    <form className="form-a">
                        <div className="row">
                            <div className="col-md-12 mb-2">
                                <div className="form-group">
                                    <label className="pb-2" >Từ khóa</label>
                                    <input type="text" className="form-control form-control-lg form-control-a" placeholder="Nhập từ khóa..." />
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2">Loại</label>
                                    <select className="form-control form-select form-control-a" id="Type">
                                        <option>All Type</option>
                                        <option>For Rent</option>
                                        <option>For Sale</option>
                                        <option>Open House</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2">Thành phố</label>
                                    <select className="form-control form-select form-control-a" id="city">
                                        <option>All City</option>
                                        <option>Alabama</option>
                                        <option>Arizona</option>
                                        <option>California</option>
                                        <option>Colorado</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2">Số phòng ngủ</label>
                                    <select className="form-control form-select form-control-a" id="bedrooms">
                                        <option>Any</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2">Nhà để xe</label>
                                    <select className="form-control form-select form-control-a" id="garages">
                                        <option>Any</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                        <option>04</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2">Phòng tắm</label>
                                    <select className="form-control form-select form-control-a" id="bathrooms">
                                        <option>Any</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2">Giá tối thiểu</label>
                                    <select className="form-control form-select form-control-a" id="price">
                                        <option>Unlimite</option>
                                        <option>$50,000</option>
                                        <option>$100,000</option>
                                        <option>$150,000</option>
                                        <option>$200,000</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <button type="submit" className="btn btn-b">Tìm kiếm</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
                <div className="container">
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <Link className="navbar-brand text-brand" to="/">Estate<span className="color-b">Agency</span></Link>

                    <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Trang chủ</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link " to="#">About</Link>
                            </li>
                            {AuthButtons}

                            {adminButton}
                            <li>
                                <button style={{ backgroundColor: "white", borderColor: "gray" }} className='btn'>Đăng tin</button>
                            </li>
                        </ul>
                    </div>

                    <button type="button" className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
                        <i className="bi bi-search"></i>
                    </button>

                </div>
            </nav>


            <div className="modal fade" id="modalRegisterForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <form onSubmit={registerSubmit}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header text-center">
                                <h4 className="modal-title w-100 font-weight-bold">Đăng ký</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body mx-3">
                                <div className="md-form mb-2">
                                    <i className="fas fa-user prefix grey-text"></i>
                                    <input type="text" onChange={handleInput} value={registerInput.signupusername} name="signupusername" id="signupusername" className={`form-control ${registerInput.error_list.signupusername != null || registerInput.signupusername.length <= 5 ? 'is-invalid' : 'is-valid'}`} placeholder="Nhập họ tên..." />
                                    <span style={styleError}>{registerInput.error_list.signupusername}</span>
                                </div>
                                <div className="md-form mb-2">
                                    <i className="fas fa-envelope prefix grey-text"></i>
                                    <input type="" onChange={handleInput} value={registerInput.signupemail} name="signupemail" id="signupemail" className={`form-control ${registerInput.error_list.signupusername != null ? 'is-invalid' : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(registerInput.signupemail) ? 'is-valid' : 'is-invalid'}`} placeholder="Nhập email..." />
                                    <div className='text-success' style={{ fontStyle: 'italic' }}>* Email này dùng để đăng nhập tài khoản</div>
                                    <span style={styleError}>{registerInput.error_list.signupemail}</span>
                                </div>
                                <div className="md-form mb-2">
                                    <i className="fa-solid fa-phone"></i>
                                    <input type="text" onChange={handleInput} value={registerInput.signupphone} name="signupphone" id="signupphone" className={`form-control ${registerInput.error_list.signupphone != null || registerInput.signupphone.length < 10 ? 'is-invalid' : 'is-valid'}`} placeholder="Nhập số điện thoại..." />
                                    <span style={styleError}>{registerInput.error_list.signupphone}</span>
                                </div>

                                <div className="md-form mb-4">
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <i className="fa-solid fa-unlock"></i>
                                            <input type="password" onChange={handleInput} value={registerInput.signuppassword} name="signuppassword" id="signuppassword" className={`form-control ${registerInput.error_list.signuppassword != null || registerInput.signuppassword.length < 8 ? 'is-invalid' : 'is-valid'}`} placeholder="Nhập mật khẩu..."
                                            />
                                            <span style={styleError}>{registerInput.error_list.signuppassword}</span>
                                        </div>

                                        <div className='col-md-6'>
                                            <i className="fa-solid fa-lock"></i>
                                            <input type="password" onChange={handleInput} value={registerInput.signupcpassword} name="signupcpassword" id="signupcpassword" className={`form-control ${registerInput.error_list.signupcpassword != null || registerInput.signupcpassword.length < 8 ? 'is-invalid' : registerInput.signupcpassword == registerInput.signuppassword ? 'is-valid' : 'is-invalid'}`} placeholder="Xác nhận mật khẩu..." />
                                            <span style={styleError}>{registerInput.error_list.signupcpassword}</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="modal-footer d-flex justify-content-center">
                                <input type="submit" name="signupsubmit" value="Đăng ký" className="btn btn-block btn-primary" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div className="modal fade" id="modalLoginForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <form onSubmit={loginSubmit}>
                        <div className="modal-content">
                            <div className="modal-header text-center">
                                <h4 className="modal-title w-100 font-weight-bold">Đăng nhập</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body mx-3">
                                <div className="md-form mb-3">
                                    <i className="fas fa-envelope prefix grey-text"></i>
                                    <input type="email" onChange={handleLoginInput} value={loginInput.email} name="email" id="email" className="form-control" placeholder="Tên đăng nhập / Email" />
                                    <span style={styleError}>{loginInput.error_list.email}</span>
                                </div>

                                <div className="md-form mb-3">
                                    <i className="fas fa-lock prefix grey-text"></i>
                                    <input type="password" onChange={handleLoginInput} value={loginInput.password} name="password" id="password" className="form-control" placeholder="Nhập mật khẩu..." />
                                    <span style={styleError}>{loginInput.error_list.password}</span>
                                </div>

                            </div>
                            <div className="modal-footer d-flex justify-content-center">
                                <input type="submit" name="submit" value="Đăng nhập" className="btn btn-danger" />
                            </div>
                            <hr class="hr-text" data-content="Hoặc" />
                            <div className='container mb-5'>
                                <div className='row text-center'>
                                    <div className='col-md-12'>
                                        <button onClick={loginFaceBook} className='btn' style={{borderColor: "GrayText"}} type='button'><img width={20} src='facebook.png' alt='Anh' /> Facebook</button>
                                    </div>
                                </div>
                            </div>
                            <p className='text-center'>Chưa là thành viên ? <Link className='text-danger' to='#'>Đăng ký</Link> tại đây</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NavBar;