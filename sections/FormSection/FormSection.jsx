import * as React from "react";
import { Grid, Typography, Button, CircularProgress } from "@mui/material";
import { Box, padding } from "@mui/system";
import { Input } from "../../companents/input/input";
import { TextArea } from "../../companents/textarea/textarea";
import { useState } from "react";

const FormSection = ({}) => {
  const [loader, setLoader] = React.useState(false);
  const [isSnackOpen, setSnackOpen] = useState(false);
  const [statusSnack, setStatusSnack] = useState("success");

  const styles = {
    form: {
      width: "100%",
    },
  };

  const [values, setValues] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((res) => {
      if (res.status === 200) {
        setLoader(false);
        setSnackOpen(true);
        setValues({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setLoader(false);
        setStatusSnack("error");
        setSnackOpen(true);
      }
    });
  };
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
          <form onSubmit={handleSubmit} style={styles.form}>
            <Grid container>
              <Grid item md={12}>
                <Typography variant="h1" sx={{ textAlign: "center" }}>
                  форма подписки
                </Typography>
              </Grid>

              <Grid
                container
                spacing={{
                  xs: 0,
                  lg: 2,
                }}
              >
                {["name", "email"].map((item) => (
                  <Grid
                    item
                    xs={12}
                    lg={6}
                    key={item}
                    sx={() => ({
                      padding: 0,
                      marginBottom: {
                        xs: "20px",
                        lg: "50px",
                      },
                    })}
                  >
                    <Input
                      value={values[item]}
                      label={item}
                      placeholder={`Enter your ${item}`}
                      setValue={handleChange(item)}
                    />
                  </Grid>
                ))}
              </Grid>

              <Grid item md={12}>
                <TextArea
                  value={values.message}
                  label="Message"
                  placeholder="Text..."
                  required
                  minRows={6}
                  onChange={handleChange("message")}
                />
              </Grid>
              <Grid item md={12}>
                <Button
                  variant="contained"
                  type="submit"
                  disabled={loader ? true : false}
                  sx={(theme) => ({
                    margin: "45px auto",
                  })}
                >
                  {loader ? (
                    <CircularProgress sx={{ color: "#fff" }} />
                  ) : (
                    "Submit"
                  )}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </section>
  );
};

export { FormSection };
