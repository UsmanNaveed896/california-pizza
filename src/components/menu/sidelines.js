import React from 'react'
import Img1 from '../../Assets//images/sidelines1.jpg'
import Img2 from '../../Assets//images/sidelines2.png'
import Img3 from '../../Assets//images/sidelines3.jpg'
import Img4 from '../../Assets//images/sidelines4.jpg'
import Img5 from '../../Assets//images/sidelines5.jpg'
import Img6 from '../../Assets//images/sidelines6.jpg'
import Img7 from '../../Assets//images/sidelines7.jpg'
import '../Deals/midnight.scss'
import '../Deals/menuresponsive.scss'
export default () => {
    return (
        <>
            <div className="Deals col-md-10 mt-5">
                <div className="container deals-banners">
                <h1>Sidelines</h1>
                    <div className="Product-Banners row">
                        <div className="product-A">
                            <img className="product" src={Img1} alt="chips" />
                            <h3>Cheesy Fries</h3>
                            <p>Fries Mixed with our home made &amp; Yummy Dip Sauce &amp; Cheddar Cheese. Topped with our ve...</p>
                            <button className="price-button">FROM PKR 499</button>
                        </div>
                        <div className="product-A">
                            <img className="product" src={Img2} alt="chips" />
                            <h3>California Strips</h3>
                            <p>Chicken Pieces breaded with homemade crumb, served with Garlic Mayo Sauce</p>
                            <button className="price-button">FROM PKR 499</button>
                        </div>
                        <div className="product-A">
                            <img className="product" src={Img3} alt="chips" />
                            <h3>Crispy Garlic Mayo Fries</h3>
                            <p>French Fries tossed in the best ever home made Garlic Mayo sauce from California Pizza.</p>
                            <button className="price-button">FROM PKR 299</button>
                        </div>
                        <div className="product-A">
                            <img className="product" src={Img4} alt="chips" />
                            <h3>Crispy Fries</h3>
                            <p>The tastiest French Fries tossed in Salt.</p>
                            <button className="price-button">FROM PKR 199</button>
                        </div>
                        <div className="product-A">
                            <img className="product" src={Img5} alt="chips" />
                            <h3>Bread Sticks</h3>
                            <p>Pizza Bread Stuffed with Mozzarella Cheese, and served with our very own home made Garlic.</p>
                            <button className="price-button">FROM PKR 399</button>
                        </div>
                        <div className="product-A">
                            <img className="product" src={Img6} alt="chips" />
                            <h3>Garlic Bread Supreme</h3>
                            <p>4 pcs of the best ever French Garlic Bread with Garlic Butter, our very own California Mozzar...</p>
                            <button className="price-button">FROM PKR 399</button>
                        </div>
                        <div className="product-A">
                            <img className="product" src={Img7} alt="chips" />
                            <h3>Garlic Bread</h3>
                            <p>4 pcs French Garlic Breads with Garlic Butter inside.</p>
                            <button className="price-button">FROM PKR 299</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}