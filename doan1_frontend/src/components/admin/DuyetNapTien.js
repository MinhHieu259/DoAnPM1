import React from 'react';

function DuyetNapTIen() {
    return (
        <div>
            <br />
            <h1 className='text-center'>Duyệt nạp tiền vào tài khoản</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Mã khách hàng</th>
                        <th scope="col">Tên khách hàng</th>
                        <th scope="col">Thời gian</th>
                        <th scope="col">Ảnh minh chứng</th>
                        <th scope="col">Số tiền</th>
                        <th scope="col">Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>KH001</td>
                        <td>Nguyễn Minh Hiếu</td>
                        <td>18/6/2021</td>
                        <td><img width="100" height="100" src='/assets/img/about-1.jpg'/></td>
                        <td>300.000 đ</td>
                        <td><button className='btn btn-success'>Đã duyệt</button></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>KH002</td>
                        <td>Nguyễn Thị Loan</td>
                        <td>15/6/2021</td>
                        <td><img width="100" height="100" src='/assets/img/about-1.jpg'/></td>
                        <td>200.000 đ</td>
                        <td><button className='btn btn-warning'>Chưa duyệt</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DuyetNapTIen;