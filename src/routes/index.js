// import { lazy } from 'react';
import { createBrowserRouter } from "react-router-dom";

// routes
// import AuthenticationRoutes from './AuthenticationRoutes';
// import LoginRoutes from './LoginRoutes';
// import MainRoutes from './MainRoutes';

// project import
// import Loadable from 'ui-component/Loadable';
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Contenu from "./Component/Acceuil";
import Login from "../Component/Login";
import Inscription from "../Component/Inscription";
import Product from "../Component/Product";
import Apropos from "../Component/Apropos";
import ComandeList from "../Component/BackOffice/ListeComande";
import DetailProduit from "../Component/DetailProduit";
// import PreBuildDashBoard from "../Component/teste";
import NewCat from "../Component/BackOffice/NewCat";
import GestionPub from "../Component/BackOffice/GestionPub";
import Contenu from "../Component/Acceuil";
import GestionProduction from "../Component/BackOffice/GestionProduction";
import VoirTous from "../Component/VoirTous";
import DeleteArticleButton from "../Component/teste2";
import UpdateAricle from "../Component/BackOffice/UpdateArticle";

// const PagesLanding : Loadable(lazy(() :> import('views/pages/landing')));

// ::============================|| ROUTING RENDER ||============================== //

const router = createBrowserRouter(
  [
    { path: "/inscription", element: <Inscription /> },
    { path: "/login", element: <Login /> },
    { path: "/", element: <Contenu /> },
    { path: "/produit", element: <Product /> },
    { path: "/apropos", element: <Apropos /> },
    { path: "/produit/:id", element: <DetailProduit /> },
    { path: "/produit/categorie/:id/:id", element: <DetailProduit /> },
    { path: "/produit/:id/categorie/:idCat", element: <DetailProduit /> },
    {
      path: "/produit/categorie/:idCat/produit/:id",
      element: <DetailProduit />,
    },
    { path: "/produit/categorie/:id", element: <VoirTous /> },
    { path: "/publier", element: <GestionProduction /> },
    { path: "/gestion/publication", element: <GestionPub /> },
    { path: "/gestion/publication/:idArticle", element: <GestionPub /> },
    { path: "/list-commande", element: <ComandeList /> },
    { path: "/gestion/publication/update/:idartcl", element: <UpdateAricle /> },
    { path: "/test", element: <NewCat /> },
    { path: "/test2", element: <DeleteArticleButton /> },
    // { path: '/landing', element: <PagesLanding /> }
  ]
  // {
  //     basename: process.env.REACT_APP_BASE_NAME
  // }
);

export default router;
