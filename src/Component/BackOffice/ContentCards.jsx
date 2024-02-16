import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EditIcon from "@mui/icons-material/Edit";
import Backthumb from "../../assets/image/typeMedia/BgImage/BgCity5.jpg";
import Button from "@mui/material/Button";
import {
  Box,
  CardActionArea,
  Grid,
  IconButton,
  Modal,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: 4,
  p: 4,
};
const ContentCardBack = (props) => {
  const { idArticle } = useParams();
  const data = props.datas;
  const click = props.click;
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    navigate("/gestion/publication");
  };
  console.log("ito ny data Content Card Front");
  console.log(data);
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
  // const handelClick = () => {
  //  navigate('/update/article')
  // };
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
  useEffect(() => {
    if (
      location.pathname === `/gestion/publication/${idArticle}/${idArticle}`
    ) {
      navigate("/gestion/publication");
    }
  }, [location.pathname]);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid
            color={"red"}
            container
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography
              mr={1}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              {" "}
              Attention{" "}
            </Typography>
            <ReportProblemOutlinedIcon />
          </Grid>

          <Typography
            textAlign={"center"}
            id="modal-modal-description"
            sx={{ my: 1 }}
          >
            Vous êtes sur pour efffacer definitivement : <br />
            <span style={{ fontWeight: "bold" }}>{data.name}</span>
          </Typography>
          <Stack spacing={3} direction={"row"} justifyContent={"flex-end"}>
            {/* <Box spacing={2} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', p: 1 }}> */}
            <Button variant="text" onClick={handleClose}>
              Annule
            </Button>
            <Button variant="text" color="error" onClick={click}>
              Delete
            </Button>
            {/* </Box> */}
          </Stack>
        </Box>
      </Modal>
      <Card
        // onClick={handelClick}
        sx={{
          // border: "solid grey 0.px ",
          p: 1,
          maxWidth: {
            xs: 230, // Hauteur pour xs
            md: 250, // Hauteur pour md
          },
          minWidth: {
            xs: 230, // Hauteur pour xs
            md: 250, // Hauteur pour md
          },
          maxHeight: 250,
          display: "flex",
          flexDirection: "column",
          boxShadow: "0px 0px 5px 0.001px rgba(0,0,0,0.75)",
        }}
      >
        <Box position={"relative"}>
          <CardMedia
            component="img"
            height="150"
            image={imageSrc}
            alt="Image"
          />
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
              // backgroundColor: "#EBCC24",
            }}
          >
            <Grid
              container
              sx={{ backgroundColor: "#EBCC24" }}
              mx={1}
              alignItems={"center"}
              borderRadius={1}
            >
              <Link to={`update/${data.id}`} style={{ textDecoration: "none" }}>
                <IconButton>
                  <EditIcon
                    style={{ color: "#000", zIndex: 1, fontSize: "small" }}
                  />
                </IconButton>
              </Link>
            </Grid>
            <Grid
              container
              sx={{ backgroundColor: "#EBCC24" }}
              mx={1}
              alignItems={"center"}
              borderRadius={1}
            >
              <Link to={`${data.id}`} style={{ textDecoration: "none" }}>
                <IconButton onClick={handleOpen}>
                  <DeleteIcon
                    style={{ color: "#000", zIndex: 1, fontSize: "small" }}
                  />
                </IconButton>
              </Link>
            </Grid>
            {/* <IconImage size={25} style={{ color: "#000", zIndex: 1 }} /> */}
          </Box>
        </Box>

        <CardContent>
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
          <Grid container justifyContent={"flex-end"}>
            {/* <Typography variant="h6" color="inherit">
              Stock:{" "}
              <span style={{ fontSize: "20px", fontWeight: "bolder" }}>
                {data.quantity}
              </span>
            </Typography> */}
            {/* <Button
              variant="contained"
              sx={{ backgroundColor: "#EBCC24", marginTop: 1 }}
            >
              Acheter
              <MonetizationOnIcon />
            </Button> */}
          </Grid>
        </CardContent>
        {/* </CardActionArea> */}
      </Card>
    </>
  );
};

export default ContentCardBack;
