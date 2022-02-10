import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({total_pages, setPage}) => {
    const handlePageChange = (e) => {
        setPage(e.selected)
        window.scrollTo(0,0)
    }
  return (
    <div className="paginate">
        <ReactPaginate 
            previousLabel = {"<<"}
            nextLabel = {">>"}
            breakable={"..,"}
            pageCount= {total_pages}
            marginPagesDisplayed={5}
            pageRangeDisplayed={6}
            onPageChange = {handlePageChange}
            containerClassName = {"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName = {"page-item"}
            nextClassName = {"page-item"}
            previousLinkClassName = {"page-link"}
            nextLinkClassName = {"page-link"}
            breakClassName = {"page-item"}
            breakLinkClassName = {"page-link"}
            activeClassName = {"active"}
        />
    </div>
  )
}

export default Pagination