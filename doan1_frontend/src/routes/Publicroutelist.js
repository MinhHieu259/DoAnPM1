import Home from "../components/web/Home";
import Login from "../components/web/Login";

const publicRoutesList = [
    {path: '/', exact: true, name: 'Home', component: Home},
    {path: '/login', exact: true, name: 'Login', component: Login},
];
export default publicRoutesList;