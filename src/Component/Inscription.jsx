import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Fab,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import StateNotification from "./Notification";
import Waiter from "./Waiter";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import styled from "@emotion/styled";
import { grey } from "@mui/material/colors";
const validationSchema = yup.object({
  firstName: yup
    .string("Veuillez entrer votre nom")
    .required("Le nom est obligatoire"),
  lastName: yup
    .string("Veuillez entrer votre nprénom")
    .required("Le prénom est obligatoire"),
  userName: yup
    .string("Veuillez entrer votre nom d'utilisateur")
    .required("Le nom d'utilisateur est obligatoire"),
  email: yup
    .string("Veuillez entrer votre adresse e-mail")
    .email("Veuillez entrer une adresse e-mail valide")
    .required("L'adresse e-mail est obligatoire"),
  phoneNumber: yup
    .string("Veuillez entrer votre adresse numero")
    .required("Le numero est obligatoire"),
  region: yup
    .string("Veuillez entrer votre région")
    .required("La région est obligatoire"),
  adress: yup
    .string("Veuillez entrer votre adresse")
    .required("L'adresse est obligatoire"),
  password: yup
    .string("Veuillez entrer votre mot de passe")
    .min(4, "Le mot de passe doit contenir au moins 8 caractères")
    .required("Le mot de passe est obligatoire"),
  confirmPassword: yup
    .string("Veuillez confirmer votre mot de passe")
    .oneOf(
      [yup.ref("password"), null],
      "Les mots de passe doivent correspondre"
    )
    .required("Veuillez confirmer votre mot de passe"),
});
function Inscription() {
  const [selectedImageRecto, setSelectedImageRecto] = useState(null);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const isFormPart1Valid = () => {
    return (
      formik.touched.firstName &&
      !formik.errors.firstName &&
      formik.touched.lastName &&
      !formik.errors.lastName &&
      formik.touched.userName &&
      !formik.errors.userName &&
      formik.touched.region &&
      !formik.errors.region &&
      formik.touched.adress &&
      !formik.errors.adress
    );
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      phoneNumber: "",
      recto: null,
      region: "",
      adress: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      submitFormData(values);
      setLoading(false);
      console.log(JSON.stringify(values, null, 2));
    },
  });

  const handleNext = () => {
    formik.validateForm().then((errors) => {
      if (activeStep === 0) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      } else if (activeStep === 1 && Object.keys(errors).length === 0) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    });
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };
  const handlePrev = () => {
    navigate("/login");
  };
  const submitFormData = async (values) => {
    console.log("Submitting form data model");
    const formData = new FormData();

    formData.append("image", values.recto);
    formData.append("first_name", values.firstName);
    formData.append("phone_number", values.phoneNumber);
    formData.append("last_name", values.lastName);
    formData.append("username", values.userName);
    formData.append("email", values.email);
    formData.append("address", values.adress);
    formData.append("city", values.region);
    formData.append("password", values.password);
    formData.append("password_confirmation", values.confirmPassword);
    // console.log(JSON.stringify(object));
    console.log(formData);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/api/user/crup",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      data: formData,
    };

    axios
      .request(config)
      .then((response) => {
        console.log("Tafiditra");
        console.log(response);
        setShowSuccessDialog(true);
        setLoading(true);
      })
      .catch((error) => {
        console.log("Ampio Rora");
        console.error(error);
        setShowErrorDialog(true);
        setLoading(true);
      });
  };
  const handleCloseSuccessDialog = () => {
    setShowSuccessDialog(false);
    navigate("/");
  };

  const handleCloseErrorDialog = () => {
    setShowErrorDialog(false);
  };
  const StyledFab = styled(Fab)({
    zIndex: 2,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    border: "0.7vh solid white",
  });
  return (
    <>
      <Waiter loadingState={!isLoading} />
      <Typography
        sx={{ my: 1 }}
        color={"#EBCC24"}
        textAlign={"center"}
        variant="h3"
      >
        Formulaire d'inscription
      </Typography>
      <Grid
        sx={{ height: "100vh" }}
        container
        justifyContent="center"
        alignItems="center"
      >
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
            <Typography variant="h4" color={"white"} py={2}>
              {activeStep === 0 && "Informations Personnelles"}
              {activeStep === 1 && "Informations de Connexion"}
            </Typography>
            <Grid
              sx={{
                boxShadow: "5px 7px 10px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: 4,
                textAlign: "center",
                minWidth: "400px",
                maxWidth: "36vw",
              }}
            >
              <Grid
                sx={{
                  // border: "solid red 2px",
                  p: 3,
                  borderRadius: 4,
                  bgcolor: "white",
                }}
              >
                {activeStep === 0 && (
                  <>
                    <Grid display={"none"}>
                      <input
                        accept="image/*"
                        style={{ display: "none" }}
                        id="recto-upload"
                        name="recto"
                        type="file"
                        onChange={(event) => {
                          const file = event.currentTarget.files[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              setSelectedImageRecto(reader.result);
                            };
                            reader.readAsDataURL(file);
                            formik.setFieldValue("recto", file);
                          }
                        }}
                      />
                    </Grid>
                    <Grid
                      container
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Grid
                        container
                        justifyContent={"center"}
                        alignItems={"center"}
                        textAlign={"center"}
                        position={"relative"}
                        sx={{
                          width: "20vh",
                          height: "20vh",
                        }}
                        // border={"red solid 2px"}
                      >
                        <StyledFab aria-label="add">
                          {selectedImageRecto && (
                            <Box
                              mt={2}
                              sx={{
                                mb: 2,
                                width: "100%",
                                height: "100%",
                                textAlign: "center",
                              }}
                            >
                              <Avatar
                                src={selectedImageRecto}
                                sx={{
                                  bgcolor: grey[300],
                                  color: "white",
                                  width: "100%",
                                  height: "100%",
                                }}
                              />
                            </Box>
                          )}
                          {selectedImageRecto ? null : (
                            <Avatar
                              // accept="image/*"
                              // id="recto-upload"
                              src="/broken-image.jpg"
                              // name="recto"
                              // type="file"
                              sx={{
                                bgcolor: grey[300],
                                color: "white",
                                width: "100%",
                                height: "100%",
                              }}
                            />
                          )}
                          <input
                            accept="image/*"
                            style={{ display: "none" }}
                            id="recto-upload"
                            name="recto"
                            type="file"
                            onChange={(event) => {
                              const file = event.currentTarget.files[0];
                              if (file) {
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                  setSelectedImageRecto(reader.result);
                                };
                                reader.readAsDataURL(file);
                                formik.setFieldValue("recto", file);
                              }
                            }}
                          />
                        </StyledFab>

                        <label htmlFor="recto-upload">
                          <IconButton
                            component="span"
                            style={{
                              zIndex: 772,
                              position: "absolute",
                              bottom: 15,
                              right: 5,
                              border: "2px solid white",
                              padding: 2,
                              backgroundColor: "white",
                              boxShadow: "10px 2px 10px rgba(0, 0, 0, 0.1)",
                            }}
                          >
                            <PhotoCameraIcon type="file" />
                          </IconButton>
                        </label>
                      </Grid>
                    </Grid>
                    <TextField
                      sx={{ mt: 4 }}
                      fullWidth
                      id="firstName"
                      name="firstName"
                      label="Nom"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.firstName &&
                        Boolean(formik.errors.firstName)
                      }
                      helperText={
                        formik.touched.firstName && formik.errors.firstName
                      }
                    />
                    <TextField
                      sx={{ mt: 4 }}
                      fullWidth
                      id="lastName"
                      name="lastName"
                      label="Prenom"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.lastName &&
                        Boolean(formik.errors.lastName)
                      }
                      helperText={
                        formik.touched.lastName && formik.errors.lastName
                      }
                    />
                    <TextField
                      sx={{ mt: 4 }}
                      fullWidth
                      id="userName"
                      name="userName"
                      label="Nom d'utilisateur"
                      value={formik.values.userName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.userName &&
                        Boolean(formik.errors.userName)
                      }
                      helperText={
                        formik.touched.userName && formik.errors.userName
                      }
                    />
                    <TextField
                      sx={{ mt: 4 }}
                      fullWidth
                      id="region"
                      name="region"
                      label="Region"
                      value={formik.values.region}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.region && Boolean(formik.errors.region)
                      }
                      helperText={formik.touched.region && formik.errors.region}
                    />
                    <TextField
                      sx={{ mt: 4 }}
                      fullWidth
                      id="adress"
                      name="adress"
                      label="Lot"
                      value={formik.values.adress}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.adress && Boolean(formik.errors.adress)
                      }
                      helperText={formik.touched.adress && formik.errors.adress}
                    />
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      fullWidth
                      disabled={!isFormPart1Valid()}
                      sx={{
                        my: 4,
                        px: 4,
                        backgroundImage: isFormPart1Valid()
                          ? "linear-gradient(120deg, #95c732 50%, #EBCC24 50%)"
                          : "linear-gradient(120deg, #bbbbbbff 50%, #ddddddff 50%)",
                      }}
                    >
                      Suivant
                    </Button>
                  </>
                )}
                {activeStep === 1 && (
                  <>
                    <TextField
                      sx={{ mt: 4 }}
                      fullWidth
                      id="email"
                      name="email"
                      label="Adress Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                      sx={{ mt: 4 }}
                      fullWidth
                      id="phoneNumber"
                      name="phoneNumber"
                      label="Numero"
                      value={formik.values.phoneNumber}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.phoneNumber &&
                        Boolean(formik.errors.phoneNumber)
                      }
                      helperText={
                        formik.touched.phoneNumber && formik.errors.phoneNumber
                      }
                    />
                    <TextField
                      sx={{ my: 2 }}
                      fullWidth
                      id="password"
                      name="password"
                      label="Mot de pass"
                      type={formik.values.showPassword ? "text" : "password"}
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
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
                    <TextField
                      sx={{ my: 2 }}
                      fullWidth
                      id="confirmPassword"
                      name="confirmPassword"
                      label="Confirmation mot de passe"
                      type={formik.values.showPassword1 ? "text" : "password"}
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.confirmPassword &&
                        Boolean(formik.errors.confirmPassword)
                      }
                      helperText={
                        formik.touched.confirmPassword &&
                        formik.errors.confirmPassword
                      }
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() =>
                                formik.setValues({
                                  ...formik.values,
                                  showPassword1: !formik.values.showPassword1,
                                })
                              }
                              edge="end"
                            >
                              {formik.values.showPassword1 ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Grid
                      container
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={handleBack}
                        sx={{ my: 4, px: 4, backgroundColor: "#95c732" }}
                      >
                        Retour
                      </Button>
                      <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                        sx={{ my: 4, px: 4, backgroundColor: "#EBCC24" }}
                      >
                        Inscrit
                      </Button>
                    </Grid>
                  </>
                )}
                <Divider>OU</Divider>
                <Link
                  href="/login"
                  sx={{
                    color: "black",
                    display: "flex",
                    justifyContent: "center",
                    my: 2,
                  }}
                >
                  Vous avez déjà un compte?
                </Link>
              </Grid>
            </Grid>
            <Stepper
              activeStep={activeStep}
              alternativeLabel
              sx={{ p: "20px" }}
            >
              <Step key="AjoutInfo">
                <StepLabel>Informations Personnelles</StepLabel>
              </Step>
              <Step key="TexteContenu">
                <StepLabel>Informations de Connexion</StepLabel>
              </Step>
            </Stepper>
            <StateNotification
              showSuccessDialog={showSuccessDialog}
              showErrorDialog={showErrorDialog}
              handleCloseSuccessDialog={handleCloseSuccessDialog}
              successMessage="Votre inscription a été créée avec succès! Bienvenue à LOWE'S!"
              handleCloseErrorDialog={handleCloseErrorDialog}
              errorMessage="Erreur : Veuillez vérifier le format"
            />
          </Grid>
        </form>
      </Grid>
    </>
  );
}

export default Inscription;
