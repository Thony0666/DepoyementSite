import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Backthumb from "../assets/image/banniere.jpg";
import imgDesc2 from "../assets/image/FontLoginMagasin.webp";
import imgDesc1 from "../assets/image/banniere.jpg";
import Sound from "../assets/image/typeMedia/audio.jpg";
import Article from "../assets/image/typeMedia/article.jpg";
import Button from "@mui/material/Button";
import { Box, CardActionArea, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Waiter from "./Waiter";

const CardAnnex = (props) => {
  const data = props.datas;
  const dataId = props.annex;
  const onClick = props.click;
  const navigate = useNavigate();
  // const [isLoad, setload] = useState(true);

  // console.log("ito ny data Content Card Front");
  //   console.log(dataId);
  let imageSrc;
  let IconImage;

  // switch (data.image) {
  //   case data.image != null:
  //     imageSrc = data.image;
  //     IconImage = AddShoppingCartIcon;
  //     break;
  //   default:
  //     imageSrc = Backthumb;
  //     IconImage = AddShoppingCartIcon;
  // }
  if (data.image !== null) {
    imageSrc = data.image;
    IconImage = AddShoppingCartIcon;
  } else {
    imageSrc = Backthumb;
    IconImage = AddShoppingCartIcon;
  }
  // function formatDate(dateString) {
  //   const months = [
  //     "Janvier",
  //     "Février",
  //     "Mars",
  //     "Avril",
  //     "Mai",
  //     "Juin",
  //     "Juillet",
  //     "Août",
  //     "Septembre",
  //     "Octobre",
  //     "Novembre",
  //     "Décembre",
  //   ];
  //   const date = new Date(dateString);
  //   const day = date.getDate();
  //   const monthIndex = date.getMonth();
  //   const year = date.getFullYear();

  //   return `${day} ${months[monthIndex]} ${year}`;
  // }
  const handelclick = () => {
    navigate(`/produit/${data.id}/categorie/${dataId}`);
    onClick();
  };
  return (
    <>
      {/* <Waiter loadingState={!isLoad} /> */}
      <Card
        sx={{
          // border: "solid grey 0.px ",
          p: 1,
          maxWidth: {
            xs: 600, // Hauteur pour xs
            md: 250, // Hauteur pour md
          },
          maxHeight: 250,
          display: "flex",
          flexDirection: "column",
          boxShadow: "0px 0px 5px 0.001px rgba(0,0,0,0.75)",
        }}
      >
        <Grid position={"relative"}>
          <Box
            style={{
              width: "auto",
              height: "auto",
              padding: "5px",
              position: "absolute",
              top: 8,
              right: 8,
              display: "flex",
              justifyContent: "center",
              aligndata: "center",
              borderRadius: "50%",
              backgroundColor: "#EBCC24",
              zIndex: 1,
            }}
          >
            <IconImage size={25} style={{ color: "#000", zIndex: 9999 }} />
          </Box>
          <CardActionArea onClick={handelclick}>
            <Box>
              <CardMedia
                component="img"
                height="150"
                image={imageSrc}
                alt="Image"
              />
            </Box>

            <CardContent>
              <Box
                style={{
                  width: "auto",
                  height: "auto",
                  padding: "5px",
                  position: "absolute",
                  top: 8,
                  right: 8,
                  display: "flex",
                  justifyContent: "center",
                  aligndata: "center",
                  borderRadius: "50%",
                  backgroundColor: "#EBCC24",
                  zIndex: 1,
                }}
              >
                <IconImage size={25} style={{ color: "#000", zIndex: 9999 }} />
              </Box>

              <Grid
                container
                direction={"column"}
                justifyContent={"flex-start"}
                aligndata={"flex-start"}
                borderRadius={2}
                p={1}
                sx={{
                  backgroundImage:
                    "linear-gradient(120deg, #EBCC24 50%, #95c732 50%)",
                }}
              >
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    textDecoration: "none",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    maxWidth: "100%", // Assure que le texte ne dépasse pas la largeur du conteneur
                  }}
                >
                  {data.name}
                </Typography>
                <Typography variant="h6">
                  <Grid
                    container
                    justifyContent={"flex-start"}
                    alignItems={"center"}
                  >
                    <AttachMoneyIcon /> :
                    <span style={{ fontSize: "14px", color: "blue" }}>
                      {data.unit_price}
                      ,00MGA
                    </span>
                  </Grid>
                </Typography>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Grid>
      </Card>
    </>
  );
};

export default CardAnnex;
