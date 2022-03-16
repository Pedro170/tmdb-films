import React from 'react'

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
    return (
        <div className='pagination' >
            { Array.from(Array(pages), (films, idx) => {
                return (
                    <button 
                        key={ idx }
                        className='btn-page'
                        style={ idx === currentPage ? { backgroundColor: "red" } : null }
                        value={ idx }
                        onClick={ (e) => setCurrentPage(Number(e.target.value)) }>
                        { idx + 1 }
                    </button>
                )
            }) }
        </div>
    )
}

export default Pagination