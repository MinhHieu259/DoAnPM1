import React, { useEffect } from 'react';

// import '../../js/main.js';

import {Switch, Route} from 'react-router-dom';
import publicRoutesList from '../../routes/Publicroutelist';






const FrontendLayout = () => {
    return(
                 <div>
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
                </div>
    );
}
export default FrontendLayout;