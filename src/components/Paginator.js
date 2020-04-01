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

  return (
    <Pagination style={{ marginBottom: 20 }} aria-label="Page navigation example">
      <PaginationItem>
        <PaginationLink first href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink previous href="#" />
      </PaginationItem>
      {generatePageLinks()}
      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last href="#" />
      </PaginationItem>
    </Pagination>
  );
};

export default Paginator;
