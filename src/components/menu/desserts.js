import React from 'react'
import Img1 from '../../Assets//images/dessert1.jpg'
import Img2 from '../../Assets//images/dessert2.jpg'
import Img3 from '../../Assets//images/dessert3.jpg'
import '../Deals/midnight.scss'
export default () => {
    return (
        <>
            <div className="Deals col-md-10 mt-5">
                <div className="container deals-banners">
                <h1>Desserts</h1>
                    <div className="Product-Banners row">
                        <div className="product-A">
                            <img className="product" src={Img1} alt="chips" />
                            <h3>Brownie Fudge</h3>
                            <p>Hot Chocolate Fudge Brownie which are bound to make your taste buds go wild. Available in Sel...</p>
                            <button className="price-button">FROM PKR 149</button>
                        </div>
                        <div className="product-A">
                            <img className="product" src={Img2} alt="chips" />
                            <h3>Ice Creams</h3>
                            <p>Our Very Own Home made Ice Creams in a beautiful 1 Litre Tub from Dairy Dreams. Available in ...</p>
                            <button className="price-button">FROM PKR 1,165</button>
                        </div>
                        <div className="product-A">
                            <img className="product" src={Img2} alt="chips" />
                            <h3>Chocolate Heaven Cake</h3>
                            <p>Our very own Chocolate Heaven Cake is a Heaven in Chocolate and a must have. Available in Sel...</p>
                            <button className="price-button">FROM PKR 399</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}