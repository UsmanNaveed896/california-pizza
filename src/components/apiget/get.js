import React, { useState } from 'react'
import axios from 'axios'
import  { apiPath2 } from '../../cofig'
export default()=>{
    const [saveData,setSaveData]=useState();
    const handleSubmit=(e)=>{
        let token=localStorage.getItem("token")
        e.preventDefault()
        let header = {
            headers: {
              Authorization: `Bearer ${token}`
            }
          };
        axios.get(apiPath2 + "/dashboard/weekly",header).then (Response=>{
            setSaveData(Response && Response.data)
            console.log("get",Response) 
     })
    }
    return(
        <>
        <p className="usman " style={{fontSize:'20px'}}>usman</p>
    <p>{saveData && saveData.Weeklysales}</p>
    <p>{saveData && saveData.weeklyOPickUpCount}</p>
    <p>{saveData && saveData.weeklyOrderCount}</p>
    <p>{saveData && saveData.weeklyReservation}</p>
        <button onClick={(e)=>handleSubmit(e)}>usman khan jadoon</button>
        </>
    )
}