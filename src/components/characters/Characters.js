import React from 'react'
import Character from '../character/Character'
import Pagination from '../pagination/Pagination'
import Spinner from '../spinner/Spinner'
import './Characters.css'

const Characters = ({items, isLoading, query, page, setPage, total}) => {

    const lastPage = () => {
        const nextPage = Math.max(page - 1, 0)
        setPage(nextPage)
    }

    const nextPage = () => {
        const nextPage = Math.min(page + 1, total)
        setPage(nextPage)
    }

    return (
        <div>{
            isLoading ? (<Spinner/>) : 
            (<section className = "cards">
                { query ?
                    query.map((item) =>(
                        <Character key={item.char_id} item={item}/>
                    )):items.map((item) =>(
                        <Character key={item.char_id} item={item}/>
                    ))
                }
            </section>)}
            <div className="pagination">
                <Pagination
                    page = {page + 1}
                    totalPages={total}
                    onLeftClick = {lastPage}
                    onRightClick = {nextPage}
                />
            </div>
        </div>)
    
}

export default Characters
