import { Box, Grid, Typography, Button } from "@mui/material";

export const Footer = ({}) => {
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
            © All Rights Reserved
          </Typography>
        </Box>
      </footer>
    </Box>
  );
};
