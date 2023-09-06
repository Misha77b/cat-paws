export const itemBoxStyle = {
  position: "relative",
  "&:hover .card-cover": {
    display: "flex",
  },
};
export const itemImgStyle = {
  borderRadius: "inherit",
  objectFit: "cover",
  width: "100%",
  height: "100%",
};

export const hoverBoxStyle = {
  position: "absolute",
  top: "0",
  left: "0",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  background: "rgba(255, 134, 142, 0.60)",
  borderRadius: "inherit",
  display: "none",
};

export const hoverBtnStyle = {
  textTransform: "capitalize",
  width: "180px",
  background: "#FFF",
  "&:hover": {
    background: "#FFF",
  },
};
