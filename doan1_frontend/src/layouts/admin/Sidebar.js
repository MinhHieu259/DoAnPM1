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
                                Quản lý sản phẩm
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </Link>
                            <div className="collapse" id="collapseProducts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <Link className="nav-link" to="/admin/add-product">Thêm sản phẩm</Link>
                                    <Link className="nav-link" to="/admin/view-product">Danh sách sản phẩm</Link>
                                </nav>
                            </div>

                            <Link className="nav-link" to="/admin/profile">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Tài khoản
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