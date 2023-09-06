import React from "react";
import { Box } from "@mui/material";
import "./GridLayout.scss";
import GridLayoutItem from "../gridLayoutItem/GridLayoutItem";

const GridLayout = ({ breeds }) => {
  return (
    <Box className="grid-container">
      {breeds.map((item, index) => {
        console.log(item.id);
        return (
          <GridLayoutItem
            key={item.id}
            id={item.id}
            imgUrl={item.image.url}
            button={item.name}
            itemIndex={`item${index + 1}`}
          />
        );
      })}
    </Box>
  );
};

export default GridLayout;
