import React from 'react';

function EditHinhThuc() {
    return (
        <div>
            <h1 className='text-center' style={{ marginTop: "10px" }}>Danh sách hình thức</h1>
            <div class="card">
                <div class="card-body">
                <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Tên hình thức</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Chi tiết</th>
                        <th scope="col">Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Bán</td>
                        <td><button className='btn btn-success'>Hiện</button></td>
                        <td><a href='#'><i className="fa-solid fa-circle-info"></i></a></td>
                        <td><i className="fa-solid fa-trash-can text-danger"></i></td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Cho thuê</td>
                        <td><button className='btn btn-success'>Hiện</button></td>
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
export default EditHinhThuc;