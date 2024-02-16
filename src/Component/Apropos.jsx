import React, { useEffect, useRef, useState } from "react";
// import Header from "./Header";
import Footer from "./Footer";
import imgDesc2 from "../assets/image/typeMedia/apropos.jpg";
import {
  Box,
  Grid,
  Hidden,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import HeaderXS from "./Header/HeaderXS";
import HeaderXL from "./Header/HeaderXL";
import bannerImage from "../assets/image/typeMedia/BgImage/BGCity4.jpg";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
function Apropos() {
  const [largeurEcran, setLargeurEcran] = useState(window.innerWidth);
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setLargeurEcran(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // const [cat, setCat] = useState([]);
  // const parallaxRef2 = useRef(null);
  // const parallaxRef3 = useRef(null);

  useEffect(() => {
    const parallaxEffect = () => {
      const scrolled = window.scrollY;
      const parallaxValue = scrolled * 0.7; // Ajustez cette valeur pour contrôler l'effet de parallaxe
      parallaxRef.current.style.backgroundPositionY = `${parallaxValue}px`;
      // parallaxRef2.current.style.backgroundPositionY = `${parallaxValue}px`; // Ajoutez les références manquantes
      // parallaxRef3.current.style.backgroundPositionY = `${parallaxValue}px`; // Ajoutez les références manquantes
    };

    window.addEventListener("scroll", parallaxEffect);

    return () => {
      window.removeEventListener("scroll", parallaxEffect);
    };
  }, []);
  return (
    <>
      <Box>
        {largeurEcran < 900.99 ? (
          <Box sx={{ display: "none" }}>
            <HeaderXS />
          </Box>
        ) : (
          <Box>
            <HeaderXL />
          </Box>
        )}
        {largeurEcran > 900.99 ? (
          <Box sx={{ display: "none" }}>
            <HeaderXL />
          </Box>
        ) : (
          <Box>
            <HeaderXS />
          </Box>
        )}
      </Box>
      <Box
        ref={parallaxRef}
        sx={{
          textAlign: "center",
          width: "100%",
          height: {
            xs: "72vh",
            md: "100vh",
          },
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          boxShadow: " inset 0px 65px 30px -7px rgba(0,0,0,0.51);",
          overflow: "hidden",
        }}
      >
        {/* <Hidden smDown>
            <img
              src={bannerImage}
              alt="sary-fandrakofana"
              style={{ width: "100%", height: "100vh" }}
            />
          </Hidden> */}
        <Grid
          // border={"red solid 2px"}
          height={"100%"}
          container
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            backdropFilter: "blur(1px)", // Appliquer un flou de 5px à l'arrière-plan
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Couleur de fond avec transparence pour l'effet de flou
          }}
        >
          <Stack
            width={"100%"}
            height={"100%"}
            direction={"column"}
            justifyContent={"center"}
            // border={"red solid 2px"}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "7vw", // Hauteur pour xs
                  md: "3vw", // Hauteur pour md
                },
                textAlign: {
                  xs: "center", // Hauteur pour xs
                  md: "lef", // Hauteur pour md
                },
              }}
              color={"white"}
              variant="h8"
              fontFamily={"monospace"}
              fontWeight={"bold"}
              fontStyle={"italic"}
            >
              {/* Bienvenue chez <br /> */}
              <span
                style={{
                  fontFamily: "sans-serif",
                  fontStyle: "normal",
                  fontSize: "12vh",
                  color: "#EBCC24",
                }}
              >
                À propos
              </span>
            </Typography>
            <Grid
              bottom={"10vh"}
              position={"absolute"}
              container
              justifyContent={"center"}
            >
              <IconButton
                variant="contained"
                sx={{
                  // border: "2px solid #ffffff",
                  color: "#ffffff",
                }}
              >
                <Box
                  border={"#95c732 2px solid"}
                  p={1}
                  borderRadius={2}
                  bgcolor={"white"}
                >
                  <KeyboardDoubleArrowDownOutlinedIcon
                    sx={{
                      color: "#95c732",
                      animation: "moveUpDown 2s ease-in-out infinite",
                      "@keyframes moveUpDown": {
                        "0%, 100%": {
                          transform: "translateY(-1.2vh)",
                        },
                        "50%": {
                          transform: "translateY(1.2vh)",
                        },
                      },
                    }}
                    fontSize="large"
                  />
                </Box>
              </IconButton>
            </Grid>
          </Stack>
        </Grid>
        {/* <Box
            height={"100vh"}
            sx={{ border: "red solid 3px" }}
            position={"absolute"}
            top={10}
            zIndex={58}
          ></Box> */}
      </Box>
      <Grid
        container
        justifyContent={"center"}
        overflow={"hidden"}
        width={"100%"}
        px={2}
      >
        <Grid
          display={"flex"}
          flexDirection={"column"}
          boxShadow={10}
          paddingX={1}
          py={3}
          my={3}
          sx={{
            width: "100%",
            borderRadius: "8px",
            bgcolor: "#95c732",
          }}
        >
          <Typography paddingLeft={8} variant="h3" color={"white"}>
            Notre parcours
          </Typography>
          <Stack
            direction={{
              xs: "column",
              md: "column",
              lg: "row",
            }}
            justifyContent={{
              xs: "flex-start",
              md: "flex-start",
              lg: "space-around",
            }}
            alignItems={{ xs: "flex-start", md: "flex-start", lg: "center" }}
          >
            <Grid
              borderRadius={5}
              container
              textAlign={"center"}
              alignItems={"center"}
              justifyItems={"center"}
              sx={{
                width: "30vw",
                height: "35vw",
                overflow: "hidden",
              }}
            >
              <img src={imgDesc2} alt="photoDesc" style={{ width: "100%" }} />
            </Grid>
            <Grid
              padding={{ xs: 1, md: 3, lg: 6 }}
              alignItems={"center"}
              width={{ xs: "100", md: "100%", lg: "50%" }}
            >
              <Typography variant="h6" textAlign={"justify"}>
                <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>
                  Notre Histoire
                </span>
                <br />
                Bienvenue chez LOWE'S - votre partenaire de confiance pour tous
                vos besoins en matériel de construction de bâtiment. Notre
                parcours a commencé il y a 25 années avec une vision claire :
                faciliter l'accès aux meilleurs matériaux de construction pour
                tous les entrepreneurs et bricoleurs passionnés.
                <br />
                <br />
                <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>
                  Les Débuts Modestes
                </span>
                <br />
                Notre fondateur, RASTA, a lancé l'entreprise dans un petit
                garage avec une passion ardente pour la construction et le désir
                de créer une ressource inestimable pour la communauté locale. À
                ses débuts, le stock se limitait à quelques articles de base,
                mais la détermination à fournir une qualité exceptionnelle était
                déjà bien ancrée.
                <br />
                <br />
                Rejoignez-nous dans notre voyage continu pour construire un
                avenir solide et prospère. Merci de faire partie de l'histoire
                de LOWE'S.
              </Typography>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default Apropos;
