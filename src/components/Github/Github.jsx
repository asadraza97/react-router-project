import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github(){
   const data = useLoaderData()
    // const [data, setData] =useState([ ])
    // useEffect( () =>{
    //     fetch('https://api.github.com/users/asadraza97')
    //     .then( res => res.json())
    //     .then( data => {
    //         console.log(data, "data");
    //         setData(data)
    //     })
    // }, [])
    return(
        <div className=" text-center m-4 bg-gray-600 text-white text-3xl p-4"> Github Follower : {data.followers} 
        <img src={data.avatar_url} alt="Git picture "  width={300} />
        </div>
    )
}
export default Github

export const githubInfo = async( ) =>{
  const response =  await fetch('https://api.github.com/users/asadraza97')
  return response.json()
}