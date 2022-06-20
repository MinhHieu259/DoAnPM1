import React from 'react';

function EditHangMuc() {
    return (
        <div>
            <h1 className='text-center' style={{ marginTop: "10px" }}>Danh sách hạng mục</h1>
            <div class="card">
                <div class="card-body">
                <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tiêu đề</th>
                        <th scope="col">Mô tả</th>
                        <th scope="col">Chi tiết</th>
                        <th scope="col">Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Nhà mặt tiền</td>
                        <td>Nhà mặt tiền</td>
                        <td><a href='#'><i className="fa-solid fa-circle-info"></i></a></td>
                        <td><i className="fa-solid fa-trash-can text-danger"></i></td>
                    </tr>

                    
                    <tr>
                        <td>2</td>
                        <td>Đất thành phố</td>
                        <td>Đất thành phố</td>
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
export default EditHangMuc;