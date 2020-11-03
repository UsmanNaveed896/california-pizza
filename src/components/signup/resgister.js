import React from 'react'
import '../signup//register.scss'

export default () => {
    return (
        <>
            <div className="user-register col-md-10 ">
                <div className="container user-inputs mt-5">
                    <div className="headings">
                    <h2>NEW CUSTOMER</h2>
                    <p> Already Registered? <span style={{color: "#da291c"}}>Sign in</span></p>
                    <h3>USER ACCOUNT</h3>
                    </div>
                    <div className="user-form col-md-7">
                        <form action="">
                            <label for="fname"></label>
                            <input type="text" id="fname" name="Email*" placeholder="Email" />
                            <div className="row jj">
                                <div className="col-md-6"><input type="text" id="lname" name="Password" placeholder="Password*" /></div>
                                <div className="col-md-6"> <input type="text" id="lname" name="Password" placeholder="Repeat Password*" /></div>
                            </div>
                            <h3 className="mt-5">CONTACT INFORMATION</h3>
                            <div className="row jj">
                                <div className="col-md-6"><input type="text" id="lname" name="First Name" placeholder="First Name" /></div>
                                <div className="col-md-6"> <input type="text" id="lname" name="Last Name" placeholder="Last Name" /></div>
                            </div>
                            <textarea type="text" id="lname" name="Address" placeholder="Address" />
                            <div className="row jj">
                                <div className="col-md-4"><input type="text" id="lname" name="Country" placeholder="Country" /></div>
                                <div className="col-md-4"><input type="text" id="lname" name="State/Province" placeholder="State/Province" /></div>
                                <div className="col-md-4"> <input type="text" id="lname" name="City" placeholder="City" /></div>
                            </div>
                            <div className="row jj">
                                <div className="col-md-3"><input type="text" id="lname" name="Prefix" placeholder="Prefix" /></div>
                                <div className="col-md-3"><input type="text" id="lname" name="Phone" placeholder="Phone*" /></div>
                                <div className="col-md-3"> <input type="text" id="lname" name="Post/Zip Code" placeholder="Post/Zip Code" /></div>
                            </div>
                            {/* CHECKBOXES */}

                            <div class="checkbox">
                                <label><input type="checkbox" value="" />I agree with the terms and conditions.</label>
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox" value="" />I wish to receive emails about new promotions/deals/products.</label>
                            </div>
                            <input type="submit" value="CREATE ACCOUNT" disabled />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}