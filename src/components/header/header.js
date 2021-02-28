import React, { useEffect } from 'react'
import './header.scss'
import Img1 from '../../Assets/images/Desktop-logo-9209aec-california-pizza.png'
import './headerresponsive.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
export default () => {
    const [show, setShow] = useState(false)
    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, [])
    const openMenu = () => {
        document.querySelector(".sidebar").classList.add("open");
    }
    const closeMenu = () => {
        document.querySelector(".sidebar").classList.remove("open");
    }
    return (
        <>
            <div className="container-fluid header-main " >
                <div className="header-content"  >
                    <div className="header col-md-10"  >
                        <div className="header-start d-flex">
                            <div className=" container header-desktop-version">
                                <div className=" header-content d-flex">
                                    <div className="header-logo col-sm-4 mt-4">
                                        <a href="/"><img className="logo-main" src={Img1} alt="logo" /></a>
                                    </div>
                                    <div className="signup-options col-md-8 mt-4 ">
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
                                    <li><a href="/pizza/" style={{ color: 'rgb(80, 78, 78)' }}>PIZZA</a></li>
                                    <li><a href="/lasagna/" style={{ color: 'rgb(80, 78, 78)' }}>LASAGNA & PASTA</a></li>
                                    <li><a href="/sandwich/" style={{ color: 'rgb(80, 78, 78)' }}>SANDWICH</a></li>
                                    <li><a href="/sidelines/" style={{ color: 'rgb(80, 78, 78)' }}>SIDELINES</a></li>
                                    <li><a href="/salad/" style={{ color: 'rgb(80, 78, 78)' }}>SALAD</a></li>
                                    <li><a href="/beverages/" style={{ color: 'rgb(80, 78, 78)' }}>BEVERAGES</a></li>
                                    <li><a href="/desserts/" style={{ color: 'rgb(80, 78, 78)' }}>DESSERTS</a></li>

                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className="side-nav col-md-2 pt-2"  >
                        <div className="header-card">
                            <h2><span>YOUR BUCKET</span></h2>
                            <p>Your bucket looks a little empty. Why not check out some of our unbeatable deals?</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* HEADER FOR MOBILE VIEW */}

            <div className="conatiner-fluid header-mobile-view">
                <div className="header-content row">
                    <div className="brand col-3">
                        <button className="brand-button" onClick={openMenu}>&#9776;</button>
                    </div>
                    <div className="logo col-6 mt-2">
                        <img className="logo-img" src={Img1} alt="logo" />
                    </div>
                    <div className="cart-icon col-3 mt-2">
                        <i className="fa fa-search"></i>
                        <i className="fa fa-shopping-basket"><span>0</span></i>
                    </div>
                </div>
            </div>
            <div className="sidebar">
                <div className="close-button">
                    <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                </div>
                <div className="sidebar-options">
                    <ul>
                        <li onClick={() => {
                            show ? setShow(false) : setShow(true)
                        }}> DEALS
                             {!show &&
                                <i class="fa fa-plus"></i>}
                            {show &&
                                <i className="fa fa-minus"></i>
                            }
                        </li>

                        {show &&
                            <div className="content-drop">
                                <li><a href="/deal1/">MidNight</a></li>
                                <li><a href="/deal2/">Round The Clock</a></li>
                                <li><a href="/deal3/">Lunch</a></li>
                            </div>
                        }
                        <li><a href="/pizza/">PIZZA</a> </li>
                         <li><a href="/lasagna/">LASGANA&PIZZA</a> </li>
                        <li><a href="/sandwich/">SANDWICH</a> </li>
                        <li><a href="/sidelines/"> SIDELINES</a></li>
                        <li> <a href="/salad/">SALAD</a> </li>
                        <li> <a href="/beverages/">BEVERAGES</a></li>
                         <li><a href="/desserts/">DESSERTS</a></li>
                    </ul>

                    <div className="signup-options">
                        <ul>
                            <li className="" style={{borderBottom :'1px solid white'}}><i className="fa fa-user"></i><a href="http://nordnet.dk.global.prod.fastly.net/aj.php?sponsore=&dir=/oYedaG/&type=&type=xgm-enq&orders=780105677&payment?f=PFBYZL">REGISTER/LOGIN</a></li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Locations</li>
                            <li>Career</li>
                            <li>Feedback</li>
                        </ul>
                    </div>
                </div>

            </div>
        </>



    )
};

