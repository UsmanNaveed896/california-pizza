import React from 'react'
import Img1 from '../../Assets//images/round1.jpg'
import Img2 from '../../Assets//images/round2.jpg'
import Img3 from '../../Assets//images/round3.jpg'
import Img4 from '../../Assets//images/round4.jpg'
import Img5 from '../../Assets//images/round5.jpg'
import '../Deals/midnight.scss'
export default () => {
    return (
        <>
            <div className="Deals col-md-10 mt-4">
                <div className="container deals-banners">
                <h1>Round The Clock Deals</h1>
                    <div className="Product-Banners row">
                        <div className="product-A">
                            <img className="product" src={Img1} alt="chips" />
                            <h3>Round The Clock - Deal 1</h3>
                            <p>Round The Clock Deal 1 - Lasagna/Pasta/Sandwich + Drink</p>
                            <p>Get anyone item from Lasagna...</p>
                            <button className="price-button">FROM PKR 599</button>
                        </div>
                        <div className="product-A">
                            <img className="product" src={Img2} alt="chips" />
                            <h3>Round The Clock - Deal 2</h3>
                            <p>Round The Clock Deal 2 - 10" Regular Pizza + 2 345 ml Drinks</p>
                            <p>All flavors except Supreme & Ultimate flavors </p>
                            <button className="price-button">FROM PKR 849</button>
                        </div>
                        <div className="product-A">
                            <img className="product" src={Img3} alt="chips" />
                            <h3>Round The Clock - Deal 3</h3>
                            <p>Round The Clock Deal 3 - &nbsp;Large Pizza and 1.5 Ltr Drink.</p>
                            <p>All Flavors except Super....</p>
                            <button className="price-button">FROM PKR 1,299</button>
                        </div>
                        <div className="product-A">
                            <img className="product" src={Img4} alt="chips" />
                            <h3>Round The Clock - Deal 4</h3>
                            <p>Round The Clock Deal 4 -&nbsp; Jumbo Pizza and 1.5 Ltr Drink.</p>
                            <p>All Flavors except Super...</p>
                            <button className="price-button">FROM PKR 1,499</button>
                        </div>
                        <div className="product-A">
                            <img className="product" src={Img5} alt="chips" />
                            <h3>Kid's Deal - Small Pizza + Toy + Juice</h3>
                            <p>A Small Pizza (6 inches) with a Toy and Juice for only 349/-&nbsp;</p>
                            <p>Pizza Flavors are C...</p>
                            <button className="price-button">FROM PKR 349</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}