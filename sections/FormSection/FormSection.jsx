import * as React from "react";
import { Typography } from "@mui/material";
import { Box, padding } from "@mui/system";
import { useTranslation } from "next-i18next";
import "react-phone-input-2/lib/bootstrap.css";

import { FormMy } from "./FormMy";

const FormSection = ({}) => {
  const { t } = useTranslation("common");

  return (
    <section id="form-section" className="section">
      <Box
        className="bg-dark-gray"
        sx={{
          width: "100%",
          position: "relative",
        }}
      >
        <Box
          className="container-box"
          id="form"
          sx={() => ({
            alignItems: "flex-top",
          })}
        >
          <Typography
            variant="h1"
            sx={{ textAlign: "center", width: "100%", marginBottom: "30px" }}
            fontSize={{ xs: "25px", md: "52px" }}
          >
            {t("subscription_form")}
          </Typography>

          <FormMy />
        </Box>
      </Box>
    </section>
  );
};

export { FormSection };
