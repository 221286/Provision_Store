import React, { useContext } from 'react'
import { PROVISION_STORE_LOGO } from './Constants/Constants';
import { Link } from 'react-router-dom';
import userContext from './ContextAPI/Context';


const Header = () => {
  const {Useloggedin}= useContext(userContext);
  
  
  return (
    <div className={'w-screen mx-2 my-1 overflow-hidden p-3 border border-green-500 rounded-lg flex items-center '}>
      <div>
        <img src={PROVISION_STORE_LOGO} alt="Header Logo" className='w-2/12'/>
      </div>
      {Useloggedin&&(<div>
        <ul className='flex items-center justify-between text-4xl '>
          <Link to="/Login/Mainpage"><li className='mx-6 hover:text-green-500'>Shop</li></Link>
          <Link to="/Login/About"><li className='mx-6 hover:text-green-500'>About</li></Link>
          
          
        </ul>
      </div>)}
      
    </div>
  )
}

export default Header;
