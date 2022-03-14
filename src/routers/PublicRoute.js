import { Navigate } from "react-router-dom"

const PublicRoute = ({isAuthenticated, redirect, children}) => {

    return  !isAuthenticated
    ? children
    : <Navigate to={redirect}/>
}

export default PublicRoute