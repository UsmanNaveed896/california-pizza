import React from 'react'
import Img1 from '../../Assets//images/pasta.jpg'
import Img2 from '../../Assets//images/lasagna.jpg'
import '../Deals/midnight.scss'
import '../Deals/menuresponsive.scss'
export default () => {
    return (
        <>
            <div className="Deals col-md-10 mt-5">
                <div className="container deals-banners">
                <h1>Lasagna & Pasta</h1>
                    <div className="Product-Banners row">
                        <div className="product-A">
                            <img className="product" src={Img1} alt="chips" />
                            <h3>Chicken Pasta</h3>
                            <p>Chicken Fajita, Chicken Tikka, Smoked Chicken, Capsicum, Onions, Mushrooms, Black Olives &amp; Mozza...</p>
                            <button className="price-button">FROM PKR 749</button>
                        </div>
                        <div className="product-A">
                            <img className="product" src={Img2} alt="chips" />
                            <h3>Chicken Lasagna</h3>
                            <p>The Tastiest Chicken Lasagna ever. Our very own sauces and meat topped with the best ever che...</p>
                            <button className="price-button">FROM PKR 749</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}