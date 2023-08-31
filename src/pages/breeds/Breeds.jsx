import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// fetch
import { fetchBreeds } from "../../store/reducers/breedsSlice";
// components
import { Box } from "@mui/material";
import GridLayout from "../../components/gridLayout/GridLayout";

const Breeds = () => {
  const dispatch = useDispatch();

  const breeds = useSelector((state) => state.breedsReducer.breedsData);
  //   console.log(breeds);

  useEffect(() => {
    dispatch(fetchBreeds());
  }, []);

  return (
    <Box>
      Breeds
      <GridLayout breeds={breeds} />
    </Box>
  );
};

export default Breeds;
