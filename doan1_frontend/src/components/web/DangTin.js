import { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import axios from 'axios';
import swal from 'sweetalert'
import { mainJS } from "../../js/main";
import moment from 'moment'

function DangTin() {
    document.title = "Đăng tin bất động sản"
    const [phapLy, setPhapLy] = useState([
        'Sổ đỏ / sổ hồng',
        'Hợp đồng mua bán',
        'Đang chờ sổ'
    ]);
    const [hinhThucList, setHinhThucList] = useState([])

    const [hangMucList, setHangMucList] = useState([])

    const [tinhThanhList, settinhThanhList] = useState([])

    const [quanHuyenList, setquanHuyenList] = useState([])

    const [xaPhuongList, setxaPhuongList] = useState([])

    const [diaChiTmp, setdiaChiTmp] = useState()

    const [imagesList, setImagesList] = useState([]);

    const [imageMain, setImageMain] = useState([]);

    const [errorlist, setError] = useState([])

    const [loaitinList, setLoaiTinList] = useState([])

    const [loaiBDS, setLoaiBDS] = useState({
        hangmuc: '1'
    });

    const [nhaHayDat, setNhaHayDat] = useState();
    const [inforUser, setUserInfor] = useState({
        name: '',
        ngaySinh: '',
        diaChi: '',
        soDienThoai: '',
        email: '',
        cmnd: '',
        facebook: '',
        gioiTinh: '',
        soDu: 0
    });


    useEffect(() => {
        mainJS();
        axios.get(`api/get-all-hinhthuc`).then(res => {
            if (res.data.status === 200) {
                setHinhThucList(res.data.hinhThuc);
            }
        });

        axios.get(`api/get-all-hangmuc`).then(res => {
            if (res.data.status === 200) {
                setHangMucList(res.data.hangMuc);
            }
        });

        axios.get(`api/get-all-tinhthanh`).then(res => {
            if (res.data.status === 200) {
                settinhThanhList(res.data.tinhThanh);
            }
        });

        axios.get(`api/get-all-loai-tin`).then(res => {
            if (res.data.status === 200) {
               setLoaiTinList(res.data.loaiTin)
            }
        });



        let userId = localStorage.getItem('user_id');

        axios.get(`/api/edit-thong-tin-ca-nhan/${userId}`).then(res => {
            if (res.data.status === 200) {
                setUserInfor(res.data.nguoiDung);
                setPicture({ src: "http://localhost:8000/" + res.data.nguoiDung.avatar })
            } else if (res.data.status === 404) {
                swal("Lỗi", res.data.message, "error");
            }
        });

        setdiaChiTmp(diaChiTmp)
    }, []);


    const [batDongSanInput, setBatDongSan] = useState({
        phaply: '',
        hinhthuc: '',
        tinh: '',
        quan: '',
        phuong: '',
        diaChiTmp: '',
        tieude: '',
        mota: '',
        dientich: '',
        gia: '',
        phongngu: '',
        phongtam: '',
        sotang: '',
        huongnha: '',
        bancong: '',
        duongvao: '',
        mattien: '',
        noithat: '',
        tenlienhe: '',
        sdt: '',
        diachilienhe: '',
        email: '',
        loaiTinDang:  2,
        soNgayDang: 1,
        ngayBatDau: '',
        ngayKetThuc: '',
        giaTin: 0
    });

    const [TienTra, setTienTra] = useState();

    var soNgayDangInt = parseInt(batDongSanInput.soNgayDang);
  
    var tomorrow = new Date(batDongSanInput.ngayBatDau);
    tomorrow.setDate(tomorrow.getDate()+soNgayDangInt);
    

    useEffect(() => {
        axios.get(`api/get-loai-tin-byId/${batDongSanInput.loaiTinDang}`).then(res => {
            if (res.data.status === 200) {
                setBatDongSan({...batDongSanInput, giaTin: res.data.loaiTin.gia})
            }
        });
        setTienTra(batDongSanInput.soNgayDang * batDongSanInput.giaTin);
        
      }, [batDongSanInput.loaiTinDang])

      useEffect(() => {
        setTienTra(batDongSanInput.soNgayDang * batDongSanInput.giaTin);
        
      }, [batDongSanInput.giaTin])
   
     

    useEffect(() => {
      setBatDongSan({...batDongSanInput,ngayKetThuc: moment(tomorrow).format("YYYY-MM-DD")});
      setTienTra(batDongSanInput.soNgayDang * batDongSanInput.giaTin);
     
    }, [batDongSanInput.soNgayDang])



    var soDuConLai = inforUser.soDu - TienTra;
    
  
    const [imagePreview, setImagePreview] = useState([])
    const handleImage = (e) => {
        if (e.target.files) {
            setImagesList([...e.target.files])
        }
    };

    const [{ altPre, srcPre }, setImagePreviewMain] = useState([]);

    const handleImageMain = (e) => {
        if (e.target.files) {
            setImageMain(e.target.files[0])
            setImagePreviewMain({ srcPre: URL.createObjectURL(e.target.files[0]) })
        }
    };


    useEffect(() => {
        setImagePreview([]);
        imagesList.forEach((image_file) => {
            setImagePreview(arr => [...arr, URL.createObjectURL(image_file)])
        })
    }, [imagesList])


    const [{ alt, src }, setPicture] = useState([]);



    useEffect(() => {
        if (batDongSanInput.tinh != '') {
            axios.get(`api/get-quanhuyen/${batDongSanInput.tinh}`).then(res => {
                if (res.data.status === 200) {
                    setquanHuyenList(res.data.quanHuyen);
                }
            });


            axios.get(`api/get-ten-tinh/${batDongSanInput.tinh}`).then(res => {
                if (res.data.status === 200) {
                    setTenTinh(res.data.tenTinh);
                }
            });

        }
    }, [batDongSanInput.tinh]);

    useEffect(() => {
        if (batDongSanInput.quan != '') {
            axios.get(`api/get-phuongxa/${batDongSanInput.quan}`).then(res => {
                if (res.data.status === 200) {
                    setxaPhuongList(res.data.phuongXa);
                }
            });

            if (batDongSanInput.quan != '') {
                axios.get(`api/get-ten-quan/${batDongSanInput.quan}`).then(res => {
                    if (res.data.status === 200) {
                        setTenQuan(res.data.tenQuan);
                    }
                });
            }

        }
    }, [batDongSanInput.quan]);

    useEffect(() => {
        if (batDongSanInput.phuong != '') {
            axios.get(`api/get-ten-xa/${batDongSanInput.phuong}`).then(res => {
                if (res.data.status === 200) {
                    setTenXa(res.data.tenXa);
                }
            });
        }
    }, [batDongSanInput.phuong]);


    const [phapLyInput, setInsertPhapLy] = useState([])
    const [diaChi, setDiaChi] = useState()
    const [tenTinh, setTenTinh] = useState()
    const [tenQuan, setTenQuan] = useState()
    const [tenXa, setTenXa] = useState()


    const handleInputPhapLy = (e) => {
        e.persist();
        setInsertPhapLy(e.target.value);
    }

    const handleDiaChi = (e) => {
        e.persist();
        setdiaChiTmp(e.currentTarget.value)
        setDiaChi(diaChiTmp + ', ' + tenXa + ', ' + tenQuan + ', ' + tenTinh)
    }


    const handleInputBDS = (e) => {
        e.persist();
        setBatDongSan({ ...batDongSanInput, [e.target.name]: e.target.value });
        setDiaChi(diaChiTmp + ', ' + tenXa + ', ' + tenQuan + ', ' + tenTinh)
    }

    const handleInputLoaiBDS = (e) => {
        e.persist();
        setLoaiBDS({ ...loaiBDS, [e.target.name]: e.target.value });
    }


    useEffect(() => {
        axios.get(`api/get-hangmuc-by-id/${loaiBDS.hangmuc}`).then(res => {
            if (res.data.status === 200) {
                setNhaHayDat(res.data.hangMuc.maLoaiHangMuc);
            }
        });
    }, [loaiBDS.hangmuc])



    // Xử lý thêm pháp lý vào mảng
    const submitPhapLy = (e) => {
        e.preventDefault();
        setPhapLy(arr => [...arr, phapLyInput])
    }

    const subMitBDS = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('maTkKhachHang', localStorage.getItem('user_id'));
        formData.append('tenHinhThuc', batDongSanInput.hinhthuc);
        formData.append('loaiBatDongSan', loaiBDS.hangmuc);
        formData.append('diaChi', diaChi);
        formData.append('tieuDe', batDongSanInput.tieude);
        formData.append('moTa', batDongSanInput.mota);
        formData.append('dienTich', batDongSanInput.dientich);
        formData.append('giaTien', batDongSanInput.gia);
        formData.append('thongTinPhapLy', batDongSanInput.phaply);
        formData.append('soPhongNgu', batDongSanInput.phongngu);
        formData.append('soPhongVeSinh', batDongSanInput.phongtam);
        formData.append('soTang', batDongSanInput.sotang);
        formData.append('huongNha', batDongSanInput.huongnha);
        formData.append('huongBanCong', batDongSanInput.bancong);
        formData.append('duongVao', batDongSanInput.duongvao);
        formData.append('noiThat', batDongSanInput.noithat);
        formData.append('matTien', batDongSanInput.mattien);
        formData.append('tenLienHe', batDongSanInput.tenlienhe);
        formData.append('soDienThoai', batDongSanInput.sdt);
        formData.append('diaChiLienHe', batDongSanInput.diachilienhe);
        formData.append('emailLienHe', batDongSanInput.email);
        formData.append('ngayBatDau', batDongSanInput.ngayBatDau);
        formData.append('ngayKetThuc', batDongSanInput.ngayKetThuc);
        formData.append('maLoaiTin', batDongSanInput.loaiTinDang);
        formData.append('soDu', soDuConLai);
        formData.append('hinhDaiDien', imageMain);
        imagesList.forEach((image_file) => {
            formData.append('images[]', image_file);
        });



        if(soDuConLai < 0 || inforUser.soDu == 0){
            swal("Tài khoản không đủ để đăng tin", "Cảnh báo");
        } else {
            axios.post(`/api/dang-tin-ban`, formData).then(res => {
                if (res.data.status === 200) {
                    swal("Thành công", res.data.message, "success");
                    setBatDongSan({
                        ...batDongSanInput,
                        phaply: '',
                        hinhthuc: '',
                        hangmuc: '',
                        tinh: '',
                        quan: '',
                        phuong: '',
                        diaChiTmp: '',
                        tieude: '',
                        mota: '',
                        dientich: '',
                        gia: '',
                        phongngu: '',
                        phongtam: '',
                        sotang: '',
                        huongnha: '',
                        bancong: '',
                        duongvao: '',
                        mattien: '',
                        noithat: '',
                        tenlienhe: '',
                        sdt: '',
                        diachilienhe: '',
                        email: ''
                    });
                    setdiaChiTmp('');
                    setImagesList([]);
                    setError([]);
                    //setError([]);
                } else if (res.data.status === 422) {
                    swal("Dữ liệu không được để trống", "Cảnh báo");
                    setError(res.data.errors);
                }
            });
        }
    }

    var areaInputChange = '';
    if (nhaHayDat == '1') {
        areaInputChange = (
            <div>
                <form onSubmit={subMitBDS} encType='multipart/form-data'>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="ban">
                            <div className="container">
                                <div className="card">
                                    <div className="card-body">
                                        <p className="font-weight-bold">Chọn hình thức <span className="text-danger">*</span></p>
                                        <div className="row">
                                            {hinhThucList.map((hinhThuc) => {
                                                return (
                                                    <div className="col-md-6" key={hinhThuc.id}>
                                                        <input checked={batDongSanInput.hinhthuc == hinhThuc.id} onChange={handleInputBDS} type="radio" id="html" name="hinhthuc" value={hinhThuc.id} />
                                                        <label htmlFor="html"> {hinhThuc.tenHinhThuc}</label>
                                                    </div>
                                                )
                                            })}
                                            <small className='text-danger'>{errorlist.tenHinhThuc}</small>
                                        </div>
                                        <p className="font-weight-bold">Thông tin cơ bản</p>
                                        <p>Loại bất động sản <span className="text-danger">*</span></p>
                                        <select name="hangmuc" value={loaiBDS.hangmuc} className="form-control mb-3" onChange={handleInputLoaiBDS}>
                                            {hangMucList.map((hangMuc) => {
                                                return (
                                                    <option key={hangMuc.id} value={hangMuc.id}>{hangMuc.tieuDe}</option>
                                                )
                                            })}

                                        </select>
                                        <small className='text-danger'>{errorlist.loaiBatDongSan}</small>
                                        <p className="font-weight-bold">Địa chỉ</p>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <p>Tỉnh thành phố <span className="text-danger">*</span></p>
                                                <select onChange={handleInputBDS} value={batDongSanInput.tinh} name="tinh" className="form-control">
                                                    <option>--- Chọn tỉnh thành ---</option>
                                                    {tinhThanhList.map((tinhThanh) => {
                                                        return (
                                                            <option key={tinhThanh.id} value={tinhThanh.id}>{tinhThanh.tenTinhThanh}</option>
                                                        );
                                                    })}


                                                </select>
                                            </div>

                                            <div className="col-md-6">
                                                <p>Quận huyện <span className="text-danger">*</span></p>
                                                <select onChange={handleInputBDS} name="quan" value={batDongSanInput.quan} className="form-control">
                                                    <option>--- Chọn quận huyện ---</option>
                                                    {quanHuyenList.map((quanHuyen) => {
                                                        return (
                                                            <option key={quanHuyen.id} value={quanHuyen.id}>{quanHuyen.tenQuanHuyen}</option>
                                                        );
                                                    })}
                                                </select>
                                            </div>

                                            <div className="col-md-12">
                                                <p>Phường / Xã</p>
                                                <select onChange={handleInputBDS} value={batDongSanInput.phuong} name="phuong" className="form-control">
                                                    <option>-- Chọn phường xã ---</option>
                                                    {xaPhuongList.map((xaPhuong) => {
                                                        return (
                                                            <option key={xaPhuong.id} value={xaPhuong.id}>{xaPhuong.tenXaPhuong}</option>
                                                        );
                                                    })}
                                                </select>
                                            </div>


                                            <div className="col-md-12">
                                                <p>Địa chỉ hiển thị trên tin đăng</p>
                                                <input type="text" onChange={handleDiaChi} value={diaChiTmp} className="form-control" placeholder="Nhập địa chỉ" />
                                                <small className='text-danger'>{errorlist.diaChi}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <br />
                                <div className="card">
                                    <div className="card-body">
                                        <p className="font-weight-bold">Thông tin bài viết</p>
                                        <p>Tiêu đề <span className="text-danger">*</span></p>
                                        <input type="text" name="tieude" onChange={handleInputBDS} value={batDongSanInput.tieude} className="form-control" />
                                        <small className='text-danger'>{errorlist.tieuDe}</small>

                                        <p>Mô tả <span className="text-danger">*</span></p>
                                        <input type="text" name="mota" onChange={handleInputBDS} value={batDongSanInput.mota} className="form-control" />
                                        <small className='text-danger'>{errorlist.moTa}</small>
                                    </div>
                                </div>

                                <br />
                                <div className="card">
                                    <div className="card-body">
                                        <p className="font-weight-bold">Thông tin bất động sản</p>
                                        <p>Diện tích <span className="text-danger">*</span></p>
                                        <input type="text" name="dientich" onChange={handleInputBDS} value={batDongSanInput.dientich} className="form-control" />
                                        <small className='text-danger'>{errorlist.dienTich}</small>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <p>Mức giá <span className="text-danger">*</span></p>
                                                <input type="text" name="gia" onChange={handleInputBDS} value={batDongSanInput.gia} className="form-control" />
                                                <small className='text-danger'>{errorlist.giaTien}</small>
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
                                                        <input checked={batDongSanInput.phaply == item} onChange={handleInputBDS} type="radio" name="phaply" value={item} />
                                                        <label htmlFor="html">{item}</label>
                                                    </div>)
                                                })
                                            }

                                            <div className="col-md-3">
                                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                                    Thêm
                                                </button>
                                            </div>
                                            <small className='text-danger'>{errorlist.thongTinPhapLy}</small>

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
                                                            <input type="text" onChange={handleInputPhapLy} value={phapLyInput} className="form-control" placeholder="Nhập giấy tờ pháp lý" />
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
                                                <input className="form-control" type='number' name="phongngu" onChange={handleInputBDS} value={batDongSanInput.phongngu} />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="col-md-6">
                                                <span>Số phòng tắm, vệ sinh</span>
                                            </div>

                                            <div className="col-md-6">
                                                <input className="form-control" type='number' name="phongtam" onChange={handleInputBDS} value={batDongSanInput.phongtam} />
                                            </div>
                                        </div>

                                        <br />
                                        <div className="row">
                                            <div className="col-md-6">
                                                <span>Số tầng</span>
                                            </div>

                                            <div className="col-md-6">
                                                <input className="form-control" type='number' name="sotang" onChange={handleInputBDS} value={batDongSanInput.sotang} />
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
                                                <input placeholder="Chọn hướng" className="form-control" type='text' name="huongnha" onChange={handleInputBDS} value={batDongSanInput.huongnha} />
                                                <small className='text-danger'>{errorlist.huongNha}</small>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Hướng ban công</p>
                                                <input className="form-control" placeholder="Chọn hướng" type='text' name="bancong" onChange={handleInputBDS} value={batDongSanInput.bancong} />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <p>Đường vào</p>
                                                <input placeholder="Nhập số mét" className="form-control" type='text' name="duongvao" onChange={handleInputBDS} value={batDongSanInput.duongvao} />
                                            </div>
                                            <div className="col-md-6">
                                                <p>Mặt tiền</p>
                                                <input placeholder="Nhập số mét" className="form-control" type='text' name="mattien" onChange={handleInputBDS} value={batDongSanInput.mattien} />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <p>Nội thất</p>
                                                <input type="text" className="form-control" name="noithat" onChange={handleInputBDS} value={batDongSanInput.noithat} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <br />
                                <div className="card">
                                    <div className="card-body">
                                        <h3>Hình ảnh & Video</h3>
                                        <p>Ảnh đại diện</p>
                                        <input name="imageMain" type="file" onChange={handleImageMain} />
                                        <img style={{ marginRight: "5px" }} src={srcPre} width={150} height={100} />
                                        <br />
                                        <br />
                                        <p>Ảnh chi tiết</p>
                                        <input multiple type='file' name="images[]" id="file" onChange={handleImage} />
                                        {imagePreview.map((imageSrc, idx) => {
                                            return (
                                                <img style={{ marginRight: "5px" }} key={idx} src={imageSrc} width={150} height={100} />
                                            )
                                        })}

                                    </div>
                                    <small className='text-danger'>{errorlist.images}</small>
                                </div>

                                <br />
                                <div className="card">
                                    <div className="card-body">
                                        <h3>Thông tin liên hệ</h3>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <p>Tên liên hệ <span style={{ color: "red" }}>*</span></p>
                                                <input type='text' className="form-control" name="tenlienhe" onChange={handleInputBDS} value={batDongSanInput.tenlienhe} />
                                                <small className='text-danger'>{errorlist.tenLienHe}</small>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Số điện thoại <span style={{ color: "red" }}>*</span></p>
                                                <input type='text' className="form-control" name="sdt" onChange={handleInputBDS} value={batDongSanInput.sdt} />
                                                <small className='text-danger'>{errorlist.soDienThoai}</small>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <p>Địa chỉ</p>
                                                <input type='text' className="form-control" name="diachilienhe" onChange={handleInputBDS} value={batDongSanInput.diachilienhe} />
                                                <small className='text-danger'>{errorlist.diaChiLienHe}</small>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Email</p>
                                                <input type='text' className="form-control" name="email" onChange={handleInputBDS} value={batDongSanInput.email} />
                                                <small className='text-danger'>{errorlist.emailLienHe}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="container text-center" style={{ backgroundColor: "white" }}>
                                    <button type="submit" className="btn btn-danger">Đăng tin</button>
                                </div>
                            </div>
                        </div>


                    </div>
                </form>
            </div>
        );

    } else {
        areaInputChange = (
            <form onSubmit={subMitBDS} encType='multipart/form-data'>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="ban">
                        <div className="container">
                            <div className="card">
                                <div className="card-body">
                                    <p className="font-weight-bold">Chọn hình thức <span className="text-danger">*</span></p>
                                    <div className="row">
                                        {hinhThucList.map((hinhThuc) => {
                                            return (
                                                <div className="col-md-6" key={hinhThuc.id}>
                                                    <input checked={batDongSanInput.hinhthuc == hinhThuc.id} onChange={handleInputBDS} type="radio" id="html" name="hinhthuc" value={hinhThuc.id} />
                                                    <label htmlFor="html"> {hinhThuc.tenHinhThuc}</label>
                                                </div>
                                            )
                                        })}
                                        <small className='text-danger'>{errorlist.tenHinhThuc}</small>
                                    </div>
                                    <p className="font-weight-bold">Thông tin cơ bản</p>
                                    <p>Loại bất động sản <span className="text-danger">*</span></p>
                                    <select name="hangmuc" value={loaiBDS.hangmuc} className="form-control mb-3" onChange={handleInputLoaiBDS}>
                                        {hangMucList.map((hangMuc) => {
                                            return (
                                                <option key={hangMuc.id} value={hangMuc.id}>{hangMuc.tieuDe}</option>
                                            )
                                        })}

                                    </select>
                                    <small className='text-danger'>{errorlist.loaiBatDongSan}</small>
                                    <p className="font-weight-bold">Địa chỉ</p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p>Tỉnh thành phố <span className="text-danger">*</span></p>
                                            <select onChange={handleInputBDS} value={batDongSanInput.tinh} name="tinh" className="form-control">
                                                <option>--- Chọn tỉnh thành ---</option>
                                                {tinhThanhList.map((tinhThanh) => {
                                                    return (
                                                        <option key={tinhThanh.id} value={tinhThanh.id}>{tinhThanh.tenTinhThanh}</option>
                                                    );
                                                })}


                                            </select>
                                        </div>

                                        <div className="col-md-6">
                                            <p>Quận huyện <span className="text-danger">*</span></p>
                                            <select onChange={handleInputBDS} name="quan" value={batDongSanInput.quan} className="form-control">
                                                <option>--- Chọn quận huyện ---</option>
                                                {quanHuyenList.map((quanHuyen) => {
                                                    return (
                                                        <option key={quanHuyen.id} value={quanHuyen.id}>{quanHuyen.tenQuanHuyen}</option>
                                                    );
                                                })}
                                            </select>
                                        </div>

                                        <div className="col-md-12">
                                            <p>Phường / Xã</p>
                                            <select onChange={handleInputBDS} value={batDongSanInput.phuong} name="phuong" className="form-control">
                                                <option>-- Chọn phường xã ---</option>
                                                {xaPhuongList.map((xaPhuong) => {
                                                    return (
                                                        <option key={xaPhuong.id} value={xaPhuong.id}>{xaPhuong.tenXaPhuong}</option>
                                                    );
                                                })}
                                            </select>
                                        </div>


                                        <div className="col-md-12">
                                            <p>Địa chỉ hiển thị trên tin đăng</p>
                                            <input type="text" onChange={handleDiaChi} value={diaChiTmp} className="form-control" placeholder="Nhập địa chỉ" />
                                            <small className='text-danger'>{errorlist.diaChi}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <br />
                            <div className="card">
                                <div className="card-body">
                                    <p className="font-weight-bold">Thông tin bài viết</p>
                                    <p>Tiêu đề <span className="text-danger">*</span></p>
                                    <input type="text" name="tieude" onChange={handleInputBDS} value={batDongSanInput.tieude} className="form-control" />
                                    <small className='text-danger'>{errorlist.tieuDe}</small>

                                    <p>Mô tả <span className="text-danger">*</span></p>
                                    <input type="text" name="mota" onChange={handleInputBDS} value={batDongSanInput.mota} className="form-control" />
                                    <small className='text-danger'>{errorlist.moTa}</small>
                                </div>
                            </div>

                            <br />
                            <div className="card">
                                <div className="card-body">
                                    <p className="font-weight-bold">Thông tin bất động sản</p>
                                    <p>Diện tích <span className="text-danger">*</span></p>
                                    <input type="text" name="dientich" onChange={handleInputBDS} value={batDongSanInput.dientich} className="form-control" />
                                    <small className='text-danger'>{errorlist.dienTich}</small>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <p>Mức giá <span className="text-danger">*</span></p>
                                            <input type="text" name="gia" onChange={handleInputBDS} value={batDongSanInput.gia} className="form-control" />
                                            <small className='text-danger'>{errorlist.giaTien}</small>
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
                                                    <input checked={batDongSanInput.phaply == item} onChange={handleInputBDS} type="radio" name="phaply" value={item} />
                                                    <label htmlFor="html">{item}</label>
                                                </div>)
                                            })
                                        }
                                        <small className='text-danger'>{errorlist.thongTinPhapLy}</small>

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
                                                        <input type="text" onChange={handleInputPhapLy} value={phapLyInput} className="form-control" placeholder="Nhập giấy tờ pháp lý" />
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
                                        <div className="col-md-3">
                                            <span className="font-weight-bold">Mô tả bổ sung</span>
                                        </div>
                                        <div className="col-md-9">
                                            <hr />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <p>Hướng nhà</p>
                                            <input placeholder="Chọn hướng" className="form-control" type='text' name="huongnha" onChange={handleInputBDS} value={batDongSanInput.huongnha} />
                                            <small className='text-danger'>{errorlist.huongNha}</small>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <p>Đường vào</p>
                                            <input placeholder="Nhập số mét" className="form-control" type='text' name="duongvao" onChange={handleInputBDS} value={batDongSanInput.duongvao} />
                                        </div>
                                        <div className="col-md-6">
                                            <p>Mặt tiền</p>
                                            <input placeholder="Nhập số mét" className="form-control" type='text' name="mattien" onChange={handleInputBDS} value={batDongSanInput.mattien} />
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <br />
                            <div className="card">
                                <div className="card-body">
                                    <h3>Hình ảnh & Video</h3>
                                    <p>Ảnh đại diện</p>
                                    <input name="imageMain" type="file" onChange={handleImageMain} />
                                    <img style={{ marginRight: "5px" }} src={srcPre} width={150} height={100} />
                                    <br />
                                    <br />
                                    <p>Ảnh chi tiết</p>
                                    <input multiple type='file' name="images[]" id="file" onChange={handleImage} />
                                    {imagePreview.map((imageSrc, idx) => {
                                        return (
                                            <img style={{ marginRight: "5px" }} key={idx} src={imageSrc} width={150} height={100} />
                                        )
                                    })}
                                </div>
                                <small className='text-danger'>{errorlist.images}</small>
                            </div>

                            <br />
                            <div className="card">
                                <div className="card-body">
                                    <h3>Thông tin liên hệ</h3>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p>Tên liên hệ <span style={{ color: "red" }}>*</span></p>
                                            <input type='text' className="form-control" name="tenlienhe" onChange={handleInputBDS} value={batDongSanInput.tenlienhe} />
                                            <small className='text-danger'>{errorlist.tenLienHe}</small>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Số điện thoại <span style={{ color: "red" }}>*</span></p>
                                            <input type='text' className="form-control" name="sdt" onChange={handleInputBDS} value={batDongSanInput.sdt} />
                                            <small className='text-danger'>{errorlist.soDienThoai}</small>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <p>Địa chỉ</p>
                                            <input type='text' className="form-control" name="diachilienhe" onChange={handleInputBDS} value={batDongSanInput.diachilienhe} />
                                            <small className='text-danger'>{errorlist.diaChiLienHe}</small>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Email</p>
                                            <input type='text' className="form-control" name="email" onChange={handleInputBDS} value={batDongSanInput.email} />
                                            <small className='text-danger'>{errorlist.emailLienHe}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="container text-center" style={{ backgroundColor: "white" }}>
                                <button type="submit" className="btn btn-danger">Đăng tin</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }



    return (
        <div className="container">
            <br />
            <br />
            <br />
            <br />
            <div className="row">
                <div className="col-md-3">
                    <div className="container">

                        <div className="container mb-3 text-center" style={{ padding: "10px" }}>
                            <div style={{ backgroundColor: "#dcdcdc", width: "240px", borderRadius: "10px", padding: "10px" }}>
                                <img src={src} width={80} height={80} className="rounded mx-auto d-block mb-3" />
                                <span className="font-weight-bold">{inforUser.name}</span>
                                <br />
                                <p className="font-weight-bold">Số dư tài khoản: {inforUser.soDu}đ</p>
                                <Link to="/nap-tien-2" className="btn btn-danger">Nạp tiền</Link>
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
                                    <li><Link to="/danh-sach-tin-da-dang">Danh sách tin</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="container">
                        <div className="card">
                            <div className="card-body">

                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <a href="#ban" className="nav-link active" data-bs-toggle="tab">Bán / Cho thuê</a>
                                    </li>
                                </ul>
                                {areaInputChange}
                            </div>

                        </div>

                    </div>
                </div>

                <div className="col-md-3" style={{ position: "fixed", right: "20px" }}>
                    <div className="container">
                        <div className="card">
                            <div className="card-body">
                                <h5>Loại tin đăng</h5>
                                <select className="form-control" name="loaiTinDang" onChange={handleInputBDS} value={batDongSanInput.loaiTinDang}>
                                {loaitinList.map((loaiTin, idx) => {
                                    return (
                                        <option key={idx} value={loaiTin.id}>{loaiTin.tenLoaiTinDang}</option>
                                    )
                                })}
                                    
                                </select>
                                <br />
                                <div className="row">
                                    <div className="col-md-5">
                                        <h6>Số ngày đăng</h6>
                                        <input type="number" name="soNgayDang" onChange={handleInputBDS} value={batDongSanInput.soNgayDang} className="form-control" />
                                    </div>
                                    <div className="col-md-7">
                                        <h6>Ngày bắt đầu</h6>
                                        <input placeholder="dd-mm-yyyy" name="ngayBatDau" onChange={handleInputBDS} value={batDongSanInput.ngayBatDau} type="date"  className="form-control" />
                                    </div>


                                    <div className="container text-center">
                                        <br />
                                        <p>Kết thúc ngày: {batDongSanInput.ngayKetThuc}</p>
                                    </div>
                                </div>
                                <br />
                                <div className="container text-center" style={{ backgroundColor: "#edf7ff", padding: "10px", borderRadius: "5px" }}>
                                    <p><span className="font-weight-bold">Đơn giá / ngày:</span>  {batDongSanInput.giaTin} vnđ</p>
                                    <p><span className="font-weight-bold">Số ngày đăng tin:</span> {batDongSanInput.soNgayDang} ngày</p>
                                    <hr />
                                    <br />
                                    <p>Bạn trả: {TienTra} VNĐ</p>
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