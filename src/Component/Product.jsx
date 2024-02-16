import React, { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import HeaderXS from "./Header/HeaderXS";
import HeaderXL from "./Header/HeaderXL";
import bannerImage from "../assets/image/typeMedia/BgImage/BgCity5.jpg";
import ContentCardFront from "./ContentCards";
import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";

import {
  Box,
  Button,
  Grid,
  Hidden,
  IconButton,
  Pagination,
  Stack,
  Tabs,
  Typography,
} from "@mui/material";
import axios from "axios";
import Waiter from "./Waiter";
import { Link } from "react-router-dom";
// import HeaderXS from "./Header/HeaderXS";
// const datas = {
//   status: 200,
//   nbResult: 25,
//   items: [
//     {
//       id: 1,
//       name: "Ciment",
//       quantity: 5,
//       price: "200000",
//       // image: { exampleImage },
//     },
//     {
//       id: 2,
//       name: "Fer 6",
//       quantity: 3,
//       price: "150000",
//       // image: { exampleImage },
//     },
//     {
//       id: 3,
//       name: "Tole",
//       quantity: 2,
//       price: "120000",
//       // image: { exampleImage },
//     },
//     {
//       id: 4,
//       name: "Brique",
//       quantity: 8,
//       price: "180000",
//       // image: { exampleImage },
//     },
//     {
//       id: 5,
//       name: "Peinture",
//       quantity: 10,
//       price: "250000",
//       // image: { exampleImage },
//     },
//     {
//       id: 6,
//       name: "Plomberie Kit",
//       quantity: 2,
//       price: "300000",
//       // image: { exampleImage },
//     },
//     {
//       id: 7,
//       name: "Bois de Construction",
//       quantity: 15,
//       price: "220000",
//       // image: { exampleImage },
//     },
//     {
//       id: 8,
//       name: "Fenêtre en Aluminium",
//       quantity: 4,
//       price: "400000",
//       // image: { exampleImage },
//     },
//     {
//       id: 9,
//       name: "Isolant Thermique",
//       quantity: 5,
//       price: "120000",
//       // image: { exampleImage },
//     },
//     {
//       id: 10,
//       name: "Tuile de Toit",
//       quantity: 7,
//       price: "350000",
//       // image: { exampleImage },
//     },
//     {
//       id: 11,
//       name: "Porte en Bois",
//       quantity: 3,
//       price: "280000",
//       // image: { exampleImage },
//     },
//     {
//       id: 12,
//       name: "Escalier en Métal",
//       quantity: 1,
//       price: "600000",
//       // image: { exampleImage },
//     },
//     {
//       id: 13,
//       name: "Revêtement de Sol",
//       quantity: 6,
//       price: "180000",
//       // image: { exampleImage },
//     },
//     {
//       id: 14,
//       name: "Échafaudage",
//       quantity: 2,
//       price: "350000",
//       // image: { exampleImage },
//     },
//     {
//       id: 15,
//       name: "Chaudière",
//       quantity: 1,
//       price: "800000",
//       // image: { exampleImage },
//     },
//     {
//       id: 16,
//       name: "Fibre de Verre",
//       quantity: 4,
//       price: "150000",
//       // image: { exampleImage },
//     },
//     {
//       id: 17,
//       name: "Panneau Solaire",
//       quantity: 2,
//       price: "1200000",
//       // image: { exampleImage },
//     },
//     {
//       id: 18,
//       name: "Gravier",
//       quantity: 8,
//       price: "100000",
//       // image: { exampleImage },
//     },
//     {
//       id: 19,
//       name: "Câble Électrique",
//       quantity: 5,
//       price: "250000",
//       // image: { exampleImage },
//     },
//     {
//       id: 20,
//       name: "Garde-Corps en Aluminium",
//       quantity: 3,
//       price: "450000",
//       // image: { exampleImage },
//     },
//     // Continue with more products as needed
//   ],
// };
function Product() {
  const [datas, setMyDatas] = useState([]);
  const parallaxRef = useRef(null);
  const [isLoading, setLoading] = useState(false);

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
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/category/article")
      .then((response) => {
        setMyDatas(response.data.categories);
        console.log("okey azo articles be");
        console.log(response);
        setLoading(true);
      })
      .catch((error) => {
        console.error("tsy mandeha url articles");
        console.error(error);
      });
  }, []);
  const [largeurEcran, setLargeurEcran] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setLargeurEcran(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleClick = () => {
    console.log(datas.id);
  };
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/api/categories/") // Endpoint pour récupérer les catégories
  //     .then((response) => {
  //       setCat(response.data.categories);
  //     })
  //     .catch((error) => {
  //       console.error("Erreur lors de la récupération des catégories");
  //       console.error(error);
  //     });
  // }, []);
  // const categories = {};
  // datas.forEach((datas) => {
  //   if (!categories[datas.id]) {
  //     categories[datas.id] = [];
  //   }
  //   categories[datas.id].push(datas);
  // });
  return (
    <>
      <Waiter loadingState={!isLoading} />
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
          backgroundPosition: "center",
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
                Produits Lowe's
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
      {/* <Grid container my={1}>
        <Grid sx={{ p: 3 }} width={"100%"}>
          <Stack sx={{ width: "100%" }} direction={"column"}>
            {Object.keys(categories).map((categoryId) => (
              <Box justifyContent={"center"} alignItems={"center"}>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  key={categoryId}
                  boxShadow={10}
                  marginY={2}
                  sx={{
                    width: "100%",
                    borderRadius: "8px",
                    backgroundColor: "white",
                  }}
                >
                  {" "}
                  <Box>
                    <Typography
                      sx={{
                        textAlign: {
                          xs: "center",
                        },
                      }}
                      variant="h4"
                      color={"#95c732"}
                      paddingX={6}
                    >
                      Categorie Name
                    </Typography>
                  </Box>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent={"center"}
                  >
                    <Box
                      display={"flex"}
                      margin="auto"
                      flexDirection={"row"}
                      px={1}
                      sx={{
                        overflowX: "hidden",
                        "&::-webkit-scrollbar": {
                          width: 0,
                        },
                      }}
                    >
                      <Tabs variant="scrollable">
                        {categories[categoryId].map((product) => (
                          <Box key={product.id}>
                            <Box
                              sx={{
                                minWidth: { xs: 295, sm: 350 },
                                p: { xs: 1, sm: 2 },
                                width: "20vw",
                                borderRadius: 2,
                                overflow: "hidden",
                              }}
                            >
                              <ContentCardFront datas={product} />
                            </Box>
                          </Box>
                        ))}
                      </Tabs>
                    </Box>
                  </Stack>
                  <Box sx={{ mb: 2, minwidth: "20%", marginLeft: "auto" }}>
                    <Button
                      color="secondary"
                      sx={{
                        mr: 5,
                        backgroundImage:
                          "linear-gradient(120deg, #95c732 50%, #EBCC24 50%)",
                      }}
                      variant="contained"
                    >
                      Voir Tous
                    </Button>
                  </Box>
                </Box>
              </Box>
            ))}
          </Stack>
        </Grid>
      </Grid> */}
      <Grid container my={1}>
        <Stack sx={{ width: "100%" }} direction={"column"}>
          {datas
            .filter((item) => item.articles.length > 0) // Filtrer les catégories avec des articles non vides
            .map((item) => (
              <Box
                
                key={item.id}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  boxShadow={10}
                  marginY={2}
                  py={2}
                  sx={{
                    width: "100%",
                    borderRadius: "8px",
                    backgroundColor: "white",
                  }}
                >
                  {" "}
                  <Box>
                    <Typography
                      sx={{
                        textAlign: {
                          xs: "Left",
                        },
                      }}
                      variant="h4"
                      color={"#95c732"}
                      fontWeight={"bold"}
                      paddingLeft={13}
                    >
                      {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                    </Typography>
                  </Box>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent={"center"}
                  >
                    <Box
                      display={"flex"}
                      margin="auto"
                      flexDirection={"row"}
                      px={1}
                      sx={{
                        overflowX: "hidden",
                        "&::-webkit-scrollbar": {
                          width: 0,
                        },
                      }}
                    >
                      <Tabs variant="scrollable" >
                        {item.articles &&
                          item.articles.map((e) => (
                            <Box key={e.id}>
                              <Box
                                sx={{
                                  minWidth: { xs: 295, sm: 350 },
                                  p: { xs: 1, sm: 2 },
                                  width: "20vw",
                                  borderRadius: 2,
                                  overflow: "hidden",
                                }}
                              >
                                <ContentCardFront
                                  articles={e}
                                  dataId={item.id}
                                />
                              </Box>
                            </Box>
                          ))}
                      </Tabs>
                    </Box>
                  </Stack>
                  <Box sx={{ mt: 2, minwidth: "20%", marginLeft: "auto" }}>
                    <Link
                      to={`categorie/${item.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        onClick={handleClick}
                        color="secondary"
                        sx={{
                          mr: 5,
                          backgroundImage:
                            "linear-gradient(120deg, #95c732 50%, #EBCC24 50%)",
                        }}
                        variant="contained"
                      >
                        Voir Tous
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Box>
            ))}
        </Stack>
      </Grid>
      <Footer />
    </>
  );
}

export default Product;
