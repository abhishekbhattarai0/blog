import React from "react";
import authService from '../../appwrite/auth_service'
import {logout} from '../../store/authSlice'
import { useDispatch } from "react-redux";
import Button from "../index";

function LogoutBtn(){
    const dispatch = useDispatch();
    const logoutHandler = ()=>{
        authService.logout().then(()=>{
            dispatch( logout())
        })
    }
    return(
        <Button
        className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
        type='submit'
        onSubmit={logoutHandler}
        >
            Logout
        </Button>
    )
}

export default LogoutBtn