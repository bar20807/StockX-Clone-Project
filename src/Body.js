import React from 'react';
import './style.css';
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
        <section className="Carousel">
          <Carousel>
            <div className="Card">
              <img src="https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt256829a6405f1700/627bf220220ab5285f524868/BuyerFee_Promo_Template_Primary_Desktop.jpg?quality=90&auto=webp&format=pjpg&height=450" />
            </div>
            <div className="Card">
              <img src="https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt8c222d625eda932b/627a8113a1a1dd2aa9f70456/BrandonBlackwood_Internal_Banners_Primary_Desktop.jpg?quality=90&auto=webp&format=pjpg&height=450" />
            </div>
            <div className="Card">
              <img src="https://images.contentstack.io/v3/assets/blt818b0c67cf450811/bltfe024938d4a6889d/627a805723c6cf2a1c3b34b7/Primary_Desktop-EN_(1).png?quality=90&auto=webp&format=pjpg&height=450" />
            </div>
            <div className="Card">
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
          productTitle2="Nike Dunk Low Retro White Black Panda"
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
          <Popular_Brands
            titulo="Popular Brands"
            Image_="https://images.contentstack.io/v3/assets/blt818b0c67cf450811/bltbb91c212b5de4d8a/61561b6110d4154779bdba01/jordan.png?format=jpg&auto=webp&width=0.5"
            Image1="https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt02e2e8c84bc2b6f6/61561a71c3934450a14e395a/supreme_tile.png?format=jpg&auto=webp&width=0.5"
            Image2="https://images.contentstack.io/v3/assets/blt818b0c67cf450811/bltd17af3434fe765f4/61561a892b3bb345f7e7fae9/ps4.png?format=jpg&auto=webp&width=0.5"
            Image3="https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt9fd4296f268a90bb/61561b4310d4154779bdb9ff/yzy.png?format=jpg&auto=webp&width=0.5"
            Image4="https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt7680e1627e5b56e7/61561ba72b3bb345f7e7faed/lego.png?format=jpg&auto=webp&width=0.5"
        />

        <Featured_Products_Last_Sale
          title="Recently Viewed"
          productTitle="adidas Yeezy 500 Granite"
          productImage="https://images.stockx.com/images/adidas-Yeezy-500-Granite.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=webp&auto=compress&dpr=1&trim=color&updated_at=1652111116&q=80"
          price="$228"
          number="$284"
          productTitle1="Jordan 4 Retro FIBA (2019)"
          productImage1="https://images.stockx.com/images/Air-Jordan-4-Retro-Fiba-2019-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=webp&auto=compress&dpr=1&trim=color&updated_at=1607657188&q=80"
          price1="$250"
          number1="$235"
          productTitle2="Puma Cruise Rider Viridian Green (W)"
          productImage2="https://images.stockx.com/images/Puma-Cruise-Rider-Viridian-Green-W.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=webp&auto=compress&dpr=1&trim=color&updated_at=1631235431&q=80"
          price2="$102"
          number2="--"
          productTitle3="Nike Air Moer Uptempo 96"
          productImage3="https://images.stockx.com/images/Nike-Air-More-Uptempo-96-Copy-Paste.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=webp&auto=compress&dpr=1&trim=color&updated_at=1648490579&q=80"
          price3="$113"
          number3="$149"
          productTitle4="Travis Scott x McDonald´s Crew"
          productImage4="https://images.stockx.com/images/Travis-Scott-x-McDonalds-Crew-T-Shirt-Red.png?fit=fill&bg=FFFFFF&w=140&h=75&fm=webp&auto=compress&dpr=1&trim=color&updated_at=1606325876&q=80"
          price4="$31"
          number4="$42"
          productTitle5="Dior B22 White Yellow (2021)"
          productImage5="https://images.stockx.com/images/Dior-B22-White-Yellow.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=webp&auto=compress&dpr=1&trim=color&updated_at=1612455565&q=80"
          price5="$985"
          number5="$950"
        />
        <Featured_Products_Last_Sale
          title="Featured Apparel"
          productTitle="Fear of God Essentials Shorts Dessert"
          productImage="https://images.stockx.com/images/Fear-of-God-Essentials-Shorts-Desert-Taupe.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=webp&auto=compress&dpr=1&trim=color&updated_at=1651183212&q=80"
          price="$76"
          number="$76"
          productTitle1="Supreme Stone Island S/S Top Mona Lisa"
          productImage1="https://images.stockx.com/images/Supreme-Stone-Island-S-S-Top-Mona-Lisa.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=webp&auto=compress&dpr=1&trim=color&updated_at=1652369374&q=80"
          price1="$200"
          number1="$232"
          productTitle2="Travis Scott Cactus Jack For Fragment..."
          productImage2="https://images.stockx.com/images/Travis-Scott-Cactus-Jack-For-Fragment-Imagination-Shorts-Olive.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=webp&auto=compress&dpr=1&trim=color&updated_at=1629157355&q=80"
          price2="$84"
          number2="$96"
          productTitle3="Nike x Hello Kitty Hoodie Blue"
          productImage3="https://images.stockx.com/images/Nike-x-Hello-Kitty-Hoodie-Blue.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=webp&auto=compress&dpr=1&trim=color&updated_at=1652078555&q=80"
          price3="$128"
          number3="$150"
          productTitle4="Kith Goodfellas Vintage Tee Black"
          productImage4="https://images.stockx.com/images/Kith-Goodfellas-Vintage-Tee-Black.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=webp&auto=compress&dpr=1&trim=color&updated_at=1652107952&q=80"
          price4="$131"
          number4="$148"
          productTitle5="Pop Smoke x Vlone Faith Hoodie Black"
          productImage5="https://images.stockx.com/images/Pop-Smoke-x-Vlone-Faith-Hoodie-Black.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=webp&auto=compress&dpr=1&trim=color&updated_at=1627607382&q=80"
          price5="$120"
          number5="$120"
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
                    <div className="product-title">
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
                    <div className="product-title">
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
                    <div className="product-title">
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
                    <div className="product-title">
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
                    <div className="product-title">
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

const Popular_Brands = ({titulo,image_,Image1,Image2,Image3,Image4}) => {
    return (
        <section className="popular_brands">
            <h2>
                {titulo}
            </h2>
            <ul>
                <li>
                    <img className="" src={image_} alt="" />
                </li>
                <li>
                    <img className="" src={Image1} alt="" />
                </li>
                <li>
                    <img className="" src={Image2} alt="" />
                </li>
                <li>
                    <img className="" src={Image3} alt="" />
                </li>
                <li>
                    <img className="" src={Image4} alt="" />
                </li>
            </ul>
        </section>
    )
}

const Featured_Products_Last_Sale = ({ title, productTitle, productImage, price, number, productTitle1, productImage1, price1, number1, productTitle2, productImage2, price2, number2, productTitle3, productImage3, price3, number3, productTitle4, productImage4, price4, number4,productTitle5,productImage5,price5,number5}) => {
    return(
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
                        <small>Last Sale: {number}</small>
                    </div>
                </li>
                <li>
                    <img className="" src={productImage1} alt="" />
                    <div className="product-title">
                        {productTitle1}
                    </div>
                    <div>
                        <small>Lowest Ask</small>
                    </div>
                    <div  className="product-price">
                        {price1}
                    </div>
                    <div>
                        <small>Last Sale: {number1}</small>
                    </div>
                </li>
                <li>
                    <img className="" src={productImage2} alt="" />
                    <div className="product-title">
                        {productTitle2}
                    </div>
                    <div>
                        <small>Lowest Ask</small>
                    </div>
                    <div  className="product-price">
                        {price2}
                    </div>
                    <div>
                        <small>Last Sale: {number2}</small>
                    </div>
                </li>
                <li>
                    <img className="" src={productImage3} alt="" />
                    <div className="product-title">
                        {productTitle3}
                    </div>
                    <div>
                        <small>Lowest Ask</small>
                    </div>
                    <div  className="product-price">
                        {price3}
                    </div>
                    <div>
                        <small>Last Sale: {number3}</small>
                    </div>
                </li>
                <li>
                    <img className="" src={productImage4} alt="" />
                    <div className="product-title">
                        {productTitle4}
                    </div>
                    <div>
                        <small>Lowest Ask</small>
                    </div>
                    <div  className="product-price">
                        {price4}
                    </div>
                    <div>
                        <small>Last Sale: {number4}</small>
                    </div>
                </li>
                <li>
                    <img className="" src={productImage5} alt="" />
                    <div className="product-title">
                        {productTitle5}
                    </div>
                    <div>
                        <small>Lowest Ask</small>
                    </div>
                    <div  className="product-price">
                        {price5}
                    </div>
                    <div>
                        <small>Last Sale: {number5}</small>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Body;