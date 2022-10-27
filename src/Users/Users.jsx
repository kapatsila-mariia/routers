import "./Users.css"
import { Outlet } from "react-router-dom"

const Users = () => {
    
    return (
        <div>
            <h2>This is Users page</h2>
            <Outlet />
        </div>
    )

}

export default Users