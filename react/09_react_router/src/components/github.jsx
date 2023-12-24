import React from "react";
import { useState,useEffect } from "react";
import { useLoaderData } from "react-router-dom";
function Github(){
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/torvalds')
    //     .then(res=>res.json())
    //     .then(data=>setData(data))
    // },[])
    return (
        <div className="m-4 bg-gray-600 text-white p-4 text-3xl flex gap-14 align justify-center items-center">
            <img src={data.avatar_url} width={300} alt="Avatar" />
            Github followers: {data.followers}
        </div>
    )
}
export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/torvalds')
    return response.json()
}