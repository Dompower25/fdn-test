import { styled } from "@mui/material/styles";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PresentBlock from "./blocks/PresentBlock";

const GridBox = styled("div")(
  ({ theme }) => `
  top: -70px;
  display: relative;
  --cell-size: 293px;
  display: grid;
  grid-template-columns: 1fr repeat(4, 293px) 1fr;
  grid-template-rows: repeat(--cell-size, auto);
  grid-auto-rows: var(--cell-size);
`
);

const ContentBox = styled("div")(
  ({ theme }) => `
  --cell-size: 293px;
  display: grid;
  grid-template-columns: 1fr repeat(4, var(--cell-size)) 1fr;
  grid-column: 2 / 6;
  grid-row-start: 1;
  grid-auto-rows: var(--cell-size);
`
);

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
    <GridBox sx={{ position: "relative" }}>
      <Box
        sx={{
          backgroundColor: "pink", // backgroundImage: "url('https://placeimg.com/1280/1024/any')"
          backgroundPosition: "center",
          backgroundSize: "cover",
          gridColumn: "1/5",
          gridRow: "1/4",
        }}
      ></Box>
      <Box
        sx={{
          backgroundColor: "#030303", //backgroundImage: "url('https://source.unsplash.com/random?night')"
          backgroundPosition: "center",
          backgroundSize: "cover",
          gridColumn: "5/7",
          gridRow: "1/4",
        }}
      ></Box>
      <ContentBox>
        <PresentBlock
          mainLogoText={
            <>
              build the <br /> world around us
            </>
          }
          mainTextFontSize={"28px"}
          trait={true}
          contentText={
            "Still other clients have reserved for capital improvement projects and will work directly with our"
          }
          button={true}
          bgColor={"yellow"}
          gridC={"2/4"}
          gridR={"2"}
        />
      </ContentBox>
    </GridBox>
  );
};

export default MainBlock;
