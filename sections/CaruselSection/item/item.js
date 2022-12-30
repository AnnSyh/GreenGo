import { Avatar, Box, Grid, Typography } from "@mui/material";

export const Item = ({ item }) => {
  return (
    <Grid
      item
      key={item.name}
      xs={12}
      lg={3}
      sx={(theme) => ({
        flexGrow: 0,
        flexShrink: 0,
        margin: "0 auto",
        minWidth: "300px",
        padding: "20px",
      })}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          flexFlow: "column nowrap",
          backgroundColor: theme.palette.common.white,
          alignItems: "center",
          position: "relative",
          borderRadius: theme.radius.default,
          // minHeight: "435px",
          // maxHeight: "435px",
          padding: {
            xs: "30px 10px",
            lg: "30px",
          },
        })}
      >
        <Avatar
          alt="Remy Sharp"
          src={item.photo}
          sx={(theme) => ({
            width: 180,
            height: 180,
            borderWidth: "10px",
            borderColor: theme.palette.primary.main,
            borderStyle: "solid",
          })}
        />

        <Typography
          variant="body"
          gutterBottom
          sx={() => ({
            marginTop: "20px",
            padding: 0,
            textAlign: "center",
            fontSize: "13px",
            lineHeight: 1.4,
          })}
        >
          {item.desc}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            fontSize: "16px",
            color: "#454545",
          }}
        >
          {item.position}
        </Typography>
      </Box>
    </Grid>
  );
};
