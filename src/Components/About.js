import React, { useContext, useEffect } from 'react'
import userContext from './ContextAPI/Context'
import { useNavigate } from 'react-router-dom';

const About = () => {
  const {Useloggedin}= useContext(userContext);
  const navigate = useNavigate();
  useEffect(()=>{
    if(!Useloggedin){
      navigate("/")
    }
  })
  
  return (
    <div>
      
    </div>
  )
}

export default About
