import React, { useEffect } from 'react';
import { mainJS } from '../../js/main';
import { Link } from 'react-router-dom';

function NapTien2() {

    document.title = 'Nạp tiền';
    useEffect(() => {
        mainJS();
    }, [])


    return (
        <div className="container">
            <br />
            <br />
            <br />
            <br />
            <br/>
            <div className='container text-center'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className="card">
                            <div className="card-header text-white bg-primary text-center">
                                TRANG CÁ NHÂN
                            </div>

                            <div className="card-body">
                                <img src="/assets/img/agent-1.jpg" width={80} height={80} className="rounded mx-auto d-block mb-3" />
                                <p className='text-center mt-3' style={{ fontWeight: "bold" }}>Nguyễn Minh Hiếu</p>
                                <div className='container' style={{ backgroundColor: "#E5E5E5" }}>
                                    <p className='text-center'>Số dư: 300.000 đ</p>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col text-center">
                                            <button type='button' className="btn btn-danger">Nạp tiền</button>
                                        </div>
                                    </div>
                                </div>
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
                                    <li><Link to="/dang-tin-mua-ban-nha-dat">Đăng mới</Link></li>
                                    <li><Link to="/danh-sach-tin-da-dang">Danh sách tin</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-9'>
                        <div className="card">
                            <h2 className='text-center mt-5'>Gửi minh chứng nạp tiền</h2>
                            <div className="card-body">
                                <input className='form-control' placeholder='Số tiền nạp' type="text" />
                                <br />
                                <input className='form-control' placeholder='Nội dung' type="text" />
                                <br />
                                <p className='text-left'>Hình ảnh <span className='text-danger'>*</span></p>
                                <input type="file" className='form-control' />
                                <br />
                                <br />
                                <br />
                                <button style={{ width: "100px" }} className='btn btn-danger'>Gửi</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NapTien2;