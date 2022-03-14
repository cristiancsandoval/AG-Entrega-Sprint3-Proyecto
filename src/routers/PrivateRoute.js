import { Navigate } from "react-router-dom"

const PrivateRoute = ({isAuthenticated, redirect, children}) => {

    return  isAuthenticated
    ? children
    : <Navigate to={redirect}/>
}

export default PrivateRoute