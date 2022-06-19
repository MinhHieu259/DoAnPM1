import React from 'react';

function DuyetBaiDang() {
    return (
        <div>
            <h1 className='text-center' style={{ marginTop: "10px" }}>Duyệt bài đăng</h1>
            <div class="card">
                <div class="card-body">
                <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Mã BDS</th>
                        <th scope="col">Mã bài đăng</th>
                        <th scope="col">Thời gian</th>
                        <th scope="col">Trạng thái xác minh</th>
                        <th scope="col">Trạng thái bài đăng</th>
                        <th scope="col">Chi tiết</th>
                        <th scope="col">Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>BDS01</td>
                        <td>BD01</td>
                        <td>19/6/2022</td>
                        <td><button className='btn btn-success'>Đã xác minh</button></td>
                        <td><button className='btn btn-success'>Đã duyệt</button></td>
                        <td><a href='#'><i className="fa-solid fa-circle-info"></i></a></td>
                        <td><i className="fa-solid fa-trash-can text-danger"></i></td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>BDS02</td>
                        <td>BD02</td>
                        <td>19/6/2022</td>
                        <td><button className='btn btn-danger'>Chưa xác minh</button></td>
                        <td><button className='btn btn-danger'>Chưa duyệt</button></td>
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
export default DuyetBaiDang;