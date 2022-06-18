import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { mainJS } from '../../js/main';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function DanhSachTin() {

    document.title = "Danh sách tin đăng"
    const [listBDS, setListBDS] = useState([])
    useEffect(() => {
        mainJS();
       axios.get(`api/danh-sach-tin-dang`).then(res => {
           if (res.data.status === 200) {
               setListBDS(res.data.batDongSan);
           }
       });
   }, []);

   const clickSetChiTietId = (e, id) => {
    e.persist();
    localStorage.setItem('detail_id', id);
    <Redirect to="/chi-tiet-bat-dong-san"/>
    
}

    return (
        <div id='main'>
            <section className="intro-single">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="title-single-box">
                                <h1 className="title-single">Danh sách tin đã đăng</h1>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/">Trang chủ</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Danh sách tin
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <section className="news-grid grid">
                <div className="container">
                    <div className="row">
                        {
                            listBDS.map((batDongSan, idx) => {
                                return (
                                    <div className="col-md-4">
                            <div className="card-box-b card-shadow news-box">
                                <div className="img-box-b">
                                    <img src={`http://localhost:8000/${batDongSan.hinhDaiDien}`} alt="" className="img-b img-fluid" />
                                </div>
                                <div className="card-overlay">
                                    <div className="card-header-b">
                                       
                                        <div className="card-title-b">
                                            <h2 className="title-2">
                                                <Link onClick={(e) => clickSetChiTietId(e, batDongSan.id)} to="chi-tiet-bat-dong-san">{batDongSan.tieuDe}</Link>
                                            </h2>
                                        </div>
                                        <div className="card-date">
                                            <span className="date-b">{batDongSan.created_at}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                                )
                            })
                        }
                       
                        
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <nav className="pagination-a">
                                <ul className="pagination justify-content-end">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#" tabIndex="-1">
                                            <span className="bi bi-chevron-left"></span>
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">1</a>
                                    </li>
                                    <li className="page-item active">
                                        <a className="page-link" href="#">2</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">3</a>
                                    </li>
                                    <li className="page-item next">
                                        <a className="page-link" href="#">
                                            <span className="bi bi-chevron-right"></span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default DanhSachTin;