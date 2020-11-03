import React from 'react'
import '../footer/footer.scss'
export default()=>{
    return(
        <>
        <div className="container-fluid footer-section mt-5">
            <div className="footer col-md-10">
                <div className="socialmedia-icons mt-4 row">
                <i class="fa fa-facebook-square"></i>
                <i class="fa fa-twitter-square"></i>
                <i class="fa fa-instagram"></i>
                <i class="fa fa-youtube"></i>
                </div>
                <div className="footer-nav row mt-5">
                    <h1>About Us</h1>
                    <h1>Contact Us</h1>
                    <h1>Locations</h1>
                    <h1>Career</h1>
                    <h1>Feedback</h1>
                </div>
            </div>
        </div>
        </>
    )
}