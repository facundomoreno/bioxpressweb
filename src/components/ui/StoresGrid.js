import React from 'react'
import StoreItem from './StoreItem'
import './StoresGrid.css'

const StoresGrid = ({isLoading, stores}) => {
    return isLoading ? <h1 className="loading">Loading...</h1> :
    <section className="cards-store-item">
    {stores.map(store => (
        <StoreItem key={store.id_store} store={store}/>
    ))}
</section>
}

export default StoresGrid
