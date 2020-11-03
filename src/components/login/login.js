import React from 'react'
import '../login/login.scss'

export default () => {
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
                        <form action="">
                            <label for="fname"></label>
                            <input type="text" id="fname" name="Email*" placeholder="Email" />
                            <input type="text" id="lname" name="Password" placeholder="Password" />
                            <p>Forgot Password?</p>
                            <input type="submit" value="SIGN IN" disabled />
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