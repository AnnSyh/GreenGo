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
import { useTranslation } from "next-i18next";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import style from "../../styles/FormSection.module.css";

const FormMy = ({ open }) => {
  const { t } = useTranslation("common");
  const [loader, setLoader] = React.useState(false);
  const [checkForm, setCheckForm] = useState(true);
  const [snakbar, setSnakbar] = useState(false);
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [errorPhoneNumber, setErrorPhoneNumber] = React.useState(false);
  // console.log("open = ", open);

  const styles = {
    form: {
      width: "100%",
    },
  };
  const handleCloseSnak = () => setSnakbar(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required(t("required")),
      email: Yup.string()
        .email(t("must_be_valid_email"))
        .required(t("required")),
      message: Yup.string().required(t("required")),
    }),
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      setLoader(true);
      const data = {
        name: values.name,
        email: values.email,
        message: values.message,
        phoneNumber: `+${phoneNumber}`,
      };
      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      }).then((res) => {
        if (res.status === 200) {
          setLoader(false);
          setCheckForm(false);
          // setOpen(false);
          setSnakbar(true);
        } else {
          setLoader(false);
          setSnakbar(false);
        }
      });
    },
  });
  const handleErrPhoneNumber = () => {
    if (phoneNumber) {
      setErrorPhoneNumber(false);
    } else setErrorPhoneNumber(true);
  };
  return (
    // <section id="form-section" className="section">
    <Box
      sx={() => ({
        width: "100%",
        position: "relative",
      })}
    >
      <Box id="form">
        {checkForm && (
          <form onSubmit={formik.handleSubmit} style={styles.form}>
            <Grid container spacing={2} marginBottom="30px">
              <Grid item xs={12} md={4}>
                <Typography variant="colorGreen">
                  {t("subscription_form_input_one")}
                </Typography>
                <TextField
                  className={style.textField}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  id="name"
                  fullWidth
                  name="name"
                  placeholder={t("enter_your_name")}
                  // error={formik.touched.name && Boolean(formik.errors.name)}
                  // helpertext={formik.touched.name && formik.errors.name}
                />
                <Typography sx={{ color: "red" }}>
                  {formik.touched.name && formik.errors.name}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="colorGreen">Email</Typography>
                <TextField
                  className={style.textField}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  id="email"
                  fullWidth
                  name="email"
                  placeholder={t("enter_your_email")}
                  // error={formik.touched.email && Boolean(formik.errors.email)}
                  // helpertext={formik.touched.email && formik.errors.email}
                />
                <Typography sx={{ color: "red" }}>
                  {formik.touched.email && formik.errors.email}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="colorGreen">
                  {t("phone_number")}
                </Typography>
                <PhoneInput
                  // className={style.reactTelInput}
                  className={style.textField}
                  country={"ru"}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e)}
                  name="phoneNumber"
                />
                {errorPhoneNumber && (
                  <Typography sx={{ color: "red" }}>{t("required")}</Typography>
                )}
              </Grid>
            </Grid>
            <Grid item md={12}>
              <label htmlFor="message">
                <Typography variant="colorGreen">{t("message")}</Typography>
              </label>
              <TextArea
                className={style.textArea}
                value={formik.values.message}
                onChange={formik.handleChange}
                placeholder={t("enter_your_message")}
                minRows={6}
                id="message"
                name="message"
                error={formik.touched.message && Boolean(formik.errors.message)}
                helpertext={formik.touched.message && formik.errors.message}
              />
              <Typography sx={{ color: "red" }}>
                {formik.touched.message && formik.errors.message}
              </Typography>
            </Grid>
            <Grid item md={12}>
              <Button
                variant="contained"
                disabled={loader ? true : false}
                onClick={() => {
                  formik.handleSubmit();
                  handleErrPhoneNumber();
                }}
                sx={{ margin: "45px auto" }}
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
        onClose={handleCloseSnak}
        message="Message sent"
        sx={{
          ".MuiPaper-root": {
            background: "#fff",
            minWidth: "10px",
            color: "#00b398",
            position: "relative",
            zIndex: "100",
            border: "2px solid #00b398",
          },
        }}
      />
    </Box>
    // </section>
  );
};

export { FormMy };
