import React from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import { Box, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { paginationBox, btnStyle } from "./sxPagination";

const Pagination = ({ pageNumber, setPageNumber, currentPage }) => {
  const [search, setSearch] = useSearchParams();
  console.log(pageNumber);

  const handleNextPage = (_) => {
    setPageNumber(currentPage + 1);

    search.set("page", pageNumber);
    setSearch(search);
    if (pageNumber === 0) {
      search.delete("page");
      setSearch(search);
    }
  };

  const handlePrevPage = (_) => {
    setPageNumber(currentPage - 1);

    search.set("page", pageNumber);
    setSearch(search);
    if (pageNumber === 0) {
      search.delete("page");
      setSearch(search);
    }
  };

  return (
    <Box onClick={handlePrevPage} sx={paginationBox}>
      <Button sx={btnStyle}>
        <ArrowBackIosIcon sx={{ fontSize: "16px" }} />
        Prev
      </Button>
      <Button onClick={handleNextPage} sx={btnStyle}>
        Next
        <ArrowForwardIosIcon sx={{ fontSize: "16px" }} />
      </Button>
    </Box>
  );
};

export default Pagination;

Pagination.propTypes = {
  pageNumber: PropTypes.number,
  setPageNumber: PropTypes.func,
};
