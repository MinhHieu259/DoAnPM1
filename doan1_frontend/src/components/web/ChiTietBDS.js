import React, { useEffect, useState } from 'react';
import { mainJS } from '../../js/main';
import { Link, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';

function ChiTietBDS() {
  const history = useHistory();
  document.title = 'Chi tiết bất động sản';
  const [inForBDS, setInfoBDS] = useState({
    tieuDe: '',
    diaChi: '',
    giaTien: '',
    moTa: '',
    dienTich: '',
    soPhongNgu: '',
    soPhongVeSinh: '',
    soTang: '',
    huongNha: '',
    noiThat: '',
    duongVao: ''
  });

  const [detailId, setdetailId] = useState()
  const [listImage, setListImage] = useState([])
  const [listImageShow, setListImageShow] = useState([])

  useEffect(() => {
    mainJS()
  }, [])

  useEffect(() => {
    setdetailId(localStorage.getItem('detail_id'))
  }, [localStorage.getItem('detail_id')])

  useEffect(() => {
    if (detailId != null) {
      axios.get(`/api/chi-tiet-batdongsan/${detailId}`).then(res => {
        if (res.data.status === 200) {
          console.log(res.data.batDongSan)
          setInfoBDS(res.data.batDongSan);
          setListImage(res.data.batDongSan.hinhanh)
        } else if (res.data.status === 404) {
          history.push('/collections');
          swal("Lỗi", res.data.message, "error");
        }
      });
    }
  }, [detailId])

  useEffect(() => {
    if (listImage != null) {
      listImage.forEach((image_file) => {
        setListImageShow(arr => [...arr, image_file.hinhAnh])
      })
    }
  }, [listImage])

  return (
    <div id="main">
      <section className="intro-single">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="title-single-box">
                <h1 className="title-single">{inForBDS.tieuDe}</h1>
                <span className="color-text-a">{inForBDS.diaChi}</span>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Trang chủ</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="property-grid.html">Bất động sản</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {inForBDS.tieuDe}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="property-single nav-arrow-b">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div id="property-single-carousel" className="swiper">
                <div className="swiper-wrapper">
                  {
                    listImageShow.map((image, idx) => {
                      return (
                        <div key={idx} className="carousel-item-b swiper-slide">
                          <img src={`http://localhost:8000/${image}`} alt="" />
                        </div>
                      )
                    })
                  }


                </div>
              </div>
              <div className="property-single-carousel-pagination carousel-pagination"></div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">

              <div className="row justify-content-between">
                <div className="col-md-5 col-lg-4">
                  <div className="property-price d-flex justify-content-center foo">
                    <div className="card-header-c d-flex">
                      <div className="card-box-ico">
                        <span className="bi bi-cash">$</span>
                      </div>
                      <div className="card-title-c align-self-center">
                        <h5 className="title-c">{inForBDS.giaTien}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="property-summary">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="title-box-d section-t4">
                          <h3 className="title-d">Thông tin chi tiết</h3>
                        </div>
                      </div>
                    </div>
                    <div className="summary-list">
                      <ul className="list">
                        <li className="d-flex justify-content-between">
                          <strong>Property ID:</strong>
                          <span>1134</span>
                        </li>
                        <li className="d-flex justify-content-between">
                          <strong>Hướng nhà:</strong>
                          <span>{inForBDS.huongNha}</span>
                        </li>
                        <li className="d-flex justify-content-between">
                          <strong>Property Type:</strong>
                          <span>House</span>
                        </li>
                        <li className="d-flex justify-content-between">
                          <strong>Trạng thái:</strong>
                          <span>Sale</span>
                        </li>
                        <li className="d-flex justify-content-between">
                          <strong>Diện tích:</strong>
                          <span>{inForBDS.dienTich}m
                            <sup>2</sup>
                          </span>
                        </li>
                        <li className="d-flex justify-content-between">
                          <strong>Phòng ngủ:</strong>
                          <span>{inForBDS.soPhongNgu}</span>
                        </li>
                        <li className="d-flex justify-content-between">
                          <strong>Phòng tắm:</strong>
                          <span>{inForBDS.soPhongVeSinh}</span>
                        </li>
                        <li className="d-flex justify-content-between">
                          <strong>Đường vào:</strong>
                          <span>{inForBDS.duongVao} m</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-lg-7 section-md-t3">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="title-box-d">
                        <h3 className="title-d">Mô tả</h3>
                      </div>
                    </div>
                  </div>
                  <div className="property-description">
                    <p className="description color-text-a">
                      {inForBDS.moTa}
                    </p>
                  </div>
                  <div className="row section-t3">
                    <div className="col-sm-12">
                      <div className="title-box-d">
                        <h3 className="title-d">Nội thất</h3>
                      </div>
                    </div>
                  </div>
                  <div className="amenities-list color-text-a">
                    <ul className="list-a no-margin">
                      {inForBDS.noiThat}
                    </ul>
                  </div>
                  <button className='btn btn-danger mt-5'>Yêu cầu mua</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ChiTietBDS;