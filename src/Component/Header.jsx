import { Button, Chip, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import PersonIcon from "@mui/icons-material/Person";

function Header(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const handleSingIn = () => {
    navigate("/inscription");
  };
  const handleAcceuil = () => {
    navigate("/");
  };
  const handleProduct = () => {
    navigate("/produit");
  };
  const handleApropos = () => {
    navigate("/apropos");
  };
  const Search = styled("div")(({ theme }) => ({
    color: "#EBCC24",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    border: "#EBCC24 solid 1px",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "#EBCC24",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <>
      <Grid
        container
        justifyContent={"space-between"}
        alignItems={"center"}
        bgcolor={"rgba(0, 0, 0)"}
        px={5}
        style={{
          position: "fixed",
          zIndex: 999,
        }}
      >
        <Stack
          direction={"row"}
          rowSpacing={8}
          alignItems={"flex-end"}
          justifyContent={"center"}
        >
          <Stack direction={"row"} mr={11} alignItems={"center"}>
            {<HomeWorkIcon sx={{ fontSize: "8vh", color: "#95c732", ml: 2 }} />}
            <Typography
              variant="h2"
              color={"#95c732"}
              fontFamily={"monospace "}
              style={{ fontStyle: "italic" }}
            >
              Lowe's
            </Typography>
          </Stack>
          <Stack direction={"row"} mb={1}>
            <Button
              onClick={handleAcceuil}
              variant="text"
              style={{
                color: "#EBCC24",
                borderBottom:
                  location.pathname === "/" ? "2px solid #EBCC24" : "none",
              }}
            >
              Acceuil
            </Button>
            <Button
              onClick={handleProduct}
              variant="text"
              style={{
                color: "#EBCC24",
                borderBottom:
                  location.pathname === "/produit"
                    ? "2px solid #EBCC24"
                    : "none",
              }}
            >
              Produit
            </Button>
            <Button
              onClick={handleApropos}
              variant="text"
              style={{
                color: "#EBCC24",
                borderBottom:
                  location.pathname === "/apropos"
                    ? "2px solid #EBCC24"
                    : "none",
              }}
            >
              A propos
            </Button>
          </Stack>
        </Stack>

        <Stack direction="row" spacing={1}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Button onClick={handleSingIn}>
            <Chip
              label="S'inscrit"
              variant="filled"
              sx={{
                backgroundImage:
                  "linear-gradient(120deg, #EBCC24 50%, #95c732 50%)",
              }}
              icon={
                <PersonIcon
                  style={{
                    border: "2px solid grey",
                    borderRadius: "50%",
                    background: "white",
                  }}
                />
              }
              style={{ backgroundColor: "#EBCC24" }}
            />
          </Button>
        </Stack>
      </Grid>
    </>
  );
}

export default Header;
