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
    noiThat: ''
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
                          <strong>Status:</strong>
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
                          <strong>Garage:</strong>
                          <span>1</span>
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
            <div className="col-md-10 offset-md-1">
              <ul className="nav nav-pills-a nav-pills mb-3 section-t3" id="pills-tab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="pills-video-tab" data-bs-toggle="pill" href="#pills-video" role="tab" aria-controls="pills-video" aria-selected="true">Video</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="pills-plans-tab" data-bs-toggle="pill" href="#pills-plans" role="tab" aria-controls="pills-plans" aria-selected="false">Floor Plans</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="pills-map-tab" data-bs-toggle="pill" href="#pills-map" role="tab" aria-controls="pills-map" aria-selected="false">Ubication</a>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-video" role="tabpanel" aria-labelledby="pills-video-tab">
                  <iframe src="https://player.vimeo.com/video/73221098" width="100%" height="460" frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className="tab-pane fade" id="pills-plans" role="tabpanel" aria-labelledby="pills-plans-tab">
                  <img src="assets/img/plan2.jpg" alt="" className="img-fluid" />
                </div>
                <div className="tab-pane fade" id="pills-map" role="tabpanel" aria-labelledby="pills-map-tab">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1ses-419!2sve!4v1510329142834" width="100%" height="460" frameBorder="0" style={{ border: "0" }} allowFullScreen></iframe>
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