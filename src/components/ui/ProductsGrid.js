import React from 'react'
import ProductItem from './ProductItem'
import './ProductsGrid.css'

const ProductsGrid = ({loading , products}) => {
    return loading ? <h1>Loading</h1> :
        <section className="cards-product-item">
            {products.map(product => (
                <ProductItem key={product.id} product={product}/>
            ))}
        </section>
    
}

export default ProductsGrid
