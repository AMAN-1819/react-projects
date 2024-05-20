import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData()
    // const[data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/AMAN-1819')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-red-600 text-white p-4 text-3xl'>
      Github followers:{data.followers}
      <img src={data.avatar_url} alt="Github Profile" width={300} className="display-block ml-auto mr-auto mt-5 "/>

    </div>
  )
}

export default Github

export const githubInfoLoader= async()=>
    {
      const response =await fetch('https://api.github.com/users/AMAN-1819')
      return response.json()
    }