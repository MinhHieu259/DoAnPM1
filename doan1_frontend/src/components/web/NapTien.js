import React, { useEffect } from 'react';
import { mainJS } from '../../js/main';
import { Link } from 'react-router-dom';

function NapTien() {

    document.title = 'Nạp tiền';
    useEffect(() => {
        mainJS();
    }, [])

    const radio = {
        "-webkitAppearance": "none"
    }

    const label = {

    }



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
                                <li><Link to="/thongtincanhan">Đăng mới</Link></li>
                                <li><Link to="/thongtincanhan">Danh sách tin</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='col-md-9'>
                    <div className="card">
                        <div className="card-body">
                            <h6 style={{ color: "blue" }}>Bạn hãy chọn ngân hàng <span className='text-danger'>*</span></h6>
                            <input className='bank' style={radio} type="radio" name='bank' id='viettinbank' />
                            <label className='labelBank text-center' for="viettinbank">
                                <img width="90" height="50" src='/assets/img/ngan-hang-vietinbank-2.jpg' />
                            </label>

                            <input className='bank' style={radio} type="radio" name='bank' id='vietcombank' />
                            <label className='labelBank text-center' for="vietcombank">
                                <img width="90" height="50" src='/assets/img/logo-vietcombank.jpg' />
                            </label>

                            <input className='bank' style={radio} type="radio" name='bank' id='kienlongbank' />
                            <label className='labelBank text-center' for="kienlongbank">
                                <img width="90" height="50" src='/assets/img/kien-long-bank-1.jpg' />
                            </label>

                            <input className='bank' style={radio} type="radio" name='bank' id='ncb' />
                            <label className='labelBank text-center' for="ncb">
                                <img width="90" height="50" src='/assets/img/ncb.png' />
                            </label>

                            <input className='bank' style={radio} type="radio" name='bank' id='techcombank' />
                            <label className='labelBank text-center' for="techcombank">
                                <img width="90" height="50" src='/assets/img/techcombank.png' />
                            </label>

                            <input className='bank' style={radio} type="radio" name='bank' id='bidv' />
                            <label className='labelBank text-center' for="bidv">
                                <img width="90" height="50" src='/assets/img/ngan-hang-BIDV.jpg' />
                            </label>

                            <input className='bank' style={radio} type="radio" name='bank' id='vpbank' />
                            <label className='labelBank text-center' for="vpbank">
                                <img width="90" height="50" src='/assets/img/vpbank.jpg' />
                            </label>

                            <input className='bank' style={radio} type="radio" name='bank' id='dongabank' />
                            <label className='labelBank text-center' for="dongabank">
                                <img width="90" height="50" src='/assets/img/dong-bank1.jpg' />
                            </label>

                            <input className='bank' style={radio} type="radio" name='bank' id='acbbank' />
                            <label className='labelBank text-center' for="acbbank">
                                <img width="90" height="50" src='/assets/img/logo-acb-1.png' />
                            </label>

                            <input className='bank' style={radio} type="radio" name='bank' id='mbbank' />
                            <label className='labelBank text-center' for="mbbank">
                                <img width="90" height="50" src='/assets/img/mbbank.jpg' />
                            </label>

                            <input className='bank' style={radio} type="radio" name='bank' id='sacombank' />
                            <label className='labelBank text-center' for="sacombank">
                                <img width="90" height="50" src='/assets/img/logo-sacombank.jpg' />
                            </label>

                            <input className='bank' style={radio} type="radio" name='bank' id='agribank' />
                            <label className='labelBank text-center' for="agribank">
                                <img width="90" height="50" src='/assets/img/agribank2.png' />
                            </label>

                            <input className='bank' style={radio} type="radio" name='bank' id='eximbank' />
                            <label className='labelBank text-center' for="eximbank">
                                <img width="90" height="50" src='/assets/img/eximbank.jpg' />
                            </label>

                            <input className='bank' style={radio} type="radio" name='bank' id='shbbank' />
                            <label className='labelBank text-center' for="shbbank">
                                <img width="90" height="50" src='/assets/img/Logo-SHB-VN.png' />
                            </label>

                            <input className='bank' style={radio} type="radio" name='bank' id='lienVietPost' />
                            <label className='labelBank text-center' for="lienVietPost">
                                <img width="90" height="50" src='/assets/img/DTPS-140.png' />
                            </label>

                            <div className='container'>
                                <br />
                                <div className='row'>
                                    <div className='col-md-3 text-center'>
                                        <span>Số tiền muốn nạp <span className='text-danger'>*</span></span>
                                        <br />
                                        <span style={{ fontSize: "14px" }}>(Chưa trừ thuế, phí)</span>
                                    </div>
                                    <div className='col-md-6'>
                                        <input type="text" placeholder='Nhập số tiền muốn nạp' className='form-control' />
                                    </div>
                                    <div className='col-md-3'>
                                        <span style={{ fontSize: "14px" }}>Số tiền nạp tối thiểu 10.000đ</span>
                                    </div>
                                </div>
                                <br />
                                <div className='row'>
                                    <div className='col-md-3 text-center'>
                                        <span>Tên khách hàng <span className='text-danger'>*</span></span>
                                    </div>
                                    <div className='col-md-6'>
                                        <input type="text" placeholder='Nhập tên khách hàng' className='form-control' />
                                    </div>
                                </div>
                                <br />
                                <div className='row'>
                                    <div className='col-md-3 text-center'>
                                        <span>Email <span className='text-danger'>*</span></span>
                                    </div>
                                    <div className='col-md-6'>
                                        <input type="text" placeholder='Nhập email' className='form-control' />
                                    </div>
                                </div>
                                <br />
                                <div className='row'>
                                    <div className='col-md-3 text-center'>
                                        <span>Số điện thoại <span className='text-danger'>*</span></span>
                                    </div>
                                    <div className='col-md-6'>
                                        <input type="text" placeholder='Nhập số điện thoại' className='form-control' />
                                    </div>
                                </div>
                                <br />
                                <div className='row'>
                                    <div className='col-md-3 text-center'>
                                        <span>Nội dung giao dịch <span className='text-danger'>*</span></span>
                                    </div>
                                    <div className='col-md-6'>
                                        <textarea placeholder='Nội dung giao dịch' className='form-control'></textarea>
                                    </div>
                                </div>
                                <br />
                                <div className='row'>
                                    <div className='col-md-3 text-center'>
                                        <span>Mã an toàn <span className='text-danger'>*</span></span>
                                    </div>
                                    <div className='col-md-6'>
                                        <input type="text" placeholder='Nhập mã an toàn' className='form-control' />
                                    </div>
                                </div>
                                <br/>
                                <div className="container text-center">
                                    <button type='button' className='btn btn-primary'>Tiếp tục</button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default NapTien;