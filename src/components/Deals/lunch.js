import React from 'react'
import Img1 from '../../Assets//images/lunch1.jpg'
import Img2 from '../../Assets//images/lunch21.jpg'
import Img3 from '../../Assets//images/lunch2jpg.jpg'
import '../Deals/midnight.scss'
export default () => {
    return (
        <>
            <div className="Deals col-md-10 mt-4">
                <div className="container deals-banners">
                <h1>Lunch Deals</h1>
                    <div className="Product-Banners row">
                        <div className="product-A">
                            <img className="product" src={Img1} alt="chips" />
                            <h3>Lunch Deal 1</h3>
                            <p>6" Small + 345 ml Drink</p>
                            <p>All flavors except Supreme &amp; Ultimate flavors.</p>
                            <button className="price-button">FROM PKR 349</button>
                        </div>
                        <div className="product-A">
                            <img className="product" src={Img2} alt="chips" />
                            <h3>Lunch Deal 2</h3>
                            <p>1 Regular Pizza + 1 Small Pizza + 1.5 Ltr Drink</p>
                            <p>All Flavors except Supreme &amp; Ultim...</p>
                            <button className="price-button">FROM PKR 1,049</button>
                        </div>
                        <div className="product-A">
                            <img className="product" src={Img3} alt="chips" />
                            <h3>Lunch Deal 3</h3>
                            <p>1 Regular Pizza + 1 Small Pizza + 1.5 Ltr Drink</p>
                            <p>All Flavors except Supreme &amp; Ultim...</p>
                            <button className="price-button">FROM PKR 1,049</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}