import React from 'react'
import './header.scss'
import Img1 from '../../Assets/images/Desktop-logo-9209aec-california-pizza.png'
import {Link} from 'react-router-dom'
export default () => {
    document.addEventListener('DOMContentLoaded', function() {
        // When the event DOMContentLoaded occurs, it is safe to access the DOM
      
        // When the user scrolls the page, execute myFunction 
        window.addEventListener('scroll', myFunctionForSticky);
      
        // Get the navbar
        var navbar = document.getElementById("myHeader");
      
        // Get the offset position of the navbar
        var sticky = navbar.offsetTop;  
        function myFunctionForSticky() {
          if (window.pageYOffset >= sticky) {
            console.log("window.pageYOffset >= sticky");
          } else {
            console.log("Not window.pageYOffset >= sticky");
          }
          if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
          } else {
            navbar.classList.remove("sticky");
          }
        }
      })

    return (
        <>
            <div className="container-fluid header-main " id="myHeader" >
                <div className="header col-md-10" >
                    <div className="header-start d-flex">
                        <div className=" container header-desktop-version">
                            <div className=" header-content d-flex">
                                <div className="header-logo col-sm-4 ">
                                  <a href="/"><img src={Img1} alt="logo" /></a>  
                                </div>
                                <div className="signup-options col-md-8 ">
                                    <ul>
                                        <li><a href="">Search</a></li>
                                        <li className="login"><a href="/login/">Login</a></li>
                                        <li className="register"><a href="/signup/">Register</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nav-bar-content mt-4">
                        <div className="container list"> 
                            <ul>
                             <li>
                                    <div className="dropdown">
                                   <a>Deals<i class="fa fa-angle-down"></i></a>
                                    <div class="dropdown-content">
                                        <a href="/deal1/">MidNight</a>
                                        <a href="/deal2/">Round The Clock</a>
                                        <a href="/deal3/">Lunch</a>
                                    </div>
                                </div></li>
                                <li><a href="/pizza/" style={{color:'rgb(80, 78, 78)'  }}>PIZZA</a></li>
                                <li><a href="/lasagna/" style={{color:'rgb(80, 78, 78)'}}>LASAGNA & PASTA</a></li>
                                <li><a href="/sandwich/" style={{color:'rgb(80, 78, 78)'}}>SANDWICH</a></li>
                                <li><a href="/sidelines/" style={{color:'rgb(80, 78, 78)'}}>SIDELINES</a></li>
                                <li><a href="/salad/" style={{color:'rgb(80, 78, 78)'}}>SALAD</a></li>
                                <li><a href="/beverages/" style={{color:'rgb(80, 78, 78)'}}>BEVERAGES</a></li>
                                <li><a href="/desserts/" style={{color:'rgb(80, 78, 78)'}}>DESSERTS</a></li>   
                               
                            </ul>
                            
                        </div>
                    </div>
                </div>
                <div className="side-nav col-md-2 pt-2">
                    <div className="header-card">
                        <h2><span>YOUR BUCKET</span></h2>
                        <p>Your bucket looks a little empty. Why not check out some of our unbeatable deals?</p>
                    </div>
                </div>
            </div>
        </>
    )
};