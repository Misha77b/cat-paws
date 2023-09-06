import React from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import {
  itemBoxStyle,
  itemImgStyle,
  hoverBoxStyle,
  hoverBtnStyle,
} from "./sxGridLayoutItem";

const GridLayoutItem = ({ id, itemIndex, imgUrl, button }) => {
  return (
    <Box className={`grid-item ${itemIndex}`} sx={itemBoxStyle}>
      <img style={itemImgStyle} src={imgUrl} alt="alt" />
      <Box className="card-cover" sx={hoverBoxStyle}>
        <Button
          component={Link}
          to={`/breeds/${id}`}
          color="primary"
          sx={hoverBtnStyle}
        >
          {button}
        </Button>
      </Box>
    </Box>
  );
};

export default GridLayoutItem;
