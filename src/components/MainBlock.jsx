import { styled } from "@mui/material/styles";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const GridBox = styled("div")(
  ({ theme }) => `
  --cell-size: 293px;
  display: grid;
  grid-template-columns: 1fr repeat(4, var(--cell-size)) 1fr;
  grid-template-rows: repeat(--cell-size, auto);
  grid-auto-rows: var(--cell-size);

`
);

const Trait = styled("div")(({ theme }) => ({
  width: "40px",
  height: "4px",
  background: "#453939",
  border: "1px solid #453939",
  borderRadius: "2px",
}));

const ButtonTypeMore = styled("button")(({ theme }) => ({
  padding: "15px",
  color: "white",
  textTransform: "uppercase",
  fontSize: "12px",
  fontWeight: "600",
  letterSpacing: "2px",
  border: "none",
  background: "#453939",
  cursor: "pointer",
}));

const SliderTracker = styled("span")(({ theme }) => ({
  color: "#575757",
  fontWeight: "600",
}));

const MainBlock = () => {
  return (
    <Box sx={{ position: "relative", top: "-39px" }}>

      

    </Box>
  );
};

export default MainBlock;
