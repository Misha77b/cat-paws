import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
// custom hooks
import useLocationParams from "../../hooks/useLocationParams";
// fetch
import { fetchBreeds } from "../../store/reducers/breedsSlice";
// components
import { Box } from "@mui/material";
import LocationAndBackBtns from "../../components/locationAndBackBtns/LocationAndBackBtns";
import Loader from "../../components/loader/Loader";
import GridLayout from "../../components/gridLayout/GridLayout";
import FilterByBreeds from "./components/filterByBreeds/FilterByBreeds";
import LimitItems from "./components/limitItems/LimitItems";
import Pagination from "../../components/pagination/Pagination";

const Breeds = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useSearchParams();
  const { params } = useLocationParams();
  console.log("useLocationParams", params);

  //   pagination
  const [pageNumber, setPageNumber] = useState(0);
  const currentPage = search.get("page");
  //   console.log(currentPage);

  // pageItems limit
  const [limit, setLimit] = useState(null);
  const currentLimit = search.get("limit");
  //   console.log(currentLimit);

  const loading = useSelector((state) => state.breedsReducer.loader);
  const breeds = useSelector((state) => state.breedsReducer.breedsData);

  useEffect(() => {
    if (currentPage === null) {
      setPageNumber(currentPage ? parseInt(currentPage) : 0);
    } else {
      setPageNumber(currentPage ? parseInt(currentPage) : 0);
    }
  }, [currentPage]);

  useEffect(() => {
    // console.log(parseInt(currentLimit));
    if (currentLimit === null) {
      setLimit(10);
      //   search.set("limit", limit);
    } else {
      setLimit(parseInt(currentLimit));
      //   search.set("limit", limit);
    }
  }, [limit]);

  useEffect(() => {
    dispatch(fetchBreeds({ params }));
  }, [pageNumber, limit]);

  return (
    <Box
      sx={{
        width: "640px",
        padding: "20px",
        borderRadius: "20px",
        background: "#FFF",
      }}
    >
      <Box
        className="page-control"
        sx={{ marginBottom: "20px", display: "flex", gap: "10px" }}
      >
        <LocationAndBackBtns />
        <FilterByBreeds />
        <LimitItems limit={limit} setLimit={setLimit} />
      </Box>
      {/* Breeds */}
      {loading ? (
        <Loader />
      ) : (
        <>
          <GridLayout breeds={breeds} />{" "}
          <Pagination
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            currentPage={currentPage}
          />
        </>
      )}
    </Box>
  );
};

export default Breeds;
