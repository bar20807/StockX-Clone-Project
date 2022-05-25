import React from 'react';
import '../css/categories.css';
import '../css/carousel.css';
import '../css/featured-products.css';
import '../css/featured-apparel.css';
import '../css/popular-brands.css';
import '../css/list-article.css';
import Carousel from 'react-elastic-carousel';
import Featured_Products from './Featured_Products'
import Popular_Brands from './Popular_brands';
import List_Article from './List_Article';

const Body = () => {
    const products = [
        {
            productTitle: "adidas Yeezy 700 V3 Fade Carbon",
            productImage:"https://images.stockx.com/images/adidas-Yeezy-700-V3-Fade-Carbon.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=webp&auto=compress&dpr=1&trim=color&updated_at=1652801676&q=80",
            price:"$225",
            number:"383",
            sold: true
        },
        {   
            productTitle: "Jordan 1 Retro High OG Heritage",
            productImage: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Heritage-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=webp&auto=compress&dpr=1&trim=color&updated_at=1649081695&q=80",
            price: "$150",
            number: "212",
            sold: true
        },
        {   
            productTitle:"New Balance 9060 Freshgoods Inside Voice",
            productImage:"https://images.stockx.com/images/New-Balance-9060-Joe-Freshgoods-Inside-Voices-Penny-Cookie-Pink-Ver2.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=webp&auto=compress&dpr=1&trim=color&updated_at=1652809378&q=80",
            price:"$353",
            number:"108",
            sold: true
        },
        {
            productTitle:"Nike Air Max 1 Travis Scott Cactus Jack Saturn",
            productImage:"https://images.stockx.com/images/Nike-Air-Max-1-Travis-Scott-Wheat-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=webp&auto=compress&dpr=1&trim=color&updated_at=1648066078&q=80",
            price:"$360",
            number:"77",
            sold: true
        },
        {
            productTitle: "Crocs Pollex Clog by Salehe Bembury",
            productImage: "https://images.stockx.com/images/Crocs-Pollex-Clog-by-Salehe-Bembury-Urchin-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=webp&auto=compress&dpr=1&trim=color&updated_at=1652905265&q=80",
            price:"$270",
            number:"24",
            sold: true
        },
        
        {
            productTitle:"Alexander McQueen Oversized Ivory Black",
            productImage:"https://images.stockx.com/images/Alexander-McQueen-Oversized-Ivory-Black.png?fit=fill&bg=FFFFFF&w=140&h=75&fm=webp&auto=compress&dpr=1&trim=color&updated_at=1611694834&q=80",
            price:"$385",
            number:"12",
            sold: true
        },
    ]

    const popular_brands = [
        {
            Image: "https://images.contentstack.io/v3/assets/blt818b0c67cf450811/bltbb91c212b5de4d8a/61561b6110d4154779bdba01/jordan.png?format=jpg&auto=webp&width=0.5",
        },
        {
            Image: "https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt02e2e8c84bc2b6f6/61561a71c3934450a14e395a/supreme_tile.png?format=jpg&auto=webp&width=0.5",
        },
        {
            Image: "https://images.contentstack.io/v3/assets/blt818b0c67cf450811/bltd17af3434fe765f4/61561a892b3bb345f7e7fae9/ps4.png?format=jpg&auto=webp&width=0.5",
        },
        {
            Image: "https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt9fd4296f268a90bb/61561b4310d4154779bdb9ff/yzy.png?format=jpg&auto=webp&width=0.5",
        },
        {
            Image: "https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt7680e1627e5b56e7/61561ba72b3bb345f7e7faed/lego.png?format=jpg&auto=webp&width=0.5",
        },
    ]

    const recently_viewed= [
        {
            productTitle: "adidas Yeezy Boost 350 Moonrock",
            productImage:"https://images.stockx.com/images/Adidas-Yeezy-Boost-350-Low-Moonrock-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=webp&auto=compress&dpr=1&trim=color&updated_at=1606317456&q=80",
            price:"$730",
            number:"$978",
            sold: false
        },
        {   
            productTitle: "Jordan 4 Retro Kaws 2017",
            productImage: "https://images.stockx.com/images/Air-Jordan-4-Retro-Kaws-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=webp&auto=compress&dpr=1&trim=color&updated_at=1606316872&q=80",
            price: "$2,662",
            number: "$3,597",
            sold: false
        },
        {   
            productTitle:"adidas Yeezy Boost 350 V2 Butter",
            productImage:"https://images.stockx.com/images/Adidas-Yeezy-Boost-350-V2-Butter-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=webp&auto=compress&dpr=1&trim=color&updated_at=1606325882&q=80",
            price:"$299",
            number:"$286",
            sold: false
        },
        {
            productTitle:"Jordan 4 Retro University Blue",
            productImage:"https://images.stockx.com/images/Air-Jordan-4-Retro-University-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=webp&auto=compress&dpr=1&trim=color&updated_at=1616520672&q=80",
            price:"$400",
            number:"$476",
            sold: false
        },
        {
            productTitle: "adidas NMD Hu Pharrell Solar Pack Red",
            productImage: "https://images.stockx.com/images/adidas-NMD-Hu-Pharrell-Solar-Pack-Red-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=webp&auto=compress&dpr=1&trim=color&updated_at=1606324332&q=80",
            price:"$219",
            number:"$210",
            sold: false
        },
        
        {
            productTitle:"adidas NMD Hu Pharrell Human Race Triple Black",
            productImage:"https://images.stockx.com/images/adidas-NMD-Hu-Pharrell-Human-Race-Triple-Black-Pack-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=webp&auto=compress&dpr=1&trim=color&updated_at=1617050319&q=80",
            price:"$385",
            number:"$215",
            sold: false
        },
    ]

    const list_article = [
        {
            imagen: "https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt4f5055e1a0311edd/628bbc608e88d660b6a145d2/Best_Selling_LEGO_Sets_banner_&_social_assetsSecondaryA.jpg?format=jpg&auto=webp&height=438",
            imagen1: "https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt83271ea0c342faa1/628bbc61dcc93261eccb0db0/MSCHFBlur_Internal_Banners_SecondaryB.jpg?format=jpg&auto=webp&height=438",
            state: true
        },
    ]

    const featured_apparel = [
        {
            productTitle: "Nike x Stussy Sweatpants Grey",
            productImage:"https://images.stockx.com/images/Nike-x-Stussy-Sweatpants-Grey.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=webp&auto=compress&dpr=1&trim=color&updated_at=1652467805&q=80",
            price:"$114",
            number:"$135",
            sold: false
        },
        {
            productTitle: "Garment Workshop Fate/Karma College...",
            productImage:"https://images.stockx.com/images/Garment-Workshop-Fate-Karma-College-Jacket-Fire-Red.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=webp&auto=compress&dpr=1&trim=color&updated_at=1650495888&q=80",
            price:"$162",
            number:"$180",
            sold: false
        },
        {
            productTitle: "Supreme Umbro Track Jacket Black",
            productImage:"https://images.stockx.com/images/Supreme-Umbro-Track-Jacket-Black.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=webp&auto=compress&dpr=1&trim=color&updated_at=1651768637&q=80",
            price:"$230",
            number:"$245",
            sold: false
        },
        {
            productTitle: "Kanye West DONDA August 5 Listening",
            productImage:"https://images.stockx.com/images/Kanye-West-DONDA-August-5-Listening-Event-L-S-T-shirt-Black.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=webp&auto=compress&dpr=1&trim=color&updated_at=1628234922&q=80",
            price:"$63",
            number:"$63",
            sold: false
        },
        {
            productTitle: "Kid Cudi CPFM For MOTM III Beautiful Trip",
            productImage:"https://images.stockx.com/images/Kid-Cudi-CPFM-For-MOTM-III-Beautiful-Trip-Crewneck-Yellow.png?fit=fill&bg=FFFFFF&w=140&h=75&fm=webp&auto=compress&dpr=1&trim=color&updated_at=1608099228&q=80",
            price:"$159",
            number:"$175",
            sold: false
        },
        {
            productTitle: "Kanye West Jesus Is King Cros II Crewneck",
            productImage:"https://images.stockx.com/images/Kanye-West-Jesus-Is-King-Cross-II-Crewneck-Navy.png?fit=fill&bg=FFFFFF&w=140&h=75&fm=webp&auto=compress&dpr=1&trim=color&updated_at=1619741218&q=80",
            price:"$210",
            number:"$285",
            sold: false
        }]

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
        <section>
          <Carousel className='Carousel_Item'>
            <div className="Card">
              <img src="https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt5c9bf27509865396/62850b5b1cd65960bcfed2a4/Primary_Desktop_(4).png?quality=90&auto=webp&format=pjpg&height=450" />
            </div>
            <div className="Card">
              <img src="https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt85a36e09988d5fcd/6282a9be0457495358470b61/Shorts_For_SummerPrimary_Desktop.jpg?quality=90&auto=webp&format=pjpg&height=450" />
            </div>
            <div className="Card">
              <img src="https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt941a9a02028a6e13/6282a9bd6f81705517a18117/Air_Jordan_11_Low_72-10_assetsPrimary_Desktop.jpg?quality=90&auto=webp&format=pjpg&height=450" />
            </div>
            <div className="Card">
              <img src="https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt83ed196788ccc02b/6282a9bd0457495358470b5d/AJ3NeapolitanDarkMocha_Translated_Internal_Banners_Primary_Desktop.jpg?quality=90&auto=webp&format=pjpg&height=450" />
            </div>
          </Carousel>
        </section>
        <section className='featured-products-section'>
            <h2>
                Trending Sneakers <div className='circulo'>?</div>
            </h2>
            {products.map((products) =>(
            <Featured_Products
                productTitle = {products.productTitle}
                productImage = {products.productImage}
                price = {products.price}
                number = {products.number}
                sold= {products.sold}
            />
        ))}
        </section>
        <section className='popular-brands-section'>
            <h2>
                    Popular Brands
            </h2>
            {popular_brands.map((popular_brands) =>(
                <Popular_Brands
                    titulo = {popular_brands.titulo}
                    image = {popular_brands.Image}
                />
            ))}
        </section>
        <section className='featured-products-section'>
            <h2>
                Recently Viewed <div className='circulo_recently'>?</div>
            </h2>
            {recently_viewed.map((Recently) =>(
            <Featured_Products
                productTitle = {Recently.productTitle}
                productImage = {Recently.productImage}
                price = {Recently.price}
                number = {Recently.number}
                sold= {Recently.sold}
            />
        ))}
        </section>

        <section className='featured-products-apparel'>
            <h2>
                Featured Apparel <div className='circulo_apparel'>?</div>
            </h2>
            {featured_apparel.map((products) =>(
            <Featured_Products
                productTitle = {products.productTitle}
                productImage = {products.productImage}
                price = {products.price}
                number = {products.number}
                sold= {products.sold}
            />
        ))}
        </section>

        <section className='list-article-section'>

            {list_article.map((list) =>(
                <List_Article
                    imagen= {list.imagen}
                    imagen1={list.imagen1}
                    state= {list.state}
                />
            ))}

        </section>


      </>
    );
};

export default Body;