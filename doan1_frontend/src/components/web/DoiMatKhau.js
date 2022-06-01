import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { mainJS } from '../../js/main';

function DoiMatKhau() {

    useEffect(() => {
        mainJS()
    }, [])


    return (
        <div className="container">
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className='row'>
                <div className='col-md-3'>
                    <div className="card">
                        <div className="card-header text-white bg-primary text-center">
                            TRANG CÁ NHÂN
                        </div>

                        <div className="card-body">
                            <img src="/assets/img/agent-3.jpg" width={80} height={80} className="rounded mx-auto d-block mb-3" />
                            <p className='text-center mt-3' style={{ fontWeight: "bold" }}>Nguyễn Minh Hiếu</p>

                        </div>
                    </div>
                    <br />
                    <div className="card">
                        <div className="card-header">
                            Quản lý thông tin cá nhân
                        </div>
                        <div className="card-body">
                            <ul>
                                <li><Link to="/thongtincanhan">Thông tin cá nhân</Link></li>
                                <li><Link to="/doi-mat-khau">Thay đổi mật khẩu</Link></li>
                            </ul>
                        </div>
                    </div>
                    <br />
                    <div className="card">
                        <div className="card-header">
                            Quản lý tin đăng
                        </div>
                        <div className="card-body">
                            <ul>
                                <li><Link to="/thongtincanhan">Đăng mới</Link></li>
                                <li><Link to="/thongtincanhan">Danh sách tin</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='col-md-9'>
                    <div className="card">
                        <div className="card-header text-white bg-primary  text-center">
                            ĐỔI MẬT KHẨU
                        </div>
                        <div className="card-body">
                            <div className="card">
                                <div className="card-body">
                                    <div className='row'>
                                        <div className='col-md-2'>
                                            <label>Mật khẩu cũ</label>
                                        </div>

                                        <div className='col-md-8'>
                                            <input type="text" placeholder='Nhập mật khẩu cũ' className='form-control' />
                                        </div>
                                    </div>
                                    <br />
                                    <div className='row'>
                                        <div className='col-md-2'>
                                            <label>Mật khẩu mới</label>
                                        </div>

                                        <div className='col-md-8'>
                                            <input type="text" placeholder='Nhập mật khẩu mới' className='form-control' />
                                        </div>
                                    </div>
                                    <br />
                                    <div className='row'>
                                        <div className='col-md-2'>
                                            <label>Nhập lại mật khẩu</label>
                                        </div>

                                        <div className='col-md-8'>
                                            <input type="text" placeholder='Nhập lại mật khẩu' className='form-control' />
                                        </div>
                                    </div>

                                    <div className='container text-center mt-5'>
                                        <button type='button' className='btn btn-primary'>Cập nhật</button>
                                    </div>


                                </div>
                            </div>


                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default DoiMatKhau;