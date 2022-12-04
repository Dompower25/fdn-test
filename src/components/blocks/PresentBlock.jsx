import styled from "@emotion/styled";
import { Box, Button, CardActions } from "@mui/material";
import React, { useState } from "react";

const TraitItem = styled("div")(({ theme }) => ({
  width: "40px",
  height: "4px",
  background: "#453939",
  border: "1px solid #453939",
  borderRadius: "2px",
  margin: "5px 0",
}));

const PresentBlock = ({
  mainLogoText,
  mainTextFontSize,
  trait,
  contentText,
  button,
  buttonText,
  bgColor,
  gridC,
  gridR,
}) => {
  const [headerText, setHeaderText] = useState(mainLogoText);
  const [fSHeaderText, setFSHeaderText] = useState(mainTextFontSize);
  const [bodyText, setBodyText] = useState(contentText);
  const [bText, setBText] = useState(buttonText);
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
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            fontSize: `${fSHeaderText}`,
            fontWeight: "600",
            color: "#353736",
            textTransform: "uppercase",
            marginBottom: "5px",
          }}
        >
          {headerText}
        </Box>
        {trait ? <TraitItem /> : ""}
        <Box
          sx={{
            fontSize: "14px",
            fontWeight: "600",
            letterSpacing: "1px",
            color: "#353736",
            marginTop: "5px",
          }}
        >
          {bodyText}
        </Box>
      </Box>
      {button ? (
        <CardActions
          sx={{
            padding: "0",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#363636",
              color: "white",
              fontSize: "16px",
              padding: "10px 25px",
            }}
          >
            {bText}
          </Button>
        </CardActions>
      ) : (
        ""
      )}
    </Box>
  );
};

export default PresentBlock;
