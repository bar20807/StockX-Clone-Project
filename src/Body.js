import React from 'react';
import './style.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-elastic-carousel';

const Body = () => {
    return (
      <>
        <section className="categories">
          <ul>
            <li>Sneakers</li>
            <li>Apparel</li>
            <li>Electronics</li>
            <li>Trading Cards</li>
            <li>Collectibles</li>
            <li>Accesories</li>
            <li>NFTs</li>
          </ul>
        </section>
        <section className='Carousel'>
        <Carousel>
          <div className='Card'>
            <img src="https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt256829a6405f1700/627bf220220ab5285f524868/BuyerFee_Promo_Template_Primary_Desktop.jpg?quality=90&auto=webp&format=pjpg&height=450" />
          </div>
          <div className='Card'>
            <img src="https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt8c222d625eda932b/627a8113a1a1dd2aa9f70456/BrandonBlackwood_Internal_Banners_Primary_Desktop.jpg?quality=90&auto=webp&format=pjpg&height=450" />
          </div>
          <div className='Card'>
            <img src="https://images.contentstack.io/v3/assets/blt818b0c67cf450811/bltfe024938d4a6889d/627a805723c6cf2a1c3b34b7/Primary_Desktop-EN_(1).png?quality=90&auto=webp&format=pjpg&height=450" />
          </div>
          <div className='Card'>
            <img src="https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt849fd95c2e956039/627a806fa1a1dd2aa9f70452/Yeezy450Sulfur_Translated_Internal_Banners_Primary_Desktop.jpg?quality=90&auto=webp&format=pjpg&height=450" />
          </div>
        </Carousel>
        </section>
        <Featured_Products 
        title="Most Popular Sneakers"
        productTitle="Jordan 11 Retro Low 72-10"
        productImage="https://images.stockx.com/images/Air-Jordan-11-Retro-Low-72-10-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=webp&auto=compress&dpr=1&trim=color&updated_at=1651856525&q=80"
        price="$188"
        number="1932"
        productTitle1="Nike Air Force 1 Low´07"
        productImage1="https://images.stockx.com/images/Nike-Air-Force-1-Low-White-07_V2-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=webp&auto=compress&dpr=1&trim=color&updated_at=1631122839&q=80"
        price1="$92"
        number1="1541"
        productTitle2="Nike Dunk Low Retro White Black Panda (2021)"
        productImage2="https://images.stockx.com/images/Nike-Dunk-Low-Retro-White-Black-2021-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=webp&auto=compress&dpr=1&trim=color&updated_at=1633027409&q=80"
        price2="$173"
        number2="1371"
        productTitle3="adidas Yeezy Slide Pure (Restock Pair)"
        productImage3="https://images.stockx.com/images/adidas-Yeezy-Slide-Pure-Restock-Pair-1.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=webp&auto=compress&dpr=1&trim=color&updated_at=1639593302&q=80"
        price3="$125"
        number3="1206"
        productTitle4="adidas Yeezy Slide Onyx"
        productImage4="https://images.stockx.com/images/adidas-Yeezy-Slide-Black-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=webp&auto=compress&dpr=1&trim=color&updated_at=1646687426&q=80"
        price4="$116"
        number4="1050"
        productTitle5="Jordan 1 Retro High OG Stage Haze"
        productImage5="https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Stage-Haze.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=webp&auto=compress&dpr=1&trim=color&updated_at=1652289701&q=80"
        price5="$171"
        number5="929"
      />
      </>
    );
};

const Featured_Products = ({ title, productTitle, productImage, price, number, productTitle1, productImage1, price1, number1, productTitle2, productImage2, price2, number2, productTitle3, productImage3, price3, number3, productTitle4, productImage4, price4, number4,productTitle5,productImage5,price5,number5}) => {
  return (
    <section className="featured-products">
            <h2>
                {title}
            </h2>
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
                <li>
                    <img className="" src={productImage1} alt="" />
                    <div>
                        {productTitle1}
                    </div>
                    <div>
                        <small>Lowest Ask</small>
                    </div>
                    <div  className="product-price">
                        {price1}
                    </div>
                    <div>
                        <small>{number1} Sold</small>
                    </div>
                </li>
                <li>
                    <img className="" src={productImage2} alt="" />
                    <div>
                        {productTitle2}
                    </div>
                    <div>
                        <small>Lowest Ask</small>
                    </div>
                    <div  className="product-price">
                        {price2}
                    </div>
                    <div>
                        <small>{number2} Sold</small>
                    </div>
                </li>
                <li>
                    <img className="" src={productImage3} alt="" />
                    <div>
                        {productTitle3}
                    </div>
                    <div>
                        <small>Lowest Ask</small>
                    </div>
                    <div  className="product-price">
                        {price3}
                    </div>
                    <div>
                        <small>{number3} Sold</small>
                    </div>
                </li>
                <li>
                    <img className="" src={productImage4} alt="" />
                    <div>
                        {productTitle4}
                    </div>
                    <div>
                        <small>Lowest Ask</small>
                    </div>
                    <div  className="product-price">
                        {price4}
                    </div>
                    <div>
                        <small>{number4} Sold</small>
                    </div>
                </li>
                <li>
                    <img className="" src={productImage5} alt="" />
                    <div>
                        {productTitle5}
                    </div>
                    <div>
                        <small>Lowest Ask</small>
                    </div>
                    <div  className="product-price">
                        {price5}
                    </div>
                    <div>
                        <small>{number5} Sold</small>
                    </div>
                </li>
            </ul>
        </section>
  )
}

export default Body;