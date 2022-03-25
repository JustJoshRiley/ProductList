import React from 'react'
import './ProductList.css'
import Product from './Product'
import data from './data'

function ProductList(props) {
    const {category} = props
    return (
        <div className='ProductList'>
        {data.filter(obj => obj.category === category || category === 'All').map(obj => {
            const {name, description, price, objCategory, rating, units} = obj
            return(
                <Product
                name={name}
                description={description}
                price={price}
                category={objCategory}
                rating={rating}
                units={units}
                />
            )
        })}
    </div>
    )
}

export default ProductList