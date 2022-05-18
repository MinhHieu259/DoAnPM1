import React, { useEffect, useState } from 'react';
import { mainJS } from '../../js/main';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import swal from 'sweetalert';


function UserInfor() {
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    const [inforInput, setUserInfor] = useState([]);
    const [error, setError] = useState([]);
    const [picture, setPicture] = useState([]);
    useEffect(() => {
        mainJS()
    }, []);


    const handleInput = (e) => {
        e.persist();
        setUserInfor({ ...inforInput, [e.target.name]: e.target.value });
    }

    const handleImage = (e) => {
        e.persist();
        setPicture({ image: e.target.files[0] });
        var file = picture;
        var reader = new FileReader();
        var url = reader.readAsDataURL(file);
    }

    useEffect(() => {
        const userId = localStorage.getItem('user_id');
        axios.get(`/api/edit-thong-tin-ca-nhan/${userId}`).then(res => {
            if (res.data.status === 200) {
                setUserInfor(res.data.nguoiDung);
            } else if (res.data.status === 404) {
                swal("Lỗi", res.data.message, "error");
                history.push('/');
            }
            setLoading(false);
        });
    }, []);

    const updateInfoUser = (e) => {
        e.preventDefault();
        const user_id = localStorage.getItem('user_id');
        const data = inforInput;
        axios.put(`/api/update-thong-tin-canhan/${user_id}`, data).then(res => {
            if (res.data.status === 200) {
                swal("Thành công", res.data.message, "success");
                setError([]);
            } else if (res.data.status === 422) {
                swal("Chưa điền đầy đủ thông tin", "", "error");
                setError(res.data.errors);
            } else if (res.data.status === 404) {
                swal("Lỗi", res.data.message, "error");
                history.push('/thongtincanhan');
            }
        });
    }

    var gioiTinh = '';

    gioiTinh = (
        <select name="gioiTinh" onChange={handleInput} value={inforInput.gioiTinh} className='form-control'>
            <option value="1" >Nam</option>
            <option value="0" >Nữ</option>
        </select>

    );


    return (
        <div className='container'>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className='row'>
                <div className='col-md-3'>
                    <div class="card">
                        <div className="card-header text-white bg-primary text-center">
                            TRANG CÁ NHÂN
                        </div>
                        <div className="card-body">
                            <img src="assets/img/agent-4.jpg" width={80} height={80} className="rounded mx-auto d-block mb-3" alt="..." />
                            <input type="file" name="image" onChange={handleImage} className='form-control' />
                            <p className='text-center'>{inforInput.name}</p>
                            <div className='container' style={{ backgroundColor: "#E5E5E5" }}>
                                <p>Số dư tài khoản: 1.000.000</p>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col text-center">
                                        <button className="btn btn-danger">Nạp tiền</button>
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
                                <li><Link to="/thongtincanhan">Thay đổi mật khẩu</Link></li>
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
                        <div className="card-header text-white bg-primary">
                            THAY ĐỔI THÔNG TIN CÁ NHÂN
                        </div>
                        <div className="card-body">
                            <div className="card">
                                <div className="card-header">
                                    Thông tin cá nhân
                                </div>
                                <div className="card-body">
                                    <div className='row mb-3'>
                                        <div className='col-md-3'>
                                            <label>Họ và tên</label>
                                        </div>

                                        <div className='col-md-6'>
                                            <input name='name' onChange={handleInput} value={inforInput.name} className='form-control' />
                                        </div>
                                    </div>

                                    <div className='row mb-3'>
                                        <div className='col-md-3'>
                                            <label>Ngày sinh</label>
                                        </div>

                                        <div className='col-md-6'>
                                            <input placeholder="dd-mm-yyyy" name='ngaySinh' onChange={handleInput} value={inforInput.ngaySinh} type="date" className='form-control' />
                                        </div>
                                    </div>

                                    <div className='row mb-3'>
                                        <div className='col-md-3'>
                                            <label>Giới tính</label>
                                        </div>

                                        <div className='col-md-2'>
                                            {gioiTinh}
                                        </div>
                                    </div>

                                    <div className='row mb-3'>
                                        <div className='col-md-3'>
                                            <label>Địa chỉ</label>
                                        </div>

                                        <div className='col-md-6'>
                                            <textarea name='diaChi' onChange={handleInput} value={inforInput.diaChi} className='form-control' style={{ resize: false }}></textarea>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <br />
                            <div className="card">
                                <div className="card-header">
                                    Thông tin liên hệ
                                </div>
                                <div className="card-body">
                                    <div className='row mb-3'>
                                        <div className='col-md-3'>
                                            <label>Số điện thoại</label>
                                        </div>

                                        <div className='col-md-6'>
                                            <input name='soDienThoai' onChange={handleInput} value={inforInput.soDienThoai} type="text" className='form-control' />
                                        </div>
                                    </div>

                                    <div className='row mb-3'>
                                        <div className='col-md-3'>
                                            <label>Email</label>
                                        </div>

                                        <div className='col-md-6'>
                                            <input name='email' onChange={handleInput} value={inforInput.email} type="text" className='form-control' />
                                        </div>
                                    </div>

                                    <div className='row mb-3'>
                                        <div className='col-md-3'>
                                            <label>CMND / CCCD</label>
                                        </div>

                                        <div className='col-md-6'>
                                            <input name='cmnd' onChange={handleInput} value={inforInput.cmnd} type="text" className='form-control' />
                                        </div>
                                    </div>

                                    <div className='row mb-3'>
                                        <div className='col-md-3'>
                                            <label>Facebook</label>
                                        </div>

                                        <div className='col-md-6'>
                                            <input name='facebook' onChange={handleInput} value={inforInput.facebook} type="text" className='form-control' />
                                        </div>
                                    </div>

                                    <div className="container">
                                        <div className="row">
                                            <div className="col text-center">
                                                <button onClick={updateInfoUser} className="btn btn-primary">Lưu lại</button>
                                            </div>
                                        </div>
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

export default UserInfor
