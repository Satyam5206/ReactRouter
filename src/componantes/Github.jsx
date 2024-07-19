import React from 'react'
import { useState,useEffect } from 'react'

const Github = () => {
  const [data, setdata] = useState( [])
  useEffect(() => {
    fetch('https://api.github.com/users/Satyam5206')
    .then(Response=>Response.json())
    .then(data=>{console.log(data)
      setdaat(data)
    })
    
  }, [ ])
  
  return (
    <div className='text-center m-5 bg-slate-700 p-4 text-3xl text-white'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="Git Picture" width={300} /></div>
    
  )
}

export default Github