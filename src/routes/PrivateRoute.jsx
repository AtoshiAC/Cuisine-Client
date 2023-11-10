import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import Spinner from "react-bootstrap/Spinner";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return (
          <div  className='text-align-center'>
            <Spinner
              animation="border"
              variant="secondary"
              style={{ width: "50px", height: "50px", marginLeft: "300px",marginTop:'20px'}}
            /> <span className='fs-1 text-secondary'>Loading....</span>
          </div>
        );
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" replace={true}></Navigate>
};

export default PrivateRoute;