import { Button, Chip, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import PersonIcon from "@mui/icons-material/Person";

function HeaderBack() {
  const navigate = useNavigate();
  const location = useLocation();
  const handlePublier = () => {
    navigate("/publier");
  };
  const handleCommande = () => {
    navigate("/list-commande");
  };
  const handleGestion = () => {
    navigate("/gestion/publication");
  };
  return (
    <>
      <Grid
        container
        justifyContent={"space-between"}
        alignItems={"center"}
        bgcolor={"rgba(0, 0, 0)"}
        px={5}
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
          <Stack direction={"row"} mb={1} spacing={3}>
            <Button
              onClick={handlePublier}
              variant="text"
              style={{
                color: "#EBCC24",
                borderBottom:
                  location.pathname === "/publier"
                    ? "2px solid #EBCC24"
                    : "none",
              }}
            >
              Publier
            </Button>
            <Button
              onClick={handleGestion}
              variant="text"
              style={{
                color: "#EBCC24",
                borderBottom:
                  location.pathname === "/gestion/publication"
                    ? "2px solid #EBCC24"
                    : "none",
              }}
            >
              Gestion Pub
            </Button>
           
            <Button
              onClick={handleCommande}
              variant="text"
              style={{
                color: "#EBCC24",
                borderBottom:
                  location.pathname === "/list-commande"
                    ? "2px solid #EBCC24"
                    : "none",
              }}
            >
              listes Commande
            </Button>
          </Stack>
        </Stack>
      </Grid>
    </>
  );
}

export default HeaderBack;
