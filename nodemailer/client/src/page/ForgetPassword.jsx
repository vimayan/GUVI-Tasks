import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import * as yup from "yup";
import { useFormik } from "formik";
import { Alert, ButtonGroup, Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";



const theme = createTheme();

export default function ForgetPassword() {
  const navigate = useNavigate()
  const login = ()=>{
navigate('/login')
  }


  const [requestPssword, setRequestPssword] = useState(false);
  const [data,setData] = useState('')
  const [type,setType] = useState('success')

  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setRequestPssword(false);
  };




  const forgetPasswordFormData = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: yup.object({
      email: yup.string().required("Email is required").email(),
    }),
    onSubmit: (userdata) => {
      axios
        // .post("https://fitness-logger.onrender.com/request-password", userdata)
        .post("http://localhost:5500/request-password", userdata)
        .then((response)=>{
          console.log(response);
          setType("success");
          setData(response.data);
          setRequestPssword(true);
          return
        })
        .catch((error) => {
          if (error.response.data.details) {
            setType("warning")
            setData(error.response.data.details[0].message);
            setRequestPssword(true)}
      else if (error.response){ 
        setType("warning");
        setData(error.response.data);
        setRequestPssword(true)
      }
    });
        return
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(https://picsum.photos/1200/800)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={forgetPasswordFormData.handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={forgetPasswordFormData.values.email}
                  onChange={forgetPasswordFormData.handleChange}
                  autoFocus
                />
            <ButtonGroup  aria-label="outlined primary button group">
            <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  submit
                </Button>
                <Button
                onClick={login}
                variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  login
                </Button>
            </ButtonGroup>
                
                
                </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
      {forgetPasswordFormData.errors.email ? (
        <Alert
          severity="warning"
          sx={{
            float: "right",
            position: "absolute",
            top: "0px",
            right: "0px",
          }}
        >
          {forgetPasswordFormData.errors.email}
        </Alert>
      ) : (
        <></>
      )}
         <Snackbar open={requestPssword} autoHideDuration={4000}  anchorOrigin={{ vertical:"top", horizontal:"right" }}  onClose={handleClose}>
        <Alert severity={type} sx={{ width: "100%" }} >
          {data}
        </Alert>
      </Snackbar>
    </>
  );
}
