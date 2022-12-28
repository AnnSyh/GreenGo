import * as React from "react";
import {
  Grid,
  Typography,
  Button,
  CircularProgress,
  TextField,
  Snackbar,
} from "@mui/material";
import { Box, padding } from "@mui/system";
import { Input } from "../../components/input/input";
import { TextArea } from "../../components/textarea/textarea";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useTranslation } from "next-i18next";

const FormSection = ({}) => {
  const { t } = useTranslation("common");
  const [loader, setLoader] = React.useState(false);
  const [checkForm, setCheckForm] = useState(true);
  const [snakbar, setSnakbar] = useState(false);

  const styles = {
    form: {
      width: "100%",
    },
  };
  const handleClose = () => setSnakbar(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Must be a valid email").required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      setLoader(true);
      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }).then((res) => {
        if (res.status === 200) {
          setLoader(false);
          setCheckForm(false);
          setSnakbar(true);
        } else {
          setLoader(false);
        }
      });
    },
  });
  return (
    <section
      id="form-section"
      className="py-40 bg-green-50"
      data-scroll-section
    >
      <Box
        component="section"
        sx={(theme) => ({
          backgroundColor: theme.palette.common.white,
          width: "100%",
          position: "relative",
        })}
      >
        <Box
          id="form"
          sx={() => ({
            width: "100%",
            maxWidth: "1140px",
            margin: "0 auto",
            display: "flex",
            flexFlow: "row wrap",
            alignItems: "flex-top",
            position: "relative",
          })}
        >
          {checkForm && (
            <form onSubmit={formik.handleSubmit} style={styles.form}>
              <Grid item md={12}>
                <Typography variant="h1" sx={{ textAlign: "center" }}>
                  {t("subscription_form")}
                </Typography>
              </Grid>

              <Grid
                container
                spacing={{
                  xs: 0,
                  lg: 2,
                }}
              >
                <Grid
                  item
                  xs={12}
                  lg={6}
                  sx={{
                    p: 0,
                    mb: {
                      xs: "20px",
                      lg: "50px",
                    },
                  }}
                >
                  <Typography sx={{ color: "#00b398" }}>
                    {t("subscription_form_input_one")}
                  </Typography>
                  <TextField
                    sx={{
                      ".MuiOutlinedInput-input": {
                        background: "#f5f5f5",
                      },
                      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "#f5f5f5",
                        },
                    }}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    id="name"
                    fullWidth
                    name="name"
                    placeholder={`Enter your name`}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helpertext={formik.touched.name && formik.errors.name}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={6}
                  sx={{
                    p: 0,
                    mb: {
                      xs: "20px",
                      lg: "50px",
                    },
                  }}
                >
                  <Typography sx={{ color: "#00b398" }}>email</Typography>
                  <TextField
                    sx={{
                      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "#f5f5f5",
                        },
                      ".MuiOutlinedInput-input": {
                        background: "#f5f5f5",
                      },
                    }}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    fullWidth
                    id="email"
                    name="email"
                    placeholder={`Enter your email`}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helpertext={formik.touched.email && formik.errors.email}
                  />
                </Grid>
              </Grid>

              <Grid item md={12}>
                <TextArea
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  label={t("message")}
                  placeholder="Text..."
                  minRows={6}
                  id="message"
                  name="message"
                  error={
                    formik.touched.message && Boolean(formik.errors.message)
                  }
                  helpertext={formik.touched.message && formik.errors.message}
                />
              </Grid>
              <Grid item md={12}>
                <Button
                  variant="contained"
                  disabled={loader ? true : false}
                  onClick={formik.handleSubmit}
                  sx={(theme) => ({
                    margin: "45px auto",
                  })}
                >
                  {loader ? (
                    <CircularProgress sx={{ color: "#fff" }} />
                  ) : (
                    `${t("submit")}`
                  )}
                </Button>
              </Grid>
            </form>
          )}
        </Box>
        <Snackbar
          open={snakbar}
          autoHideDuration={3000}
          onClose={handleClose}
          message="Message sent"
          sx={{
            ".MuiPaper-root": {
              background: "#00b398",
              minWidth: "10px",
            },
          }}
        />
      </Box>
    </section>
  );
};

export { FormSection };
