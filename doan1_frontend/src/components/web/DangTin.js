import { Link } from "react-router-dom/cjs/react-router-dom.min";

function DangTin() {
    return (
        <div className="container">
            <br />
            <br />
            <br />
            <br />
            <div className="row">
                <div className="col-md-3">
                    <div className="container">
                        <div className="container text-center mb-3">
                            <img src="/assets/img/about-1.jpg" alt="anh" width={50} height={50} className="rounded mx-auto d-block mb-3" />
                            <span className="font-weight-bold">Nguyễn Minh Hiếu</span>
                        </div>

                        <div className="container" style={{ padding: "10px" }}>
                            <div style={{ backgroundColor: "#dcdcdc", width: "250px", borderRadius: "10px", paddingBottom: "10px" }}>
                                <div className="container">
                                    <p className="font-weight-bold">Số dư tài khoản</p>
                                </div>
                                <div className="container">
                                    <p>TK tin đăng: <span className="font-weight-bold">100.000</span></p>
                                    <p>TK khuyến mãi: <span className="font-weight-bold">100.000</span></p>
                                    <div className="container" style={{ backgroundColor: "#ffffff", width: "200px", borderRadius: "5px" }}>
                                        <p style={{ color: "#acaaaa" }}>Mã chuyển khoản</p>
                                        <p>abcxuy</p>
                                    </div>
                                    <div className="container text-center">
                                        <button className="btn" style={{ borderColor: "red", borderRadius: "5px", width: "140px", borderWidth: "thin", color: "red" }} type="button"><i class="fa-brands fa-cc-mastercard"></i> Nạp tiền</button>
                                    </div>
                                </div>
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

                <div className="col-md-6">
                    <div className="container">
                        <div class="card">
                            <div class="card-body">

                                <ul class="nav nav-tabs">
                                    <li class="nav-item">
                                        <a href="#ban" class="nav-link active" data-bs-toggle="tab">Bán / Cho thuê</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#mua" class="nav-link" data-bs-toggle="tab">Mua / Cần thuê</a>
                                    </li>

                                </ul>
                                <div class="tab-content">
                                    <div class="tab-pane fade show active" id="ban">
                                        <div className="container">
                                            <div class="card">
                                                <div class="card-body">
                                                    <p className="font-weight-bold">Chọn hình thức <span className="text-danger">*</span></p>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <input type="radio" id="html" name="fav_language" value="HTML" />
                                                            <label for="html"> Bán</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <input type="radio" id="html" name="fav_language" value="HTML" />
                                                            <label for="html"> Cho Thuê</label>
                                                        </div>
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
                                                            <select className="form-control">
                                                                <option>Chọn</option>
                                                            </select>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <p>Quận huyện <span className="text-danger">*</span></p>
                                                            <select className="form-control">
                                                                <option>Chọn</option>
                                                            </select>
                                                        </div>

                                                        <div className="col-md-12">
                                                            <p>Phường / Xã</p>
                                                            <select className="form-control">
                                                                <option>Chọn</option>
                                                            </select>
                                                        </div>

                                                        <div className="col-md-12">
                                                            <p>Dự án</p>
                                                            <input type="text" className="form-control" />
                                                        </div>

                                                        <div className="col-md-12">
                                                            <p>Địa chỉ hiển thị trên tin đăng</p>
                                                            <input type="text" className="form-control" placeholder="Nhập địa chỉ" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <br />
                                            <div class="card">
                                                <div class="card-body">
                                                    <p className="font-weight-bold">Thông tin bài viết</p>
                                                    <p>Tiêu đề <span className="text-danger">*</span></p>
                                                    <input type="text" className="form-control" />

                                                    <p>Mô tả <span className="text-danger">*</span></p>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>

                                            <br />
                                            <div class="card">
                                                <div class="card-body">
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
                                                    <br/>
                                                    <p>Giấy tờ pháp lý</p>

                                                    <p></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="mua">
                                        <p>Mua tab content ...</p>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>



                <div className="col-md-3" style={{ position: "fixed", right: "20px" }}>
                    <div className="container">
                        <div class="card">
                            <div class="card-body">
                                <p className="font-weight-bold">Loại tin đăng</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default DangTin;