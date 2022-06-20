import React from 'react';

function EditLoaiTin() {
    return (
        <div>
            <h1 className='text-center' style={{ marginTop: "10px" }}>Danh sách loại tin đăng</h1>
            <div class="card">
                <div class="card-body">
                <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tên loại tin</th>
                        <th scope="col">Giá đăng</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Chi tiết</th>
                        <th scope="col">Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Tin thường</td>
                        <td>10.000đ / ngày</td>
                        <td><button className='btn btn-success'>Hiện</button></td>
                        <td><a href='#'><i className="fa-solid fa-circle-info"></i></a></td>
                        <td><i className="fa-solid fa-trash-can text-danger"></i></td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Tin vip</td>
                        <td>30.000đ / ngày</td>
                        <td><button className='btn btn-success'>Ẩn</button></td>
                        <td><a href='#'><i className="fa-solid fa-circle-info"></i></a></td>
                        <td><i className="fa-solid fa-trash-can text-danger"></i></td>
                    </tr>

                </tbody>
            </table>
                </div>
            </div>
        </div>

    );
}
export default EditLoaiTin;