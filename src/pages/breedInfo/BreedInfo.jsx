import React, { useEffect } from "react";
import useLocationParams from "../../hooks/useLocationParams";
import { useParams } from "react-router-dom";
import { fetchBreedInfo } from "../../store/reducers/breedInfoSlice";
import { useDispatch, useSelector } from "react-redux";
// components
import LocationAndBackBtns from "../../components/locationAndBackBtns/LocationAndBackBtns";
import { Box } from "@mui/material";
import Slider from "../../components/slider/Slider";
import BreedDescription from "./components/breedDescription/BreedDescription";

const BreedInfo = () => {
  const dispatch = useDispatch();
  //   const { params } = useLocationParams();
  const { id } = useParams();

  const breedInfo = useSelector((state) => state.breedInfoReducer.breedInfo);
  console.log(breedInfo);

  useEffect(() => {
    dispatch(fetchBreedInfo(id));
  }, []);
  //   console.log(params.id);
  console.log("id =", id);
  return (
    <Box
      sx={{
        width: "640px",
        padding: "20px",
        borderRadius: "20px",
        background: "#FFF",
      }}
    >
      <LocationAndBackBtns />
      <Slider />
      <BreedDescription />
    </Box>
  );
};

export default BreedInfo;
