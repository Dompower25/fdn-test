import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import HeaderBar from "./HeaderBar";

const CastomBox = styled("div")(({ theme }) => ({
  width: "100%",
  minHeight: "879px",
  background:
    "url('https://img.freepik.com/free-photo/modern-office-building-low-angle-view-skyscrapers-city-singapore-modern-office-building-low-angle-view-skyscrapers-city-singapore_231208-1463.jpg?w=1380&t=st=1668717396~exp=1668717996~hmac=42c13e221c4c86b56a1df532aca58c1caadfdce9d241acfb6be3f9951d6133eb') 0 0/auto 100% no-repeat",
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
              <Grid item xs={4.27} sx={{ minHeight: "293px" }} />
              <Grid item xs={1.27} />
              <Grid item xs={3}>
                <Box
                  sx={{
                    width: "66.66%",
                    minHeight: "293px",
                    backgroundColor: "green",
                  }}
                >
                  586x293
                </Box>
              </Grid>
              <Grid item xs={3.27} />
              <Grid item xs={1}>
                <Box
                  sx={{
                    width: "100%",
                    minHeight: "293px",
                    backgroundColor: "pink",
                  }}
                >
                  293x293
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
                  <Grid item xs={3} sx={{ minHeight: "293px" }} />
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
