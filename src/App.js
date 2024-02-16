// // App.js
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Contenu from "./Component/Acceuil";
// import Login from "./Component/Login";
// import Inscription from "./Component/Inscription";
// import Product from "./Component/Product";
// import Apropos from "./Component/Apropos";
// import GestionProduction from "./Component/BackOffice/GestionProduction";
// import ComandeList from "./Component/BackOffice/ListeComande";
// import DetailProduit from "./Component/DetailProduit";
// // import PreBuildDashBoard from "./Component/teste";
// import MyCarousel from "./Component/teste";
// import NewCat from "./Component/BackOffice/NewCat";
// import GestionPub from "./Component/BackOffice/GestionPub";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Vos routes existantes */}
//         <Route path="/" element={<Contenu />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/inscription" element={<Inscription />} />
//         <Route path="/produit" element={<Product />} />
//         <Route path="/produit/:id" element={<DetailProduit />} />
//         <Route path="/apropos" element={<Apropos />} />
//         <Route path="/publier" element={<GestionProduction />} />
//         <Route path="/gestion/publication" element={<GestionPub />} />
//         <Route path="/list-commande" element={<ComandeList />} />
//         <Route path="/test" element={<NewCat />} />
//         {/* Autres routes */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;
// import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';

// routing
// import router from 'routes';

// project imports
// import Locales from 'ui-component/Locales';
// import NavigationScroll from 'layout/NavigationScroll';
// import RTLLayout from 'ui-component/RTLLayout';
// import Snackbar from 'ui-component/extended/Snackbar';
// import Loader from 'ui-component/Loader';
// import Notistack from 'ui-component/third-party/Notistack';

// import ThemeCustomization from 'themes';
// // import { dispatch } from 'store';
// import { getMenu } from 'store/slices/menu';

// auth provider
// import { JWTProvider as AuthProvider } from 'contexts/JWTContext';
// import { AuthProviderTemp } from 'utils/auth';

import { AuthProviderTemp } from './util/auth';
import router from './routes';
// import { FirebaseProvider as AuthProvider } from 'contexts/FirebaseContext';
// import { AWSCognitoProvider as AuthProvider } from 'contexts/AWSCognitoContext';
// import { Auth0Provider as AuthProvider } from 'contexts/Auth0Context';

// ==============================|| APP ||============================== //

const App = () => {
    // const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     dispatch(getMenu()).then(() => {
    //         setLoading(true);
    //     });
    // }, []);

    // if (!loading) return <Loader />;

    return (
                            <AuthProviderTemp>
                                <>
                                        <RouterProvider router={router} />
                                </>
                            </AuthProviderTemp>
    );
};

export default App;
