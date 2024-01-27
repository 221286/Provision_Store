import React, { useContext,  useState } from 'react'
import { validation } from './Login functions/Validation';
import { MakeAPICall } from './Login functions/MakeAPIcall';
import { useNavigate } from 'react-router-dom';
import userContext from './ContextAPI/Context';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [warning,setwarning] = useState(null);
    const navigate = useNavigate();
    const {setlogindata} =useContext(userContext);
    
    
    
    const handleLogin = async () => {
      // Validate email & password
      setwarning(validation(email,password))
        if(warning){
          return;
        }
      
      try {
        
        
  // Convert password to SHA-256 format using Web Crypto API
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const sha256Password = Array.from(new Uint8Array(hashBuffer))
    .map(byte => byte.toString(16).padStart(2, '0'))
    .join('');
       // Simulating API call 
        
        const response = await MakeAPICall(email, sha256Password);
  
        if (response.ok) {
          const data = await response.json();
          // Handling successful login
          setlogindata(true);
          navigate("/Login/Mainpage");
          
        } else {
          // Handling login failure 
          setwarning('Login failed', response.statusText);
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    };
  
    
  
    return (<div className='h-full   w-screen flex justify-center items-center '>
<div className='flex flex-col w-full sm:w-3/12 lg:w-5/12 md:w-7/12 h-full p-4 m-2 border border-green-300 bg-green-600 rounded-lg'>
        <label className='mx-2'>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className='p-2 m-2 min-w-full border rounded-lg border-black'/>
  
        <label className='mx-2'>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='p-2 m-2 min-w-full border rounded-lg border-black' />
        <p className='m-2 text-red-600 font-extrabold text-2xl'>{warning}</p>
        <button onClick={handleLogin} className='bg-green-200 rounded-lg my-10  ml-2 p-3'>Login</button>
      </div>
    </div>
      
    );
  };


export default Login
