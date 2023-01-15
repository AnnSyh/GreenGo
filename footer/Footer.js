import { Box, Grid, Typography, Button } from "@mui/material";
import { useTranslation } from "next-i18next";
import SoсialLinks from "../components/SoсialLinks";

export const Footer = ({}) => {
  const { t } = useTranslation("common");

  return (
    <Box sx={{ position: "relative", zIndex: 1 }}>
      <footer>
        <Box
          sx={() => ({
            minHeight: "150px",
            backgroundColor: "rgba(0, 179, 152, 1)",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "column",
          })}
        >
          <SoсialLinks />
          <Typography component="div" align="center" sx={{ color: "#fff" }}>
            {/* © All Rights Reserved */} {t("all_rights")}
          </Typography>
          <Typography
            component="div"
            align="center"
            sx={{ color: "#fff", paddingBottom: "0px" }}
          >
            © 2022 GreenGo
          </Typography>
        </Box>
      </footer>
    </Box>
  );
};
