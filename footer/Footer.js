import { Box, Grid, Typography, Button } from "@mui/material";
import { useTranslation } from "next-i18next";
import SotialLinks from "../components/SotialLinks";

export const Footer = ({}) => {
  const { t } = useTranslation("common");

  return (
    <Box sx={{ position: "relative", zIndex: 1 }}>
      <footer>
        <Box
          sx={() => ({
            minHeight: "150px",
            backgroundColor: "rgba(0, 179, 152, 0.7)",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "column",
          })}
        >
          <Typography
            variant="subtitle2"
            component="div"
            align="center"
            sx={{ color: "#fff", paddingBottom: "0px" }}
          >
            GreenGo
          </Typography>
          <SotialLinks />
          <Typography component="div" align="center" sx={{ color: "#fff" }}>
            {/* © All Rights Reserved */}© {t("all_rights")}
          </Typography>
        </Box>
      </footer>
    </Box>
  );
};
