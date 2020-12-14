import React from 'react'
import { useState } from 'react';
import {apiPath} from '../../cofig'
import '../signup//register.scss'
import Axios from 'axios'
export default () => {
    const [email,setEmail] =useState();
    const[password,setPassword]=useState();
    const[confirmPassword,setConfirmPassword]=useState();
    const[firstName,setFirstname]=useState();
    const[lastName,setLastName]=useState();
    const[address,setAddress]=useState();
     const[businessName,setBusinessName]=useState();
    const[businessType,setBusinessType]=useState();
    const[phone,setPhone]=useState();
    const[passwordValid,setPasswordValid]=useState(false);
   
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(password !== confirmPassword){
           setPasswordValid(true);
        }
        else{
            let payLoad={
                businessName:businessName,
                address:address,
                telephone:phone,
                firstName:firstName,
                lastName:lastName, 
                password:password, 
                email:email,
                businessType:businessType,  
         }
            Axios.post(apiPath + "/signup/restOwnerSignup",payLoad).then (Response =>{
                console.log("response",Response)
            })
        }
    }
    return (
        <>
            <div className="user-register col-md-10 ">
                <div className="container user-inputs mt-5">
                    <div className="headings">
                    <h2>NEW CUSTOMER</h2>
                    <p> Already Registered? <span ><a href="/login/" style={{color: "#da291c"}}>Sign in</a></span></p>
                    <h3>USER ACCOUNT</h3>
                    </div>
                    <div className="user-form col-md-7">
                        <form action="">
                            <label for="fname"></label>
                            <input type="text" id="fname" name="Email*" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                            <div className="row jj">
                                <div className="col-md-6"><input type="password" id="lname" name="Password" placeholder="Password*" onChange={(e)=>{setPassword(e.target.value)}} /></div>
                                <div className="col-md-6"> <input type="password" id="lname" name="Password" placeholder="Repeat Password*" 
                                onChange={(e)=>{
                                    setConfirmPassword(e.target.value)
                                    setPasswordValid(false)
                                }} /></div>
                            </div>
                            <h3 className="mt-5">CONTACT INFORMATION</h3>
                            <div className="row jj">
                                <div className="col-md-6"><input type="text" id="lname" name="First Name" placeholder="First Name"onChange={(e)=>{setFirstname(e.target.value)}} /></div>
                                <div className="col-md-6"> <input type="text" id="lname" name="Last Name" placeholder="Last Name" onChange={(e)=>{setLastName(e.target.value)}}/></div>
                            </div>
                            <textarea type="text" id="lname" name="Address" placeholder="Address" onChange={(e)=>{setAddress(e.target.value)}}/>
                            <div className="row jj">
                                <div className="col-md-4"><input type="text" id="lname" name="Businessname" placeholder="BusinessName" onChange={(e)=>{setBusinessName(e.target.value)}}/></div>
                                <div className="col-md-4"><input type="text" id="lname" name="BusinessType" placeholder="BusinessType" onChange={(e)=>{setBusinessType(e.target.value)}}/></div>
                                {/* <div className="col-md-4"> <input type="text" id="lname" name="City" placeholder="City" /></div> */}
                            </div>
                            <div className="row jj">
                                {/* <div className="col-md-3"><input type="text" id="lname" name="Prefix" placeholder="Prefix" /></div> */}
                                <div className="col-md-3"><input type="text" id="lname" name="Phone" placeholder="Phone*" onChange={(e)=>{setPhone(e.target.value)}}/></div>
                                {/* <div className="col-md-3"> <input type="text" id="lname" name="Post/Zip Code" placeholder="Post/Zip Code" /></div> */}
                            </div>
                            {passwordValid && <p>Password is not matched</p>}
                            {/* CHECKBOXES */}

                            <div class="checkbox">
                                <label><input type="checkbox" value="" />I agree with the terms and conditions.</label>
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox" value="" />I wish to receive emails about new promotions/deals/products.</label>
                            </div>
                            <input type="submit" value="CREATE ACCOUNT" onClick={(e)=>handleSubmit(e)} />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}