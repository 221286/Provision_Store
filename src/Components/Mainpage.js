import React, { useContext, useEffect, useState } from 'react'
import Card from './Card';
import userContext from './ContextAPI/Context';
import { useNavigate } from 'react-router-dom';

const Mainpage = () => {
    const [mapdata,setmapdata]=useState(null);
    const [filterdata,setfilterdata]= useState(null);
    const [search, setsearch]= useState("");
    const {Useloggedin}=useContext(userContext);
    const navigate=useNavigate();
     useEffect(()=>{
        if(!Useloggedin){
            navigate("/");
            }
     })
    
    useEffect(()=>{
     fetchData();
     
    },[]);
    
    
    const fetchData = async()=>{
        const data = await fetch("https://api.kalpav.com/api/v1/product/category/retail");
        const json = await data.json();
        setmapdata(json.response);
        setfilterdata(json.response)
    }

    
        
 
     
    if(mapdata === null){
        return;
    }
    
    return (
    <div className='m-2  ml-5'>
        <form onSubmit={(e)=>{e.preventDefault();}} className='mt-3'>
            <input type="text" className=' border border-black px-2 rounded-md ' onChange={(e)=>{setsearch(e.target.value)}}/>
            <input type="submit" className='px-3 rounded-lg  mx-2 bg-green-600' value={"submit"} onClick={()=>{
                const results = mapdata.filter((find)=>find.productCategory.productCategoryName.toUpperCase().includes(search.toUpperCase()));
                setfilterdata(results);
            }}/>
        </form>
        <div className='mt-20 flex flex-wrap justify-around'>
        {filterdata.map((datas)=>(<Card key={datas.productCategory.productCategoryId} data ={datas}></Card>))}
        </div>

        
      
    </div>
  )
}

export default Mainpage
