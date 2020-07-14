import React from 'react'
import ProductItem from './ProductItem'
import './ProductsGrid.css'
import {useHistory} from 'react-router-dom'

const ProductsGrid = ({loading , products}) => {
    const history = useHistory();
    return loading ? <h1 className="loading">Loading...</h1> :
        <section className="cards-product-item">
            {products.map(product => (                
                <ProductItem key={product.id_product} product={product}/>
            ))}
        </section>
    
}

export default ProductsGrid
