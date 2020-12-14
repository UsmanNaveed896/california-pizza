import Axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { apiPath } from '../../cofig';
import '../login/login.scss'

export default () => {
    const [email,setEmail]=useState();
    const[password,setPassword]=useState();
    const onSubmit=(e)=>{
        e.preventDefault()
        let payLoad={
            email:email,
            password:password,
        }
        Axios.post(apiPath +"/signin/Restowner" , payLoad).then (Response=>{
            console.log("login",Response)
            localStorage.setItem("token",Response && Response.data && Response.data.token)
        })
        }
    return (
        <>
     <div className="user-login col-md-10 row ">
                <div className="container user-login-inputs mt-5">
                    <div className="login-credentials col-md-7">
                    <div className="headings">
                    <h2>EXISTING CUSTOMER</h2>
                    <p> Enter your e-mail address and password to log in.</p>
                    </div>
                    <div className="user-form ">
                        <form >
                            <label for="fname"></label>
                            <input type="text" id="fname" name="Email*" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
                            <input type="password" id="lname" name="Password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                            <p>Forgot Password?</p>
                            <input type="submit" value="SIGN IN" onClick={(e)=>onSubmit(e)} />
                        </form>
                    </div>
                    </div>

                    <div className="new-customer-login col-md-4">
                        <h3>NEW CUSTOMER</h3>
                        <p>By creating an account with us, purchasing on our website becomes much faster and easier.</p>
                        <button className="account">CREATE ACCOUNT</button>
                    </div>
                </div>
            </div>
        </>
    )
}