import React from "react";
import '../css/style.css'

const Featured_Products = ({ productTitle, productImage, price, number,sold}) => {
     if (sold === true) {
        return (
            <>
            <section className="featured-products">
                <ul>
                    <li>
                        <img className="" src={productImage} alt="" />
                        <div className="product-title">
                            {productTitle}
                        </div>
                        <div>
                            <small>Lowest Ask</small>
                        </div>
                        <div  className="product-price">
                            {price}
                        </div>
                        <div>
                        <small>{number} Sold</small>
                        </div>
                    </li>
                </ul>
            </section>
            </>
        )
    }else{
        return(
            <section className="featured-products">
                    <ul>
                        <li>
                            <img className="" src={productImage} alt="" />
                            <div className="product-title">
                                {productTitle}
                            </div>
                            <div>
                                <small>Lowest Ask</small>
                            </div>
                            <div  className="product-price">
                                {price}
                            </div>
                            <div>
                            <small>Last Sale: {number}</small>
                            </div>
                        </li>
                    </ul>
                </section>
            )
        }
    
}

export default Featured_Products;