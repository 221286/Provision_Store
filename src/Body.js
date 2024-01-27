import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import {  useState } from "react";
import userContext from "./Components/ContextAPI/Context";


const Body =()=>{
    const [logindata,setlogindata]= useState(false)
    
    return (<div className="h-full">
        <userContext.Provider value={{Useloggedin:logindata, setlogindata}}>
        <Header></Header>
        
        <Outlet/>
        </userContext.Provider>
        
    </div>)
}

export default Body;