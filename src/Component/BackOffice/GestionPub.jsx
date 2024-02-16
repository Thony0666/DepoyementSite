import {
  Box,
  Button,
  Grid,
  Hidden,
  Modal,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import HeaderBack from "./HeaderBack";
import HeaderBackXS from "./HeaderBackXS";
import axios from "axios";
// import ContentCardFront from "../ContentCards";
import ContentCardBack from "./ContentCards";
import Waiter from "./Waiter";
import { useNavigate, useParams } from "react-router-dom";

function GestionPub() {
  const { idArticle } = useParams();
  const [datas, setMyDatas] = useState([]);
  const [page, setPage] = useState([]);
  const navigate = useNavigate();
  const [isLoad, setload] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  // Fonction pour mettre à jour le numéro de page
  const handlePageChange = (event, value) => {
    setPageNumber(value);
    setload(true);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/article/all?page=${pageNumber}`)
      .then((response) => {
        setMyDatas(response.data.articles);
        setPage(response.data.pagination);
        console.log("Données des articles récupérées avec succès.");
        console.log(response);
        setload(false);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données des articles."
        );
        console.error(error);
      });
  }, [pageNumber, isLoad]);
  const deleteArticle = () => {
    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `http://localhost:8000/api/article/delete/${idArticle}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        alert("L'article a été supprimé avec succès !");
      })
      .catch((error) => {
        console.error(error);
        alert(
          "Une erreur s'est produite lors de la suppression de l'article. Veuillez réessayer plus tard."
        );
      });
  };
  return (
    <>
      <Waiter loadingState={isLoad} />
      <Grid>
        <Box position={"fixed"} width={"100%"} zIndex={222}>
          <Hidden mdDown>
            <HeaderBack />
          </Hidden>
          <Hidden mdUp>
            <HeaderBackXS />
          </Hidden>
          <Hidden xsUp>
            <HeaderBackXS />
          </Hidden>
        </Box>
      </Grid>
      <Box>
        <Hidden mdDown>
          <HeaderBack />
        </Hidden>
        <Hidden mdUp>
          <HeaderBackXS />
        </Hidden>
        <Hidden xsUp>
          <HeaderBackXS />
        </Hidden>
      </Box>

      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        // border={"red solid 2px"}
        minHeight={"75vh"}
      >
        {datas &&
          datas.map((e) => (
            <Box key={e.id}>
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
                <ContentCardBack datas={e} click={deleteArticle} />
              </Grid>
            </Box>
          ))}
      </Grid>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        p={2}
        sx={{
          backdropFilter: "blur(1px)", // Appliquer un flou de 5px à l'arrière-plan
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Couleur de fond avec transparence pour l'effet de flou
        }}
      >
        <Pagination
          showFirstButton
          showLastButton
          size="large"
          shape="rounded"
          sx={{ bgcolor: "white", p: 1, borderRadius: 3 }}
          count={page.last_page}
          onChange={handlePageChange} // Appeler la fonction handlePageChange lorsqu'une nouvelle page est sélectionnée
        />
      </Grid>
    </>
  );
}

export default GestionPub;
