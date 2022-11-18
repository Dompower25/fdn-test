import { styled } from "@mui/material/styles";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import HeaderBar from "./HeaderBar";
import PlayCircleTwoToneIcon from "@mui/icons-material/PlayCircleTwoTone";

const CastomBox = styled("div")(({ theme }) => ({
  width: "100%",
  minHeight: "879px",
  background:
    "url('https://img.freepik.com/free-photo/modern-office-building-low-angle-view-skyscrapers-city-singapore-modern-office-building-low-angle-view-skyscrapers-city-singapore_231208-1463.jpg?w=1380&t=st=1668717396~exp=1668717996~hmac=42c13e221c4c86b56a1df532aca58c1caadfdce9d241acfb6be3f9951d6133eb') 0 0/auto 100% no-repeat",
}));
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

const MainBlock = () => {
  return (
    <Box sx={{ position: "relative", top: "-39px" }}>
      <HeaderBar />
      <Grid
        container
        spacing={0}
        columns={2.93}
        sx={{ top: "-50px", display: "flex" }}
      >
        <Grid item xs={1.93}>
          <CastomBox>
            <Grid container spacing={0} columns={4.27}>
              <Grid item xs={4.27} sx={{ height: "293px" }} />
              <Grid item xs={1.27} />
              <Grid item xs={2}>
                <Box
                  style={{
                    boxSizing: "border-box",
                    height: "293px",
                    backgroundColor: "yellow",
                    padding: "20px",
                  }}
                >
                  <Grid container columns={1} spacing={3}>
                    <Grid item xs={1}>
                      <Typography
                        variant="h4"
                        sx={{
                          color: "#453939",
                          textTransform: "uppercase",
                          fontWeight: "600",
                        }}
                      >
                        building the <br /> world around us
                      </Typography>
                    </Grid>
                    <Grid item xs={1}>
                      <Trait />
                    </Grid>
                    <Grid item xs={1}>
                      <Typography
                        sx={{
                          color: "#453939",
                          fontSize: "15px",
                          fontWeight: "600",
                        }}
                      >
                        Still other clients have reserved for capital
                        improvement projects and will work directly with our
                        Design and Engineering team.
                      </Typography>
                    </Grid>
                    <Grid item xs={1}>
                      <ButtonTypeMore>read more</ButtonTypeMore>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={3.27} />
              <Grid item xs={1}>
                <Box
                  sx={{
                    boxSizing: "border-box",
                    width: "100%",
                    height: "293px",
                    backgroundColor: "#6588e0",
                  }}
                >
                  <PlayCircleTwoToneIcon />
                  <span
                    style={{
                      color: "#ffff",
                      fontSize: "14px",
                      fontWeight: "600",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                    }}
                  >
                    company video
                  </span>
                </Box>
              </Grid>
            </Grid>
          </CastomBox>
        </Grid>
        <Grid item xs={1}>
          <Grid container spacing={0} columns={2.27}>
            <Grid item xs={2.27}>
              <Box
                sx={{
                  top: "0px",
                  width: "100%",
                  minHeight: "879px",
                  backgroundColor: "black",
                }}
              >
                <Grid container spacing={0} columns={3}>
                  <Grid item xs={3} sx={{ height: "293px" }} />
                  <Grid item xs={3}>
                    <Box
                      sx={{
                        width: "45.14%",
                        minHeight: "293px",
                        backgroundColor: "pink",
                      }}
                    ></Box>
                  </Grid>
                </Grid>
                <Grid item xs={3}></Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainBlock;
