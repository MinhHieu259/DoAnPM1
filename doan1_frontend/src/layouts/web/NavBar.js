import React from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { Redirect, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

function NavBar() {

    const history = useHistory();
    const logoutSubmit = (e) => {
      e.preventDefault();
      axios.post(`api/logout`).then(res => {
        if (res.data.status === 200) {
          localStorage.removeItem('auth_token');
          localStorage.removeItem('auth_name');
          swal("Success", res.data.message, "success");
          history.push('/');
        }
      });
    }
    var AuthButtons = '';
  if (!localStorage.getItem('auth_token')) {
    AuthButtons = (
      <ul className='navbar-nav'>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Đăng nhập</Link>
        </li>
      </ul>
    );
  } else {
    AuthButtons = (
      <li className="nav-item">
        <button onClick={logoutSubmit} className="nav-link btn btn-danger btn-sm text-white"  to="/register">Đăng xuất</button>
      </li>
    );
  }
    return ( 
        <div>
            <div className="box-collapse">
                <div className="title-box-d">
                    <h3 className="title-d">Tìm kiếm</h3>
                </div>
                <span className="close-box-collapse right-boxed bi bi-x"></span>
                <div className="box-collapse-wrap form">
                    <form className="form-a">
                        <div className="row">
                            <div className="col-md-12 mb-2">
                                <div className="form-group">
                                    <label className="pb-2" >Từ khóa</label>
                                    <input type="text" className="form-control form-control-lg form-control-a" placeholder="Nhập từ khóa..." />
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2">Loại</label>
                                    <select className="form-control form-select form-control-a" id="Type">
                                        <option>All Type</option>
                                        <option>For Rent</option>
                                        <option>For Sale</option>
                                        <option>Open House</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2">Thành phố</label>
                                    <select className="form-control form-select form-control-a" id="city">
                                        <option>All City</option>
                                        <option>Alabama</option>
                                        <option>Arizona</option>
                                        <option>California</option>
                                        <option>Colorado</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2">Số phòng ngủ</label>
                                    <select className="form-control form-select form-control-a" id="bedrooms">
                                        <option>Any</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2">Nhà để xe</label>
                                    <select className="form-control form-select form-control-a" id="garages">
                                        <option>Any</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                        <option>04</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2">Phòng tắm</label>
                                    <select className="form-control form-select form-control-a" id="bathrooms">
                                        <option>Any</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 mb-2">
                                <div className="form-group mt-3">
                                    <label className="pb-2">Giá tối thiểu</label>
                                    <select className="form-control form-select form-control-a" id="price">
                                        <option>Unlimite</option>
                                        <option>$50,000</option>
                                        <option>$100,000</option>
                                        <option>$150,000</option>
                                        <option>$200,000</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <button type="submit" className="btn btn-b">Tìm kiếm</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
                <div className="container">
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <Link className="navbar-brand text-brand" to="/">Estate<span className="color-b">Agency</span></Link>

                    <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Trang chủ</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link " to="#">About</Link>
                            </li>


                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</Link>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item " to="property-single.html">Property Single</Link>
                                    <Link className="dropdown-item " to="blog-single.html">Blog Single</Link>
                                    <Link className="dropdown-item " to="agents-grid.html">Agents Grid</Link>
                                    <Link className="dropdown-item " to="agent-single.html">Agent Single</Link>
                                </div>
                            </li>
                            {AuthButtons}
                            <li className="nav-item">
                                <Link className="nav-link " to="admin/dashboard">Quản trị</Link>
                            </li>
                        </ul>
                    </div>

                    <button type="button" className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
                        <i className="bi bi-search"></i>
                    </button>

                </div>
            </nav>
        </div>
     );
}

export default NavBar;