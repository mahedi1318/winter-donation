import { useContext } from "react"
import authContext from "../context Api/authContextApi"

const UseAuth = ()=>{
    const catchValue = useContext(authContext)
    return catchValue
}


export default UseAuth;