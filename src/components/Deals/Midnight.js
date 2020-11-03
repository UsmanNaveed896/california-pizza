import React from 'react'
import Img1 from '../../Assets//images/xs (1).jpg'
import Img2 from '../../Assets//images/xs (2).jpg'
import Img3 from '../../Assets//images/xs (3).jpg'
import '../Deals/midnight.scss'
export default () => {
    return (
        <>
            <div className="Deals col-md-10 mt-4">
                <div className="container deals-banners">
                <h1>Midnight Deals</h1>
                    <div className="Product-Banners row">
                        <div className="product-A">
                            <img className="product" src={Img1} alt="chips" />
                            <h3>Midnight Deal - 1</h3>
                            <p>2 Small Pizza + 2 Small Drinks</p>
                            <p>All Flavors except Super Supreme, Chicken Supreme and Beef Supreme..</p>
                            <button className="price-button">FROM PKR 599</button>
                        </div>
                        <div className="product-A">
                            <img className="product" src={Img2} alt="chips" />
                            <h3>Midnight Deal - 2</h3>
                            <p>Midnight Deal 2 -  Large Pizza and 1.5 Ltr Drink.</p>
                            <p>All Flavors except Super Supreme, Chicken Supreme...</p>
                            <button className="price-button">FROM PKR 999</button>
                        </div>
                        <div className="product-A">
                            <img className="product" src={Img3} alt="chips" />
                            <h3>Midnight Deal - 3</h3>
                            <p>2 Regular Pizzas + 1.5 Ltr Drink.</p>
                            <p>All Flavors except Super Supreme, Chicken Supreme and Beef Supreme & Ultimate Flavors.</p>
                            <button className="price-button">FROM PKR 1,499</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}