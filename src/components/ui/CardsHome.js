import React from 'react'
import './CardsHome.css'
import {Link} from 'react-router-dom'

const CardsHome = () => {
    return (
     <div className="cards-container">
        <Link to='/productos' className="link-home">
        <div className='card-home'>
            <h3 className="h3-home">Productos</h3>            
        </div>
        </Link>

        <Link to='/userstores' className="link-home">
        <div className='card-home'>
            <h3 className="h3-home">Usuarios Y Negocios</h3>            
        </div>
        </Link>

        <Link to='/historial-entregas' className="link-home">
        <div className='card-home'>
            <h3 className="h3-home">Historial de Entregas</h3>            
        </div>
        </Link>

        <Link to='/categorias' className="link-home">
        <div className='card-home'>
            <h3 className="h3-home">Categorías</h3>            
        </div>
        </Link>
     </div>
    )
}

export default CardsHome
