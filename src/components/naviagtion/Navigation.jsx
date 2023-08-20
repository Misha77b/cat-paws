import React from "react";
// nav array data
import { navData } from "./navData";
// MUI components
import { Box } from "@mui/material";
import NavItem from "./components/NavItem";

const Navigation = () => {
  return (
    <Box sx={{ display: "flex", gap: "10px" }}>
      {navData.map((item) => {
        return (
          <Box key={item.key}>
            <NavItem
              title={item.title}
              color={item.color}
              img={item.img}
              imgAlt={item.imgAlt}
              imgSize={item.imgSize}
              link={item.link}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default Navigation;
