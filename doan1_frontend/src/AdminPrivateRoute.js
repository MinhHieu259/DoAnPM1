import React from 'react';
import { Route } from 'react-router-dom';

import Masterlayout from './layouts/admin/MasterLayout';


function AdminPrivateRoute(...rest) {
  
    
   
    return (
        <Route {...rest}
            render={({ props, location }) =>
               
                    (<Masterlayout {...props} />)
                    

            }
        />
    );
}

export default AdminPrivateRoute;


