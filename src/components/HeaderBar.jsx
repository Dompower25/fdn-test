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
import BadgeUnstyled, { badgeUnstyledClasses } from "@mui/base/BadgeUnstyled";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import LocalGroceryStoreRoundedIcon from "@mui/icons-material/LocalGroceryStoreRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import styled from "@emotion/styled";

const GridBox = styled("div")(
  ({ theme }) => `
  --cell-size: 293px;
  display: grid;
  grid-template-columns: 1fr repeat(4, var(--cell-size)) 1fr;
`
);

const MyToolbar = styled("div")(({ theme }) => ({
  position: "sticky",
  top: "10px",
  width: "100%",
  zIndex: "1",
}));

const StyledBadge = styled(BadgeUnstyled)(
  ({ theme }) => `
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-variant: tabular-nums;
  list-style: none;
  font-family: IBM Plex Sans, sans-serif;
  position: relative;
  display: inline-block;
  line-height: 1;

  & .${badgeUnstyledClasses.badge} {
    z-index: auto;
    position: absolute;
    top: 7px;
    right: 5px;
    min-width: 16px;
    height: 12px;
    color: #00000;
    font-weight: 600;
    font-size: 10px;
    line-height: 12px;
    white-space: nowrap;
    text-align: center;
    background: yellow;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
  }
  `
);

const HeaderBar = () => {
  return (
    <MyToolbar>
      <GridBox>
        <DashboardOutlinedIcon
          sx={{ gridColumn: "2/5", gridRow: "1", fontSize: "70px" }}
        />
        <Box sx={{ gridColumn: "5/6", gridRow: "1", alignSelf: "center" }}>
          <IconButton>
            <FacebookIcon fontSize="small" sx={{ color: "white" }} />
          </IconButton>

          <IconButton>
            <TwitterIcon fontSize="small" sx={{ color: "white" }} />
          </IconButton>

          <StyledBadge badgeContent={99}>
            <IconButton>
              <LocalGroceryStoreRoundedIcon
                fontSize="small"
                sx={{ color: "white" }}
              />
            </IconButton>
          </StyledBadge>

          <IconButton>
            <MenuIcon fontSize="small" sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </GridBox>
    </MyToolbar>
  );
};

export default HeaderBar;
