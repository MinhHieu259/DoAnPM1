import React from 'react';

function XacNhanYcMua() {
    return (
        <div>
            <h1 className='text-center' style={{ marginTop: "10px" }}>Xác nhận yêu cầu mua đất</h1>
            <div class="card">
                <div class="card-body">
                <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Mã yêu cầu</th>
                        <th scope="col">Mã người dùng</th>
                        <th scope="col">Mã BDS</th>
                        <th scope="col">Thời gian yêu cầu</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>YC001</td>
                        <td>ND001</td>
                        <td>BDS001</td>
                        <td>19/6/2022</td>
                        <td><button className='btn btn-success'>Đã duyệt</button></td>
                        <td><i className="fa-solid fa-trash-can text-danger"></i></td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>YC002</td>
                        <td>ND002</td>
                        <td>BDS002</td>
                        <td>19/6/2022</td>
                        <td><button className='btn btn-danger'>Chưa duyệt</button></td>
                        <td><i className="fa-solid fa-trash-can text-danger"></i></td>
                    </tr>

                 

                </tbody>
            </table>
                </div>
            </div>
        </div>

    );
}
export default XacNhanYcMua;