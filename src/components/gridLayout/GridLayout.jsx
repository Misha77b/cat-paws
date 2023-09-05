import React from "react";
import { Box } from "@mui/material";
import "./GridLayout.scss";
import GridLayoutItem from "../gridLayoutItem/GridLayoutItem";

const GridLayout = ({ breeds }) => {
  console.log(breeds);
  return (
    <Box className="grid-container">
      {breeds.map((item, index) => {
        console.log(item.id);
        return (
          <GridLayoutItem
            key={item.id}
            imgUrl={item.image.url}
            button={item.name}
            itemIndex={`item${index + 1}`}
          />
        );
      })}

      {/* <Box className="grid-item item1"></Box>
      <Box className="grid-item item2"></Box>
      <Box className="grid-item item3"></Box>
      <Box className="grid-item item4"></Box>
      <Box className="grid-item item5"></Box>
      <Box className="grid-item item6"></Box>
      <Box className="grid-item item7"></Box>
      <Box className="grid-item item8"></Box>
      <Box className="grid-item item9"></Box>
      <Box className="grid-item item10"></Box>
      <Box className="grid-item item11"></Box>
      <Box className="grid-item item12"></Box>
      <Box className="grid-item item13"></Box>
      <Box className="grid-item item14"></Box>
      <Box className="grid-item item15"></Box>
      <Box className="grid-item item16"></Box>
      <Box className="grid-item item17"></Box>
      <Box className="grid-item item18"></Box>
      <Box className="grid-item item19"></Box>
      <Box className="grid-item item20"></Box> */}
    </Box>
  );
};

export default GridLayout;
