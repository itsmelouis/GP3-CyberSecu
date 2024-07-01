import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../config/AuthContext';

interface ProtectedRouteProps {
    element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
    const { token } = useAuth();

    return token ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
