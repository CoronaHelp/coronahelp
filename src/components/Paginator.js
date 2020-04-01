import React, { useState } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const Paginator = ({ itemsLength, itemsPerPage, setPages, pages }) => {

  const [totalPages, setTotalPages] = useState(
    Math.ceil(itemsLength / itemsPerPage)
  );
  const [currentPage, setCurrentPage] = useState(1)

  const generatePageLinks = () => {
    let pageLinks = [];
    const startPageNumber = (currentPage - 2) > 1 ? (currentPage - 3) : 0
    const endPageNumber = (currentPage + 2) < totalPages ? currentPage + 2 : totalPages
    for (let i = startPageNumber; i < endPageNumber; i++) {
      const handleSetPages = (i) => {
        setPages({ start: i * itemsPerPage, end: (i + 1) * itemsPerPage })
        setCurrentPage(i + 1)
      }
      pageLinks.push(
        <PaginationItem active={i + 1 === currentPage ? true : false}>
          <PaginationLink onClick={() => handleSetPages(i)}>{i + 1}</PaginationLink>
        </PaginationItem>
      );
    }
    return pageLinks;
  };

  const getNextPage = (pageAmount) => {
    let nextPage = currentPage + pageAmount
    if (nextPage > totalPages) {
      nextPage = totalPages
    } else if (nextPage < 1) {
      nextPage = 1
    }
    setPages({ start: (nextPage - 1) * itemsPerPage, end: nextPage * itemsPerPage })
    setCurrentPage(nextPage)
  }

  return (
    <Pagination style={{ marginBottom: 20 }} aria-label="Page navigation example">
      <PaginationItem>
        <PaginationLink first onClick={() => getNextPage(-totalPages)} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink previous onClick={() => getNextPage(-1)} />
      </PaginationItem>
      {generatePageLinks()}
      <PaginationItem>
        <PaginationLink next onClick={() => getNextPage(1)} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last onClick={() => getNextPage(totalPages)} />
      </PaginationItem>
    </Pagination>
  );
};

export default Paginator;
