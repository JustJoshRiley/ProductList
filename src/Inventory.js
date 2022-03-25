import React from "react";
import data from "./data";
import './Inventory.css'

const totalPrice = data.reduce( (accumulator, obj) => {
    return accumulator + parseFloat(obj.price.slice(1))
}, 0).toFixed(2)

const totalUnits = data.reduce((accumulator, obj) => {
    return accumulator + obj.units
}, 0)

function Inventory() {
    return (
        <div className="Inventory">
            <h3>
                Total cost of Inventory: ${totalPrice}
            </h3>
            <h3>
                Total number of Units: {totalUnits}
            </h3>
        </div>
    )
}

export default Inventory