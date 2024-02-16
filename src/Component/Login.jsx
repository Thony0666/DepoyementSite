import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import Waiter from "./Waiter";
import StateNotification from "./Notification";
import { useAuthTemp } from "../util/auth";
const validationSchema = yup.object({
  email: yup
    .string("Veuillez entrer votre adresse e-mail")
    .email("Veuillez entrer une adresse e-mail valide")
    .required(`'L'adresse e-mail est obligatoire'`),
  password: yup
    .string("Veuillez entrer votre mot de passe")
    .min(4, "Le mot de passe doit contenir au moins 8 caractères")
    .required("Le mot de passe est obligatoire"),
});
function Login() {
  const auth = useAuthTemp();
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);

  const submitFormData = async (values) => {
    console.log("Submitting form data model");
    const formData = new FormData();

    formData.append("email", values.email);
    formData.append("password", values.password);

    const object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });
    console.log(JSON.stringify(object));

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/api/auth/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: formData,
    };

    await axios
      .request(config)
      .then((response) => {
        console.log("anaty try");
        console.log(response);
        auth.loginUserFront(response.data.user);
        navigate("/");
        setLoading(true);
      })
      .catch((error) => {
        console.log("anaty catch");
        console.error(error);
        setShowErrorDialog(true);
        setLoading(true);
      });
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      submitFormData(values);
      console.log(JSON.stringify(values, null, 2));
      setLoading(false);
    },
  });
  const handlePrev = () => {
    navigate("/inscription");
  };
  const handleCloseErrorDialog = () => {
    setShowErrorDialog(false);
  };
  return (
    <>
      <Grid
        sx={{ height: "100vh" }}
        container
        justifyContent="center"
        alignItems="center"
      >
        <Waiter loadingState={!isLoading} />{" "}
        <form onSubmit={formik.handleSubmit}>
          <Grid
            sx={{
              border: "solid white 5px",
              boxShadow: "5px 7px 10px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: 6,
              textAlign: "center",
              overflow: "hidden",
              bgcolor: "#95c732",
            }}
          >
            <Typography variant="h2" color={"white"} py={2}>
              Login
            </Typography>
            <Grid
              sx={{
                // border: "solid red 2px",
                p: 3,
                borderRadius: 4,
                bgcolor: "white",
              }}
            >
              <TextField
                sx={{ mt: 4 }}
                fullWidth
                id="email"
                name="email"
                label="Adress Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                sx={{ my: 2 }}
                fullWidth
                id="password"
                name="password"
                label="Mot de passe"
                type={formik.values.showPassword ? "text" : "password"}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() =>
                          formik.setValues({
                            ...formik.values,
                            showPassword: !formik.values.showPassword,
                          })
                        }
                        edge="end"
                      >
                        {formik.values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Link
                href=""
                sx={{
                  color: "black",
                  display: "flex",
                  justifyContent: "flex-end",
                  mr: 2,
                }}
              >
                Mot de passe oublier
              </Link>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                fullWidth
                sx={{ my: 4, px: 4, backgroundColor: "#EBCC24" }}
              >
                Connexion
              </Button>
              <Divider>OU</Divider>
              <Button
                onClick={handlePrev}
                variant="contained"
                sx={{ my: 4, px: 4, bgcolor: "#95c732" }}
              >
                Creer un compte
              </Button>
            </Grid>
            <StateNotification
              showErrorDialog={showErrorDialog}
              handleCloseErrorDialog={handleCloseErrorDialog}
              errorMessage="Erreur : Veuillez vérifier votre email ou mot de passe"
            />
          </Grid>
        </form>
      </Grid>
    </>
  );
}

export default Login;
