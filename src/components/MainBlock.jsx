import { styled } from "@mui/material/styles";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

import PresentBlock from "./blocks/PresentBlock";
import InformationBlock from "./blocks/InformationBlock";
import SliderBlock from "./blocks/SliderBlock";
import GallaryBlock from "./blocks/GallaryBlock";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";

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

const MainBlock = () => {
  return (
    <GridBox sx={{ position: "relative" }}>
      <Box
        sx={{
          backgroundImage: "url('https://placeimg.com/1280/1024/city')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          gridColumn: "1/5",
          gridRow: "1/4",
        }}
      ></Box>
      <Box
        sx={{
          backgroundImage: "url('https://source.unsplash.com/random?night')",
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
          buttonText={"read more"}
          bgColor={"yellow"}
          gridC={"2/4"}
          gridR={"2"}
        />
        <InformationBlock
          Icon={PlayCircleIcon}
          contentText={"company video"}
          bgColor={"green"}
          gridC={"4"}
          gridR={"3"}
        />
        <SliderBlock
          bgColor={"white"}
          maxSliders={"03"}
          gridC={"5"}
          gridR={"2"}
        />
        <PresentBlock
          mainLogoText={
            <>
              our <br /> services
            </>
          }
          mainTextFontSize={"28px"}
          trait={true}
          contentText={
            "Our mission is to provide the highest level of service for our client-partners from concept through construction."
          }
          button={false}
          buttonText={"read more"}
          bgColor={"white"}
          gridC={"2"}
          gridR={"4"}
        />
        <GallaryBlock gridC={"3"} gridR={"4"} />
        <PresentBlock
          mainLogoText={
            <>
              general <br /> contracting
            </>
          }
          mainTextFontSize={"20px"}
          trait={true}
          contentText={
            "This allows the Design and Engineering team to originate drawings, specifications, structural calculations, details and scopes of work that deliver exactly what the client had intended to achieve."
          }
          button={false}
          buttonText={"read more"}
          bgColor={"white"}
          gridC={"4"}
          gridR={"4"}
        />
        <GallaryBlock gridC={"5"} gridR={"4"} />
        <SliderBlock
          bgColor={"white"}
          maxSliders={"06"}
          gridC={"2"}
          gridR={"5"}
        />
        <PresentBlock
          mainLogoText={
            <>
              project design <br /> and engineering
            </>
          }
          mainTextFontSize={"20px"}
          trait={true}
          contentText={
            "Through Stage-Gate, Design and Engineering methodology, DMCS ensure client-partners realize clearly defined project objective ti achieve intended results."
          }
          button={false}
          buttonText={"read more"}
          bgColor={"white"}
          gridC={"3"}
          gridR={"5"}
        />
        <GallaryBlock gridC={"4"} gridR={"5"} />
        <PresentBlock
          mainLogoText={
            <>
              capital <br /> improvements
            </>
          }
          mainTextFontSize={"20px"}
          trait={true}
          contentText={
            "This results in scope creep and slippage of the schedule that ultimately result in additional costs to the owner."
          }
          button={false}
          buttonText={"read more"}
          bgColor={"white"}
          gridC={"5"}
          gridR={"5"}
        />
        <InformationBlock
          Icon={SimCardDownloadIcon}
          contentText={"download price"}
          bgColor={"yellow"}
          gridC={"2"}
          gridR={"6"}
        />
                <InformationBlock
          Icon={SimCardDownloadIcon}
          contentText={"download price"}
          bgColor={"blue"}
          gridC={"4"}
          gridR={"6"}
        />
      </ContentBox>
    </GridBox>
  );
};

export default MainBlock;
