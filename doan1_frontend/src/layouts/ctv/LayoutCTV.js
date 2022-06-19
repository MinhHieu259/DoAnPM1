import React, { useEffect } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import '../../css/styles.css';
import '../../css/bootstrap.min.css'
// import '../../js/scripts';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import routesCTV from '../../routes/routesCTV';


const LayoutCTV = () => {
    return(
        <div className="sb-nav-fixed">
            <Navbar/>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar/>
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <Switch>
                            {routesCTV.map((route, idx)=>{
                                return(
                                    route.component && (
                                        <Route
                                            key={idx}
                                            path={route.path}
                                            exact={route.exact}
                                            name={route.name}
                                            render={(props) => (
                                                <route.component{...props}/>
                                            )}
                                        />
                                    )
                                )
                            })}
                           <Redirect from='/cong-tac-vien' to={"/cong-tac-vien/dashboard"}/>
                        </Switch>
                    </main>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}
export default LayoutCTV;