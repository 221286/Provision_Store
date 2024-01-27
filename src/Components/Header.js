import React, { useContext, useEffect } from 'react'

import { Link, useNavigate } from 'react-router-dom';
import userContext from './ContextAPI/Context';

import img1 from './Constants/Prathistha.png'



const Header = () => {
  const {Useloggedin}= useContext(userContext);
  const navigate = useNavigate();
  useEffect(()=>{
    if(!Useloggedin){
      navigate("/")
    }
  },[])
  
  
  return (
    <div className={'w-screen mx-2 my-1 overflow-hidden p-3 border border-green-500 rounded-lg flex flex-col sm:flex-row sm:items-center'}>
      <div>
        <img src={img1} alt="Header Logo" className='w-2/12'/>
      </div>
      {Useloggedin&&(<div>
        <ul className='flex items-center  text-4xl '>
          <Link to="/Login/Mainpage"><li className='mx-6 hover:text-green-500'>Shop</li></Link>
          <Link to="/Login/About"><li className='mx-6 hover:text-green-500'>About</li></Link>
          
          
        </ul>
      </div>)}
      
    </div>
  )
}

export default Header;
