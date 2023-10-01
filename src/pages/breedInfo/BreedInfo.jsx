import React, { useEffect } from "react";
import useLocationParams from "../../hooks/useLocationParams";
import { useParams } from "react-router-dom";
import { fetchBreedInfo } from "../../store/reducers/breedInfoSlice";
import { useDispatch, useSelector } from "react-redux";

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
  return <div>BreedInfo</div>;
};

export default BreedInfo;
