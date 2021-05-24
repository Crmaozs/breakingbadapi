import React from 'react'
import './Pagination.css'

const Pagination = (props) => {

    const{onLeftClick, onRightClick, page, totalPages} = props

    return (
        <div className="pagination"> 
            <button onClick={onLeftClick}>
                <div className="icon">◀️</div>
            </button>
            <div>{page} de {totalPages} </div>
            <button onClick={onRightClick}>
               <div className="icon">▶️</div>
            </button>
        </div>
    )
}

export default Pagination
