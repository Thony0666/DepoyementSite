import {
  Avatar,
  Box,
  Button,
  Chip,
  Grid,
  Hidden,
  IconButton,
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import TrashButton from "./ButonAction";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import HeaderBack from "./HeaderBack";
import HeaderBackXS from "./HeaderBackXS";
const datas = {
  status: 200,
  nbResult: 25,
  items: [
    {
      id: 1,
      name: "Ciment",
      quantity: 5,
      price: "200000",
      // image: { exampleImage },
    },
    {
      id: 2,
      name: "Fer 6",
      quantity: 3,
      price: "150000",
      // image: { exampleImage },
    },
    {
      id: 3,
      name: "Tole",
      quantity: 2,
      price: "120000",
      // image: { exampleImage },
    },
    {
      id: 4,
      name: "Brique",
      quantity: 8,
      price: "180000",
      // image: { exampleImage },
    },
    {
      id: 5,
      name: "Peinture",
      quantity: 10,
      price: "250000",
      // image: { exampleImage },
    },
    {
      id: 6,
      name: "Plomberie Kit",
      quantity: 2,
      price: "300000",
      // image: { exampleImage },
    },
    {
      id: 7,
      name: "Bois de Construction",
      quantity: 15,
      price: "220000",
      // image: { exampleImage },
    },
    {
      id: 8,
      name: "Fenêtre en Aluminium",
      quantity: 4,
      price: "400000",
      // image: { exampleImage },
    },
    {
      id: 9,
      name: "Isolant Thermique",
      quantity: 5,
      price: "120000",
      // image: { exampleImage },
    },
    {
      id: 10,
      name: "Tuile de Toit",
      quantity: 7,
      price: "350000",
      // image: { exampleImage },
    },
    {
      id: 11,
      name: "Porte en Bois",
      quantity: 3,
      price: "280000",
      // image: { exampleImage },
    },
    {
      id: 12,
      name: "Escalier en Métal",
      quantity: 1,
      price: "600000",
      // image: { exampleImage },
    },
    {
      id: 13,
      name: "Revêtement de Sol",
      quantity: 6,
      price: "180000",
      // image: { exampleImage },
    },
    {
      id: 14,
      name: "Échafaudage",
      quantity: 2,
      price: "350000",
      // image: { exampleImage },
    },
    {
      id: 15,
      name: "Chaudière",
      quantity: 1,
      price: "800000",
      // image: { exampleImage },
    },
    {
      id: 16,
      name: "Fibre de Verre",
      quantity: 4,
      price: "150000",
      // image: { exampleImage },
    },
    {
      id: 17,
      name: "Panneau Solaire",
      quantity: 2,
      price: "1200000",
      // image: { exampleImage },
    },
    {
      id: 18,
      name: "Gravier",
      quantity: 8,
      price: "100000",
      // image: { exampleImage },
    },
    {
      id: 19,
      name: "Câble Électrique",
      quantity: 5,
      price: "250000",
      // image: { exampleImage },
    },
    {
      id: 20,
      name: "Garde-Corps en Aluminium",
      quantity: 3,
      price: "450000",
      // image: { exampleImage },
    },
    // Continue with more products as needed
  ],
};
function ComandeList() {
  // const [datas, setMyData] = useState([]);
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#EBCC24",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  return (
    <>
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
        sx={{
          textAlign: "center",
        }}
      >
        <Grid
          sx={{
            border: "solid white 5px",
            boxShadow: "5px 7px 10px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: 4,
            textAlign: "center",
            justifyContent: "center",
            bgcolor: "#95c732",
            margin: 2,
            overflow: "hidden",
            marginTop: {
              xs: "12vh",
              md: 2,
            },
          }}
        >
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
            paddingX={5}
            sx={{
              width: "100%",
              borderRadius: 4,
            }}
          >
            <Typography
              variant="h2"
              fontFamily={"monospace"}
              fontStyle={"italic"}
            >
              Liste De commande
            </Typography>
          </Grid>

          <Paper
            sx={{
              overflow: "hidden",
              //   border: "solid red 5px",
              borderRadius: "10px",
            }}
          >
            <TableContainer sx={{ maxHeight: "70vh" }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <StyledTableRow>
                    <StyledTableCell>Noms Des Produits</StyledTableCell>
                    <StyledTableCell>Quantites</StyledTableCell>
                    <StyledTableCell>Prix Total</StyledTableCell>
                    <StyledTableCell>Client</StyledTableCell>
                    <StyledTableCell>Action</StyledTableCell>
                  </StyledTableRow>
                </TableHead>
                <TableBody>
                  {datas.items &&
                    datas.items.map((item) => (
                      <>
                        <TableRow key={item.id}>
                          <TableCell>{item.name}</TableCell>
                          <TableCell sx={{ textAlign: "center" }}>
                            {item.quantity}
                          </TableCell>
                          <TableCell>{item.price * item.quantity}</TableCell>
                          <TableCell>
                            {<Avatar src="/broken-image.jpg" />}
                          </TableCell>
                          <TableCell>
                            <TrashButton data={item} />
                          </TableCell>
                        </TableRow>
                      </>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          <Grid container justifyContent={"center"} py={1}>
            <Pagination count={11} color="secondary" sx={{ margin: "auto" }} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default ComandeList;
