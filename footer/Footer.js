import { Box, Grid, Typography, Button } from "@mui/material";
import { useTranslation } from "next-i18next";

export const Footer = ({}) => {
  const { t } = useTranslation("common");

  return (
    <Box sx={{ position: "relative", zIndex: 1 }}>
      <footer>
        <Box
          sx={() => ({
            minHeight: "100px",
            backgroundColor: "#f5f5f5",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          })}
        >
          <Typography variant="subtitle2" component="div" align="center">
            GreenGo
          </Typography>
          <Typography component="div" align="center">
            {/* © All Rights Reserved */}© {t("all_rights")}
          </Typography>
        </Box>
      </footer>
    </Box>
  );
};
