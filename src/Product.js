import React from "react";

function Product(props) {

    const {name, description, price, category, rating, units} = props

    return (
        <div className='ProductContainer'>
            <h2>{name}</h2>
            <p>{description}</p>
            <div>
                <p>{price}</p>
            </div>
            <small>Category: {category}</small>
            <small>Rating: {rating}</small>
            <small>Units: {units}</small>
        </div>
    )
}

export default Product