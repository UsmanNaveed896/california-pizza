import React from 'react'
import Img1 from '../../Assets//images/salad.jpg'
import '../Deals/midnight.scss'
export default () => {
    return (
        <>
            <div className="Deals col-md-10 mt-5">
                <div className="container deals-banners">
                <h1>Salad</h1>
                    <div className="Product-Banners row">
                        <div className="product-A">
                            <img className="product" src={Img1} alt="chips" />
                            <h3>Salad</h3>
                            <p>Combination of Macaroni mixed with cheddar cheese, Spaghetti, Coleslaw, Pineapple, Thousand i...</p>
                            <button className="price-button">FROM PKR 649</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}