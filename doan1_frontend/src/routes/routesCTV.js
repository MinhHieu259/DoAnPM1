import Dashboard from "../components/ctv/Dashboard";
import XacMinhBaiDang from "../components/ctv/XacMinhBaiDang";

const routesCTV = [
    {path: '/cong-tac-vien', exact: true, name: 'CTV'},
    {path: '/cong-tac-vien/dashboard', exact: true, name: 'Dashboard', component: Dashboard},
    {path: '/cong-tac-vien/xac-minh-bai-dang', exact: true, name: 'XacMinhBaiDang', component: XacMinhBaiDang},
];

export default routesCTV;