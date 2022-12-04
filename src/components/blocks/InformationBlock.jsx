import { Box } from "@mui/material";
import React, { useState } from "react";

const InformationBlock = ({ Icon, contentText, bgColor, gridC, gridR }) => {
  const [bodyText, setBodyText] = useState(contentText);
  const [gC, setGC] = useState(gridC);
  const [gR, setGR] = useState(gridR);

  return (
    <Box
      sx={{
        gridColumn: `${gC}`,
        gridRow: `${gR}`,
        backgroundColor: `${bgColor}`,
        boxSizing: "border-box",
        padding: "25px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {Icon ? <Icon sx={{ fontSize: "60px" }} /> : "icon"}
      <span
        style={{
          textTransform: "uppercase",
          fontWeight: "600",
          marginTop: "10px",
        }}
      >
        {" "}
        {bodyText}
      </span>
    </Box>
  );
};

export default InformationBlock;
