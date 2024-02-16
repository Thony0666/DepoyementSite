import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import { Chip, Grid, Stack, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import InfoIcon from "@mui/icons-material/Info";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { useNavigate } from "react-router-dom";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import { ThemeProvider, createTheme } from "@mui/material/styles";
export default function HeaderBackXS() {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    left: false,
  });
  const theme = createTheme({
    // Define your theme properties here
    shape: {
      borderRadius: 8, // Example value, adjust according to your design
    },
    // Other theme properties...
  });
  const toggleDrawer = (anchor, open, route) => () => {
    if (open) {
      navigate(route); // Naviguer vers la route spécifiée lorsque le tiroir est ouvert
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 200 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Publier", "Gestion Pub", "Commande"].map((text, index) => (
          <>
            <ListItem key={text} disablePadding>
              <ListItemButton
                onClick={toggleDrawer(
                  anchor,
                  true,
                  text === "Publier"
                    ? "/publier"
                    : text === "Commande"
                    ? "/list-commande"
                    : text === "Gestion Pub"
                    ? "/gestion/publication"
                    : ""
                )}
              >
                <ListItemIcon>
                  {text === "Publier" ? (
                    <AllInboxIcon />
                  ) : text === "Commande" ? (
                    <ListAltIcon />
                  ) : text === "Gestion pub" ? (
                    <CategoryIcon />
                  ) : null}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Grid
        p={1}
        container
        justifyContent={"space-between"}
        alignItems={"center"}
        // sx={{ border: "red solid 2px" }}
        bgcolor={"black"}
        style={{
          position: "fixed",
          zIndex: 999,
        }}
      >
        <Stack
          direction={"row"}
          // sx={{ border: "green solid 2px" }}
        >
          {" "}
          {["left"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button
                style={{ color: "#EBCC24" }}
                onClick={toggleDrawer(anchor, true)}
              >
                {<MenuIcon fontSize="large" />}
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
          <Stack direction={"row"} alignItems={"center"}>
            {<HomeWorkIcon sx={{ fontSize: "5vh", color: "#95c732" }} />}
            <Typography
              variant="h4"
              color={"#95c732"}
              fontFamily={"monospace "}
              style={{ fontStyle: "italic" }}
            >
              Lowe's
            </Typography>
          </Stack>
        </Stack>
      </Grid>
    </>
  );
}
