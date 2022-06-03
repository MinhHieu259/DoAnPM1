import React, { useEffect } from 'react';
import '../../css/bootstrap421.min.css'
import {Switch, Route} from 'react-router-dom';
import publicRoutesList from '../../routes/Publicroutelist';
import Footer from './Footer';
import NavBar from './NavBar';
import {mainJS} from '../../js/main';




const FrontendLayout = () => {
    useEffect(() => {
        mainJS()
    }, []);
    
    return(
      <div>
            <NavBar/>
                 <main id="main">
                        <Switch>
                            {publicRoutesList.map((routedata, idx)=>{
                                return(
                                    routedata.component && (
                                        <Route
                                            key={idx}
                                            path={routedata.path}
                                            exact={routedata.exact}
                                            name={routedata.name}
                                            render={(props) => (
                                                <routedata.component{...props}/>
                                            )}
                                        />
                                    )
                                )
                            })}
                       
                        </Switch>
                </main>
                <Footer/>
      </div>
    );
}
export default FrontendLayout;