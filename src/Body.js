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
      </>
    );
};

export default Body;