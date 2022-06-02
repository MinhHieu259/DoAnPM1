import React from 'react';

function themLoaiTinDang() {
    return (
        <div className='container'>
            <h1 className='text-center mt-4 mb-5'>Thêm loại tin dăng</h1>
            <div className='row'>
                <div className='col-md-3 ml-5'>
                    <span>Tên loại tin dăng</span>
                </div>
                <div className='col-md-6'>
                    <input type="text" className='form-control' placeholder='Nhập tên loại tin...' />
                </div>
            </div>
            <br/>
            <div className='row'>
                <div className='col-md-3 ml-5'>
                    <span>Phí Đăng</span>
                </div>
                <div className='col-md-6'>
                    <input type="text" className='form-control' placeholder='Nhập phí đăng...' />
                </div>
            </div>
            <div className='text-center'>
                <br />
                <button className='btn btn-danger'>Thêm loại tin</button>
            </div>
        </div>
    );
}

export default themLoaiTinDang;