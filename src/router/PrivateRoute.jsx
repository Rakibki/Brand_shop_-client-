import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { authContext } from "../providers/AuthProvider"

const PrivateRoute = ({children}) => {
    const {user, loadding} = useContext(authContext)

    if(loadding) {
        return <div className="flex justify-center items-center w-full h-screen" >
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    if(user) {
        return children
    }

    return <Navigate to={"/login"}></Navigate>

}

export default PrivateRoute