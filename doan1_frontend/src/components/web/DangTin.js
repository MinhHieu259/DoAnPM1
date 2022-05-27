import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function DangTin() {
    const [phapLy, setPhapLy] = useState([
        'Sổ đỏ / sổ hồng',
        'Hợp đồng mua bán',
        'Đang chờ sổ'
    ])

    const [phapLyInput, setInsertPhapLy] = useState([])

    const [selectPhapLy, setSelectPhapLy] = useState()
    
    const handleInput = (e) => {
        e.persist();
        setInsertPhapLy(e.target.value);
    }

   
    const submitPhapLy = (e) => {
        e.preventDefault();
        setPhapLy(arr => [...arr, phapLyInput])
    }

  
    const handleRadio = (e) => {
        e.persist();
        setSelectPhapLy(e.currentTarget.value);
    }

    console.log(selectPhapLy)
    

    return (
        <div className="container">
            <br />
            <br />
            <br />
            <br />
            <div className="row">
                <div className="col-md-3">
                    <div className="container">

                        <div className="container text-center mb-3" style={{ padding: "10px" }}>
                            <div style={{ backgroundColor: "#dcdcdc", width: "240px", borderRadius: "10px", padding: "10px" }}>
                                <img src="/assets/img/about-1.jpg" alt="anh" width={80} height={80} className="rounded mx-auto d-block mb-3" />
                                <span className="font-weight-bold">Nguyễn Minh Hiếu</span>
                            </div>

                        </div>

                        <br />
                        <div className="card">
                            <div className="card-header text-white bg-primary">
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
                </div>

                <div className="col-md-9">
                    <div className="container">
                        <div className="card">
                            <div className="card-body">

                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <a href="#ban" className="nav-link active" data-bs-toggle="tab">Bán / Cho thuê</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#mua" className="nav-link" data-bs-toggle="tab">Mua / Cần thuê</a>
                                    </li>

                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="ban">
                                        <div className="container">
                                            <div className="card">
                                                <div className="card-body">
                                                    <p className="font-weight-bold">Chọn hình thức <span className="text-danger">*</span></p>
                                                    <div className="row">
                                                        <fieldset>
                                                            <div className="col-md-6">
                                                                <input type="radio" id="html" name="hinhthuc" value="HTML" />
                                                                <label htmlFor="html"> Bán</label>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <input type="radio" id="html" name="hinhthuc" value="HTML" />
                                                                <label htmlFor="html"> Cho Thuê</label>
                                                            </div>
                                                        </fieldset>
                                                    </div>
                                                    <p className="font-weight-bold">Thông tin cơ bản</p>
                                                    <p>Loại bất động sản <span className="text-danger">*</span></p>
                                                    <select className="form-control mb-3">
                                                        <option>Bán nhà mặt phố</option>
                                                        <option>Bán nhà riêng</option>
                                                    </select>
                                                    <p className="font-weight-bold">Địa chỉ</p>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <p>Tỉnh thành phố <span className="text-danger">*</span></p>
                                                            <select name="tinh" className="form-control">
                                                                <option>Chọn</option>
                                                                <option>Đà nẵng</option>
                                                                <option>Thừa Thiên Huế</option>
                                                            </select>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <p>Quận huyện <span className="text-danger">*</span></p>
                                                            <select name="quan" className="form-control">
                                                                <option>Chọn</option>
                                                                <option>Hải Châu</option>
                                                                <option>Phong Điền</option>
                                                            </select>
                                                        </div>

                                                        <div className="col-md-12">
                                                            <p>Phường / Xã</p>
                                                            <select name="phuong" className="form-control">
                                                                <option>Chọn</option>
                                                                <option>Thanh Bình</option>
                                                                <option>Phong Thu</option>
                                                            </select>
                                                        </div>
        

                                                        <div className="col-md-12">
                                                            <p>Địa chỉ hiển thị trên tin đăng</p>
                                                            <input type="text" className="form-control" placeholder="Nhập địa chỉ" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <br />
                                            <div className="card">
                                                <div className="card-body">
                                                    <p className="font-weight-bold">Thông tin bài viết</p>
                                                    <p>Tiêu đề <span className="text-danger">*</span></p>
                                                    <input type="text" className="form-control" />

                                                    <p>Mô tả <span className="text-danger">*</span></p>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>

                                            <br />
                                            <div className="card">
                                                <div className="card-body">
                                                    <p className="font-weight-bold">Thông tin bất động sản</p>
                                                    <p>Diện tích <span className="text-danger">*</span></p>
                                                    <input type="text" className="form-control" />

                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <p>Mức giá <span className="text-danger">*</span></p>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>Đơn vị <span className="text-danger">*</span></p>
                                                            <select className="form-control">
                                                                <option>VND</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <br />
                                                    <p className="font-weight-bold">Giấy tờ pháp lý</p>
                                                    <div className="row">

                                                        {
                                                            phapLy.map((item, idx) => {
                                                                return (<div className="col-md-6" key={idx}>
                                                                    <input  checked={selectPhapLy === item} onChange={handleRadio} type="radio" name="phaply" value={item}  />
                                                                    <label htmlFor="html">{item}</label>
                                                                </div>)
                                                            })  
                                                        }

                                                        <div className="col-md-3">
                                                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                                                Thêm
                                                            </button>
                                                        </div>

                                                        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                            <div className="modal-dialog" role="document">
                                                                <div className="modal-content">
                                                                    <div className="modal-header">
                                                                        <h5 className="modal-title" id="exampleModalLabel">Thêm giấy tờ pháp lý</h5>
                                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                            <span aria-hidden="true">&times;</span>
                                                                        </button>
                                                                    </div>
                                                                    <div className="modal-body">
                                                                        <p className="font-weight-bold">Giấy tờ pháp lý <span className="text-danger">*</span></p>
                                                                        <input type="text" onChange={handleInput} value={phapLyInput} className="form-control" placeholder="Nhập giấy tờ pháp lý" />
                                                                    </div>
                                                                    <div className="modal-footer">
                                                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Huỷ</button>
                                                                        <button onClick={submitPhapLy} type="button" className="btn btn-primary">Thêm</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                    </div>
                                                    <br />
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <span>Số phòng ngủ</span>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <input className="form-control" type='number' />
                                                        </div>
                                                    </div>
                                                    <br />
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <span>Số phòng tắm, vệ sinh</span>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <input className="form-control" type='number' />
                                                        </div>
                                                    </div>

                                                    <br />
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <span>Số tầng</span>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <input className="form-control" type='number' />
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <span className="font-weight-bold">Mô tả bổ sung</span>
                                                        </div>
                                                        <div className="col-md-9">
                                                            <hr />
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <p>Hướng nhà</p>
                                                            <input placeholder="Chọn hướng" className="form-control" type='text' />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>Hướng ban công</p>
                                                            <input className="form-control" placeholder="Chọn hướng" type='text' />
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <p>Đường vào</p>
                                                            <input placeholder="Nhập số mét" className="form-control" type='text' />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>Mặt tiền</p>
                                                            <input placeholder="Nhập số mét" className="form-control" type='text' />
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <p>Nội thất</p>
                                                            <textarea className="form-control"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <br />
                                            <div className="card">
                                                <div className="card-body">
                                                    <h3>Hình ảnh & Video</h3>
                                                    <p>Mỗi hình ảnh kích thước tối thiểu 400x400, tối đa 15MB</p>
                                                    <input type='file' />
                                                </div>
                                            </div>

                                            <br />
                                            <div className="card">
                                                <div className="card-body">
                                                    <h3>Thông tin liên hệ</h3>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <p>Tên liên hệ <span style={{ color: "red" }}>*</span></p>
                                                            <input type='text' className="form-control" />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>Số điện thoại <span style={{ color: "red" }}>*</span></p>
                                                            <input type='text' className="form-control" />
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <p>Địa chỉ</p>
                                                            <input type='text' className="form-control" />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>Email</p>
                                                            <input type='text' className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <br />
                                            <div className="container text-center" style={{ backgroundColor: "white" }}>
                                                <button className="btn btn-danger">Đăng tin</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="mua">
                                        <p>Mua tab content ...</p>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default DangTin;