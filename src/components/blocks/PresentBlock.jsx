import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import React, { useState } from "react";

const TraitItem = styled("div")(({ theme }) => ({
  width: "40px",
  height: "4px",
  background: "#453939",
  border: "1px solid #453939",
  borderRadius: "2px",
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
  const [traitCreated, setTraitCraated] = useState(trait);
  const [bodyText, setBodyText] = useState(contentText);
  const [buttonCreated, setButtonCreated] = useState(button);
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
        alignSelf: "flex-start",
        justifyContent: "space-evenly",
        height: "100%",
      }}
    >
      <Box>
        <Box
          sx={{
            fontSize: `${fSHeaderText}`,
            fontWeight: "600",
            color: "#353736",
            textTransform: "uppercase",
          }}
        >
          {headerText}
        </Box>
        {traitCreated ? <TraitItem /> : ""}
        <Box
          sx={{
            fontSize: "14px",
            color: "#353736",
          }}
        >
          {bodyText}
        </Box>
      </Box>
      {buttonCreated ? (
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#363636",
            color: "white",
            fontSize: "16px",
            padding: "10px",
          }}
        >
          {bText}
        </Button>
      ) : (
        ""
      )}
    </Box>
  );
};

export default PresentBlock;
