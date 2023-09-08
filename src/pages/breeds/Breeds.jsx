import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// custom hooks
import useLocationParams from "../../hooks/useLocationParams";
// fetch
import { fetchBreeds } from "../../store/reducers/breedsSlice";
// components
import { Box } from "@mui/material";
import LocationAndBackBtns from "../../components/locationAndBackBtns/LocationAndBackBtns";
import Loader from "../../components/loader/Loader";
import GridLayout from "../../components/gridLayout/GridLayout";

const Breeds = () => {
  const dispatch = useDispatch();

  const { params } = useLocationParams();
  console.log("useLocationParams", params);

  const loading = useSelector((state) => state.breedsReducer.loader);
  const breeds = useSelector((state) => state.breedsReducer.breedsData);

  useEffect(() => {
    dispatch(fetchBreeds());
  }, []);

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
      </Box>
      {/* Breeds */}
      {loading ? <Loader /> : <GridLayout breeds={breeds} />}
    </Box>
  );
};

export default Breeds;
