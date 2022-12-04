import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React, { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const SliderTracker = styled("span")(({ theme }) => ({
  color: "#575757",
  fontWeight: "500",
  fontSize: "30px",
}));

const SliderBlock = ({ bgColor, maxSliders, gridC, gridR }) => {
  const [num, setNum] = useState(maxSliders);
  const [gC, setGC] = useState(gridC);
  const [gR, setGR] = useState(gridR);
  return (
    <Box
      sx={{
        gridColumn: `${gC}`,
        gridRow: `${gR}`,
        backgroundColor: `${bgColor}`,
        boxSizing: "border-box",
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <PlayArrowIcon sx={{ fontSize: "50px", color: "#575757" }} />
      <Box>
        <SliderTracker>01/</SliderTracker>
        <SliderTracker>{num}</SliderTracker>
      </Box>
      <PlayArrowIcon
        sx={{ fontSize: "50px", color: "#575757", rotate: "180deg" }}
      />
    </Box>
  );
};

export default SliderBlock;
