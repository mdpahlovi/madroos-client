import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/UserContext";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return (
            <div className="w-full h-[400px] flex justify-center items-center">
                <div className="text-8xl text-primary font-bold">Loading...</div>
            </div>
        );
    }
    if (user && user.uid) {
        return children;
    }
    return <Navigate to="/signin" state={{ from: location }} replace />;
};

export default PrivateRoute;
