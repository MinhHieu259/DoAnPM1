import Dashboard from '../components/admin/Dashboard';
import DuyetBaiDang from '../components/admin/DuyetBaiDang';
import DuyetNapTIen from '../components/admin/DuyetNapTien';
import QuanLyTaiKhoan from '../components/admin/QuanLyTaiKhoan';
import themHangMuc from '../components/admin/themHangMuc';
import themHinhThuc from '../components/admin/themHinhthuc';
import themLoaiTinDang from '../components/admin/themLoaiTinDang';
import XacNhanYcMua from '../components/admin/XanNhanYcMua';


const routes = [
    {path: '/admin', exact: true, name: 'Admin'},
    {path: '/admin/dashboard', exact: true, name: 'Dashboard', component: Dashboard},
    {path: '/admin/them-hinh-thuc', exact: true, name: 'themHinhThuc', component: themHinhThuc},
    {path: '/admin/them-hang-muc', exact: true, name: 'themHangMuc', component: themHangMuc},
    {path: '/admin/them-loai-tin', exact: true, name: 'themLoaiTin', component: themLoaiTinDang},
    {path: '/admin/quan-ly-tai-khoan', exact: true, name: 'quanLyTaiKhoan', component: QuanLyTaiKhoan},
    {path: '/admin/duyet-nap-tien', exact: true, name: 'duyetNapTien', component:DuyetNapTIen},
    {path: '/admin/duyet-bai-dang', exact: true, name: 'duyetBaiDang', component:DuyetBaiDang},
    {path: '/admin/xac-nhan-yeu-cau', exact: true, name: 'xnYeuCauMua', component:XacNhanYcMua}
];
export default routes;