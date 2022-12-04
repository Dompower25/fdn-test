import { Box } from "@mui/material";
import React, { useState } from "react";

const GallaryBlock = ({ gridC, gridR }) => {
  const [gC, setGC] = useState(gridC);
  const [gR, setGR] = useState(gridR);
  return (
    <Box
      sx={{
        backgroundImage: "url('https://placeimg.com/640/320/night')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        gridColumn: `${gC}`,
        gridRow: `${gR}`,
      }}
    ></Box>
  );
};

export default GallaryBlock;
