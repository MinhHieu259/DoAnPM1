import Home from "../components/web/Home";
import Login from "../components/web/Login";
import Page403 from "../components/errors/Page403";
import Page404 from "../components/errors/Page404";
const publicRoutesList = [
    {path: '/', exact: true, name: 'Home', component: Home},
    {path: '/login', exact: true, name: 'Login', component: Login},
    {path: '/403', exact: true, name: 'Page403', component: Page403},
    {path: '/404', exact: true, name: 'Page404', component: Page404},
];
export default publicRoutesList;