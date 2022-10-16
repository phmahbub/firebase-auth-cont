import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../firebase/UserContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <div className='flex justify-center'>
        <button className="btn btn-primary loading ">loading</button>
        </div>
    }

    if (user && user.uid) {
        return children
    }
    return <Navigate to='/login'></Navigate>

};

export default PrivateRoute;