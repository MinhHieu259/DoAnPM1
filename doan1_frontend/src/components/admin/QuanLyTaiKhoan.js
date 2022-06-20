import React from 'react';

function QuanLyTaiKhoan() {
    return (
        <div className='container'>
            <h1 className='text-center mt-4 mb-5'>Quản lý tài khoản</h1>
            <h5 className='ml-5'>Danh sách tài khoản</h5>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Tài khoản</th>
                        <th scope="col">Họ và tên</th>
                        <th scope="col">Số điện thoại</th>
                        <th scope="col">Email</th>
                        <th scope="col">Quyền</th>
                        <th scope="col">Ngày đăng ký</th>
                        <th scope="col">Hoạt động</th>
                        <th scope="col">Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Minh Hiếu</td>
                        <td>Nguyễn Minh Hiếu</td>
                        <td>0329568259</td>
                        <td>mhieu7252@gmail.com</td>
                        <td><button className='btn btn-danger'>Người dùng</button></td>
                        <td>1/6/2022</td>
                        <td><input type="checkbox"/></td>
                        <td><button className='btn btn-danger'>Xoá</button></td>
                    </tr>

                    <tr>
                        <th scope="row">2</th>
                        <td>Minh Hiếu</td>
                        <td>Nguyễn Minh Hiếu</td>
                        <td>0329568259</td>
                        <td>mhieu@gmail.com</td>
                        <td><button className='btn btn-success'>Cộng tác viên</button></td>
                        <td>1/6/2022</td>
                        <td><input type="checkbox"/></td>
                        <td><button className='btn btn-danger'>Xoá</button></td>
                    </tr>

                    <tr>
                        <th scope="row">3</th>
                        <td>Minh Hiếu</td>
                        <td>Nguyễn Minh Hiếu</td>
                        <td>0329568259</td>
                        <td>mhieu7252@gmail.com</td>
                        <td><button className='btn btn-danger'>Người dùng</button></td>
                        <td>1/6/2022</td>
                        <td><input type="checkbox"/></td>
                        <td><button className='btn btn-danger'>Xoá</button></td>
                    </tr>
                   
                </tbody>
            </table>
        </div>
    );
}

export default QuanLyTaiKhoan;