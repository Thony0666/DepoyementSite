import { Box, Grid, Hidden, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import ContentCardFront from "../ContentCards";
import ContentCardBack from "./ContentCards";
import Waiter from "./Waiter";
import HeaderXS from "./Header/HeaderXS";
import HeaderXL from "./Header/HeaderXL";
import { useParams } from "react-router-dom";
import ContentCardFront from "./ContentCards";
import ContentCardVoirTous from "./ContentCardVoirTous";

function VoirTous() {
  const [datas, setMyDatas] = useState([]);
  const [largeurEcran, setLargeurEcran] = useState(window.innerWidth);
  //   const [page, setPage] = useState([]);
  const [isLoad, setload] = useState(true);
  //   const [pageNumber, setPageNumber] = useState(1);
  const { id } = useParams();
  // Fonction pour mettre à jour le numéro de page
  //   const handlePageChange = (event, value) => {
  //     setPageNumber(value);
  //     setload(true);
  //   };
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/category/article/${id}`)
      .then((response) => {
        setMyDatas(response.data.category.articles);
        // setPage(response.data.pagination);
        console.log("Données des articles récupérées avec succèsfasdfasd.");
        console.log(response);
        setload(false);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données des articles."
        );
        console.error(error);
      });
  }, [isLoad]);

  useEffect(() => {
    const handleResize = () => {
      setLargeurEcran(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Waiter loadingState={isLoad} />
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

      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        borderTop={"black solid 10vh"}
        minHeight={"75vh"}
        p={3}
      >
        {datas &&
          datas.map((e) => (
            <Box key={e.id} >
              <Grid
                container
                justifyContent={"center"}
                sx={{
                  minWidth: { xs: 300, sm: 300 },
                  p: { xs: 1, sm: 2 },
                  borderRadius: 2,
                  overflow: "hidden",
                  // border: "red solid 2px",
                }}
              >
                <ContentCardVoirTous data={e} />
              </Grid>
            </Box>
          ))}
      </Grid>
    </>
  );
}

export default VoirTous;
