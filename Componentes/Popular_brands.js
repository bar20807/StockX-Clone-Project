import React from "react";
import '../css/style.css'

const Popular_Brands = ({titulo,image}) => {
    return (
        <section className="popular_brands">
            <h2>
                {titulo}
            </h2>
            <ul>
                <li>
                    <img className="" src={image} alt="" />
                </li>
            </ul>
        </section>
    )
}

export default Popular_Brands