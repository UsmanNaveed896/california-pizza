import React from 'react'
import Img1 from '../../Assets//images/sandwich.jpg'
import '../Deals/midnight.scss'
import '../Deals/menuresponsive.scss'
export default () => {
    return (
        <>
            <div className="Deals col-md-10 mt-5">
                <div className="container deals-banners">
                <h1>Sandwich</h1>
                    <div className="Product-Banners row">
                        <div className="product-A">
                            <img className="product" src={Img1} alt="chips" />
                            <h3>Mexican Sandwich</h3>
                            <button className="price-button">FROM PKR 649</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}