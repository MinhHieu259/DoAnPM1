import React from 'react';

function themHinhThuc() {
    return (
        <div className='container'>
            <h1 className='text-center mt-4 mb-5'>Thêm hình thức</h1>
            <div className='row'>
                <div className='col-md-3 ml-5'>
                    <span>Tên hình thức</span>
                </div>
                <div className='col-md-6'>
                    <input type="text" className='form-control' placeholder='Nhập tên hình thức...' />
                </div>
            </div>
            <div className='text-center'>
                <br />
                <button className='btn btn-danger'>Thêm hình thức</button>
            </div>
        </div>
    );
}

export default themHinhThuc;