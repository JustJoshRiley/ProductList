import React from "react";
import './CategoryList.css'
import data, {uniqueCategories, categoriesWithCounts, categoriesAndCounts} from './data';


function CategoryList(props) {
    const {category, onClick} = props

    return(
        <div className="CategoryList">
            {categoriesAndCounts.map((obj) => {
                const {name, count} = obj
                const className = obj.name === category ? 'selected' : ''
                return (
                    <button 
                        className={className}
                        onClick={() => onClick(name)}
                    >
                        {name}
                        <span> {count}</span>
                    </button>
                )
            })}
        </div>
    )
}

export default CategoryList;