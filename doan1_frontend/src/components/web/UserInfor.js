import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import swal from 'sweetalert'
import { mainJS } from '../../js/main';
function UserInfor() {

    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [inforInput, setUserInfor] = useState({
        name: '',
        ngaySinh: '',
        diaChi: '',
        soDienThoai: '',
        email: '',
        cmnd: '',
        facebook: '',
        gioiTinh: ''
    });
    useEffect(() => {
        mainJS()
        let userId = localStorage.getItem('user_id');
        axios.get(`/api/edit-thong-tin-ca-nhan/${userId}`).then(res => {
            if (res.data.status === 200) {
                setUserInfor(res.data.nguoiDung);
                setPicture({ src: "http://localhost:8000/" + res.data.nguoiDung.avatar })
            } else if (res.data.status === 404) {
                swal("Lỗi", res.data.message, "error");
                history.push('/');
            }
            setLoading(false);
        });
    }, []);

    const [{ alt, src }, setPicture] = useState([]);
    const [pictureTmp, setPictureTmp] = useState(null);
    const [error, setError] = useState([]);

    const handleInput = (e) => {
        e.persist();
        setUserInfor({ ...inforInput, [e.target.name]: e.target.value });
    }
    const handleImage = (e) => {
        e.persist();
        setPicture({
            src: URL.createObjectURL(e.target.files[0]),
            alt: e.target.files[0].name
        });
         setPictureTmp(e.target.files[0])
    }
    const updateInfoUser = (e) => {
        e.preventDefault();
        var formData = new FormData();
        formData.append('name', inforInput.name);
        formData.append('ngaySinh', inforInput.ngaySinh);
        formData.append('gioiTinh', inforInput.gioiTinh);
        formData.append('diaChi', inforInput.diaChi);
        formData.append('soDienThoai', inforInput.soDienThoai);
        formData.append('email', inforInput.email);
        formData.append('cmnd', inforInput.cmnd);
        formData.append('facebook', inforInput.facebook);
       

        const formImage = new FormData();
        formImage.append("file", pictureTmp);
        formImage.append("upload_preset", "owzv3irh");

        

        const data =  fetch('https://api.cloudinary.com/v1_1/minh-hieuit/image/upload', {
            method: 'POST',
            body: formImage
        }).then((r) => r.json());

        const tokenImage = data.then(function(result) {
            setPictureTmp(result.secure_url)
         })
         formData.append('image', pictureTmp);

  

       
        

        console.log(Object.fromEntries(formData))
        // var object = {};
        // formData.forEach((value, key) => {
        //     object[key] = value
        // }
        // )
        

        // if (object) {
            axios.put(`/api/update-thong-tin-canhan/${localStorage.getItem('user_id')}`, Object.fromEntries(formData)).then(res => {
                if (res.data.status === 200) {
                    swal("Thành công", res.data.message, "success");
                    setError([]);
                } else if (res.data.status === 422) {
                    swal("Chưa điền đầy đủ thông tin", "", "error");
                    setError(res.data.errors);
                } else if (res.data.status === 404) {
                    swal("Lỗi", res.data.message, "error");
                }
            });
        // }
    }
    console.log(error)

 
    return (
        <div className='container'>
            <br />
            <br />
            <br />
            <br />
            <br />
            <form onSubmit={updateInfoUser}  encType='multipart/form-data'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className="card">
                            <div className="card-header text-white bg-primary text-center">
                                TRANG CÁ NHÂN
                            </div>

                            <div className="card-body">
                                <img src={src} alt={alt} width={80} height={80} className="rounded mx-auto d-block mb-3" />

                                <input type="file" name="image" onChange={handleImage} className='form-control' />
                                <p className='text-center mt-3' style={{ fontWeight: "bold" }}>{inforInput.name}</p>
                                <div className='container' style={{ backgroundColor: "#E5E5E5" }}>
                                    <p className='text-center'>Số dư: {inforInput.soDuTaiKhoan} đ</p>
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
                                                <input type='text' name='name' onChange={handleInput} value={inforInput.name} className='form-control' />
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
                                                <select name="gioiTinh" onChange={handleInput} value={inforInput.gioiTinh} className='form-control'>
                                                    <option value={1} >Nam</option>
                                                    <option value={0} >Nữ</option>
                                                </select>
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
                                                    <button type='submit' className="btn btn-primary">Cập nhật</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </form>


        </div>

    );
}

export default UserInfor
