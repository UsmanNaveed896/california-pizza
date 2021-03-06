import React, { useEffect } from 'react'
import '../homepage/homepage.scss'
import '../homepage/homepage-responsive.scss'
import Img1 from '../../Assets/images/1.jpg'
import Img2 from '../../Assets/images/2.jpg'
import Img3 from '../../Assets/images/3.jpg'
import Img4 from '../../Assets/images/4.jpg'
import Img5 from '../../Assets/images/5.jpg'
import Img6 from '../../Assets/images/6.jpg'
import Img7 from '../../Assets/images/7.jpg'
import Img8 from '../../Assets/images/1-ab2e51f-california-pizza.jpg'
import Img9 from '../../Assets/images/3-e8ab56c-california-pizza.png'
import Img10 from '../../Assets/images/1375609-Cheesy-Fries-6a1fcd5-california-pizza.jpg'
import Img11 from '../../Assets/images/xs.png'
import Img12 from '../../Assets/images/xs.jpg'
import Mobileimg1 from '../../Assets/images/Mobile1.jpg'
import Mobileimg2 from '../../Assets/images/Mobile2.jpg'
import Mobileimg3 from '../../Assets/images/Mobile3.jpg'
import Mobileimg4 from '../../Assets/images/Mobile4.jpg'

import { Link } from 'react-router-dom'
export default () => {
    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, [document.documentElement])
    return (
        <>
            <div className="homepage">
                <div className="homepage-carousel col-md-10 mt-4">
                    <div className="container carousel-banners">
                        <div className="desktop-carousel">
                        <div id="myCarousel-1" className="carousel slide" data-ride="carousel">
                            {/* <!-- Indicators --> */}
                            <ol className="carousel-indicators">
                                <li data-target="#myCarousel-1" data-slide-to="0" className="active " ></li>
                                <li data-target="#myCarousel-1" data-slide-to="1"></li>
                                <li data-target="#myCarousel-1" data-slide-to="2"></li>
                                <li data-target="#myCarousel-1" data-slide-to="3"></li>
                            </ol>

                            {/* <!-- Wrapper for slides --> */}
                            <div className="carousel-inner">
                                <div className="item active">
                                    <img src={Img1} alt="Los Angeles" />
                                </div>

                                <div className="item">
                                    <img src={Img2} alt="Chicago" />
                                </div>

                                <div className="item">
                                    <img src={Img3} alt="New york" />
                                </div>
                                <div className="item">
                                    <img src={Img4} alt="New york" />
                                </div>
                            </div>
                           
                            {/* <!-- Left and right controls --> */}
                            <a className="left carousel-control" href="#myCarousel-1" data-slide="prev">
                                <span className="glyphicon glyphicon-chevron-left"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="right carousel-control" href="#myCarousel-1" data-slide="next">
                                <span className="glyphicon glyphicon-chevron-right"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                        </div>
                           {/* CAROUSEL FOR MOBILE */}

                    <div class="container-fluid mobile-carusal">
                        <div className="carusel-set">
                    <div id="myCarousel-2" class="carousel slide" data-ride="carousel">
                        {/* <!-- Indicators --> */}
                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel-2" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarousel-2" data-slide-to="1"></li>
                            <li data-target="#myCarousel-2" data-slide-to="2"></li>
                        </ol>
                        {/* <!-- Wrapper for slides --> */}
                        <div class="carousel-inner">
                            <div class="item active">
                                <img src={Mobileimg1} alt="Los Angeles" style={{ width: '100%' }} />
                            </div>
                            <div class="item">
                                <img src={Mobileimg2} alt="Chicago" style={{ width: '100%' }} />
                            </div>
                            <div class="item">
                                <img src={Mobileimg3} alt="New york" style={{ width: '100%' }} />
                            </div>
                            <div class="item">
                                <img src={Mobileimg4} alt="New york" style={{ width: '100%' }} />
                            </div>
                        </div>
                        {/* <!-- Left and right controls --> */}
                        <a class="left carousel-control" href="#myCarousel-2" data-slide="prev">
                            <span class="glyphicon glyphicon-chevron-left"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="right carousel-control" href="#myCarousel-2" data-slide="next">
                            <span class="glyphicon glyphicon-chevron-right"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                    </div>
                </div>
                        {/* BANNERS */}
                        <div className="grid-banners row mt-5">
                            <img className="banners" src={Img5} alt="cake" />
                            <img className="banners" src={Img6} alt="number" />
                            <img className="banners" src={Img7} alt="pepsi" />
                        </div>
                        <div className="grid-banners row">
                            <img className="bannersB" src={Img8} alt="cake" />
                            <img className="bannersB" src={Img9} alt="number" />
                        </div>
                        <div className="featured-products mt-4" >
                            <h2>BEST SELLERS</h2>
                        </div>
                        {/* Product Banners */}

                        <div className="Product-Banners row">
                            <div className="product-A">
                                <img className="product" src={Img10} alt="chips" />
                                <h3>Cheesy Fries</h3>
                                <p>Fries Mixed with our home made & Yummy Dip Sauce & Cheddar Cheese. Topped with our ve...</p>
                                <button className="price-button">ADD PKR 499</button>
                            </div>
                            <div className="product-A">
                                <img className="product" src={Img11} alt="chips" />
                                <h3>California Strips</h3>
                                <p>Chicken Pieces breaded with homemade crumb, served with Garlic Mayo Sauce</p>
                                <button className="price-button">ADD PKR 499</button>
                            </div>
                            <div className="product-A">
                                <img className="product" src={Img12} alt="chips" />
                                <h3>Crispy Garlic Mayo Fries</h3>
                                <p>French Fries tossed in the best ever home made Garlic Mayo sauce from California Pizza.</p>
                                <button className="price-button">ADD PKR 499</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                                                   
        </>
    )
}