import React from "react";
import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import LocalGroceryStoreRoundedIcon from "@mui/icons-material/LocalGroceryStoreRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import styled from "@emotion/styled";

const MyToolbar = styled("div")(({ theme }) => ({
  position: "sticky",
  top: "5px",
  width: "100%",
}));

const HeaderBar = () => {
  return (
    <MyToolbar>
      <Grid container spacing={0}>
        <Grid item xs={2} />
        <Grid item xs={7} sx={{ textAlign: "start" }}>
          <DashboardOutlinedIcon fontSize="large" />
        </Grid>
        <Grid item xs={0}>
          <IconButton>
            <FacebookIcon fontSize="small" sx={{ color: "white" }} />
          </IconButton>
        </Grid>
        <Grid item xs={0}>
          <IconButton>
            <TwitterIcon fontSize="small" sx={{ color: "white" }} />
          </IconButton>
        </Grid>
        <Grid item xs={0}>
          <IconButton>
            <LocalGroceryStoreRoundedIcon
              fontSize="small"
              sx={{ color: "white" }}
            />
          </IconButton>
        </Grid>
        <Grid item xs={0}>
          <IconButton>
            <MenuIcon fontSize="small" sx={{ color: "white" }} />
          </IconButton>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </MyToolbar>
  );
};

export default HeaderBar;
