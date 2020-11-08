import React from 'react'
import Img1 from '../../Assets//images/diet7up.jpg'
import Img2 from '../../Assets//images/pepsi.jpg'
import Img3 from '../../Assets//images/mirinda.jpg'
import Img4 from '../../Assets//images/7up.jpg'
import Img5 from '../../Assets//images/dew.jpg'
import Img6 from '../../Assets//images/pepsi2.jpg'
import Img7 from '../../Assets//images/water.jpg'
import '../Deals/midnight.scss'
import '../Deals/menuresponsive.scss'
export default () => {
    return (
        <>
            <div className="Deals col-md-10 mt-5">
                <div className="container deals-banners">
                <h1>Beverages</h1>
                    <div className="Product-Banners row">
                        <div className="product-A">
                            <img className="product" src={Img1} alt="chips" />
                            <h3>Diet 7up</h3>
                            <p>Diet 7up</p>
                            <button className="price-button">FROM PKR 119</button>
                        </div>
                        <div className="product-A">
                            <img className="product" src={Img2} alt="chips" />
                            <h3>Diet Pepsi</h3>
                            <p>Diet Pepsi</p>
                            <button className="price-button">FROM PKR 119</button>
                        </div>
                        <div className="product-A">
                            <img className="product" src={Img3} alt="chips" />
                            <h3>Mirinda</h3>
                            <p>Mirinda</p>
                            <button className="price-button">FROM PKR 119</button>
                        </div>
                        <div className="product-A">
                            <img className="product" src={Img4} alt="chips" />
                            <h3>7up</h3>
                            <p>7up</p>
                            <button className="price-button">FROM PKR 119</button>
                        </div>
                        <div className="product-A">
                            <img className="product" src={Img5} alt="chips" />
                            <h3>Mountain Dew</h3>
                            <p>Mountain Dew</p>
                            <button className="price-button">FROM PKR 119</button>
                        </div>               
                        <div className="product-A">
                            <img className="product" src={Img6} alt="chips" />
                            <h3>Pepsi</h3>
                            <p>Pepsi</p>
                            <button className="price-button">FROM PKR 119</button>
                        </div>
                        <div className="product-A">
                            <img className="product" src={Img7} alt="chips" />
                            <h3>Mineral Water</h3>
                            <p>Mineral Water Bottle</p>
                            <button className="price-button">FROM PKR 119</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}