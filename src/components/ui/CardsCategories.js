import React from 'react'
import './CardsCategories.css'

const CardsCategories = ({categories}) => {
    return (
        <div className="categories-cards-container">
            {categories.map(category => (
                <div key={category.id_category} className="categories-card">
                    <h2 className="categories-ds-category">{category.ds_category}</h2>
                </div>
            ))}
            
        </div>
    )
}

export default CardsCategories
