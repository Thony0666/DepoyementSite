import { Button, Chip, Grid, Link, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import PersonIcon from "@mui/icons-material/Person";
import SearchButon from "../SearchButon";
import { useAuthTemp } from "../../util/auth";
import ResponsiveAppBar from "../Encho";

function HeaderXl() {
  const auth = useAuthTemp();
  const userFront = auth.getUserFront();
  const idUser = userFront ? userFront.id : null;
  // console.log('this is the userBack user', userFront.firstName);
  console.log("this is the userBack user", idUser);

  const navigate = useNavigate();
  const location = useLocation();
  const handleSingUp = () => {
    navigate("/inscription");
  };
  const handleSingIn = () => {
    navigate("/login");
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
  const theme = createTheme({
    // Define your theme properties here
    shape: {
      borderRadius: 8, // Example value, adjust according to your design
    },
    // Other theme properties...
  });
  // const handleLogout = async () => {
  //   try {
  //     auth.logoutUserFront();
  //     navigate("/login");
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const [bgColor, setBgColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop === 0) {
        setBgColor("transparent");
      } else {
        setBgColor("#000000");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
    
      <Grid
        borderTop={"4px solid #EBCC24"}
        container
        justifyContent={"space-between"}
        alignItems={"center"}
        bgcolor={bgColor}
        px={5}
        style={{
          position: "fixed",
          zIndex: 999,
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"flex-end"}
          justifyContent={"center"}
          //   border={"green solid 2px"}
        >
          <Stack
            direction={"row"}
            mr={6}
            alignItems={"center"}
            border={"white 2px solid"}
            p={0.5}
            my={1}
            borderRadius={2}
          >
            {<HomeWorkIcon sx={{ fontSize: "5vh", color: "white" }} />}
            <Typography
              variant="h4"
              color={"white"}
              fontFamily={"monospace "}
              style={{ fontStyle: "italic" }}
            >
              Lowe's
            </Typography>
          </Stack>
          <Stack direction={"row"} mb={2}>
            <Button
              onClick={handleAcceuil}
              variant="text"
              style={{
                color: "white",
                borderBottom:
                  location.pathname === "/" ? "2px solid white" : "none",
              }}
            >
              Acceuil
            </Button>
            <Button
              onClick={handleProduct}
              variant="text"
              style={{
                color: "white",
                borderBottom:
                  location.pathname === "/produit" ? "2px solid white" : "none",
              }}
            >
              Produit
            </Button>
            <Button
              onClick={handleApropos}
              variant="text"
              style={{
                color: "white",
                borderBottom:
                  location.pathname === "/apropos" ? "2px solid white" : "none",
              }}
            >
              A propos
            </Button>
          </Stack>
        </Stack>

        <Stack
          direction="row"
          spacing={5}
          alignItems={"center"}
          //   border={"solid red 2px"}
        >
          <ThemeProvider theme={theme}>
            <SearchButon />
          </ThemeProvider>
          {userFront !== null ? (
            <>
              <ResponsiveAppBar data={{ userFront, auth }} />
            </>
          ) : (
            <Grid>
              <Button
                onClick={handleSingUp}
                sx={{ color: "#95c732" }}
                variant="text"
                startIcon={<PersonIcon />}
              >
                Sign up
              </Button>

              <Button
                onClick={handleSingIn}
                variant="contained"
                style={{
                  justifyContent: "center",
                  // width: "30%",
                  margin: "auto",
                  borderRadius: 8,
                  color: "#95c732",
                  backgroundColor: "white",
                }}
                startIcon={<LoginIcon />}
              >
                Sign in
              </Button>

              {/* <Button onClick={handleSingIn}>
                <Chip
                  label="S'inscrit"
                  variant="filled"
                  sx={{
                    backgroundImage:
                      "linear-gradient(120deg, white 50%, white 50%)",
                  }}
                  icon={
                    <PersonIcon
                      style={{
                        border: "2px solid grey",
                        borderRadius: "50%",
                        background: "#EBCC24",
                      }}
                    />
                  }
                  style={{ backgroundColor: "#EBCC24" }}
                />
              </Button> */}
            </Grid>
          )}
        </Stack>
      </Grid>
    </>
  );
}

export default HeaderXl;
