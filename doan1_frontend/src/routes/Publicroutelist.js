import Home from "../components/web/Home";
import Login from "../components/web/Login";
import Page403 from "../components/errors/Page403";
import Page404 from "../components/errors/Page404";
import UserInfor from "../components/web/UserInfor";
import DangTin from "../components/web/DangTin";
import DoiMatKhau from "../components/web/DoiMatKhau";
import ChiTietBDS from "../components/web/ChiTietBDS";
import NapTien from "../components/web/NapTien";

const publicRoutesList = [
    {path: '/', exact: true, name: 'Home', component: Home},
    {path: '/login', exact: true, name: 'Login', component: Login},
    {path: '/403', exact: true, name: 'Page403', component: Page403},
    {path: '/404', exact: true, name: 'Page404', component: Page404},
    {path: '/thongtincanhan', exact: true, name: 'UserInfor', component: UserInfor},
    {path: '/dang-tin-mua-ban-nha-dat', exact: true, name: 'DangTin', component: DangTin},
    {path: '/doi-mat-khau', exact: true, name: 'DoiMatKhau', component: DoiMatKhau},
    {path: '/chi-tiet-bat-dong-san', exact: true, name: 'ChiTietBDS', component: ChiTietBDS},
    {path: '/nap-tien', exact: true, name: 'NapTien', component: NapTien}
];
export default publicRoutesList;