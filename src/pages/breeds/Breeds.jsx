import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// fetch
import { fetchBreeds } from "../../store/reducers/breedsSlice";
// components
import { Box } from "@mui/material";
import Loader from "../../components/loader/Loader";
import GridLayout from "../../components/gridLayout/GridLayout";

const Breeds = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.breedsReducer.loader);
  const breeds = useSelector((state) => state.breedsReducer.breedsData);
  console.log(loading);

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
      {/* Breeds */}
      {loading ? <Loader /> : <GridLayout breeds={breeds} />}
    </Box>
  );
};

export default Breeds;
