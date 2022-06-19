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
                            <Link className="nav-link" to="/cong-tac-vien/dashboard">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Trang chủ
                            </Link>
                            
                            <Link className="nav-link" to="/cong-tac-vien/xac-minh-bai-dang">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Xác minh bài đăng
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