import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import swal from 'sweetalert';


const Sidebar = () => {
  
    return(
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Core</div>
                            <Link className="nav-link" to="/admin/dashboard">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Trang chủ
                            </Link>
                            
                            <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapseProducts" aria-expanded="false" aria-controls="collapseProducts">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                Quản lý hình thức
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </Link>
                            <div className="collapse" id="collapseProducts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <Link className="nav-link" to="/admin/them-hinh-thuc">Thêm hình thức</Link>
                                    <Link className="nav-link" to="/admin/view-product">Danh sách hình thức</Link>
                                </nav>
                            </div>

                            <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapseHangMuc" aria-expanded="false" aria-controls="collapseHangMuc">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                Quản lý hạng mục
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </Link>
                            <div className="collapse" id="collapseHangMuc" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <Link className="nav-link" to="/admin/them-hang-muc">Thêm hạng mục</Link>
                                    <Link className="nav-link" to="/admin/view-product">Danh sách hạng mục</Link>
                                </nav>
                            </div>

                            <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapseLoaiTin" aria-expanded="false" aria-controls="collapseLoaiTin">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                Quản lý loại tin
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </Link>
                            <div className="collapse" id="collapseLoaiTin" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <Link className="nav-link" to="/admin/them-loai-tin">Thêm loại tin</Link>
                                    <Link className="nav-link" to="/admin/view-product">Danh sách loại tin</Link>
                                </nav>
                            </div>

                            <Link className="nav-link" to="/admin/quan-ly-tai-khoan">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Quản lý tài khoản
                            </Link>

                            <Link className="nav-link" to="/admin/duyet-nap-tien">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Duyệt nạp tiền tài khoản
                            </Link>
                            <Link className="nav-link" to="/admin/duyet-bai-dang">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Duyệt bài đăng
                            </Link>
                            <Link className="nav-link" to="/admin/xac-nhan-yeu-cau">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Xác nhận yêu cầu mua
                            </Link>
                            
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">@Copyright 2022:</div>
                        Nguyễn Minh Hiếu
                    </div>
                </nav>
    );
}

export default Sidebar;