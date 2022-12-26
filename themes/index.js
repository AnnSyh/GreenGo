import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application
      },
      styleOverrides: {
        root: ({ o, theme }) => ({
          fontSize: "1rem",
          boxShadow: "none",
          borderRadius: "0",
          width: "205px",
          height: "50px",
          ":hover": {
            boxShadow: "none",
            backgroundColor: theme.palette.grey.A700,
          },
        }),
      },
    },
  },
  radius: {
    default: "25px",
  },
});

// Create a theme elements.

// Typography
theme.typography.h1 = {
  fontFamily: "Roadradio,Arial,sans-serif",
  fontSize: "52px",
  color: "#454545",
  fontWeight: 600,
};
theme.typography.h2 = {
  fontFamily: "Roadradio,Arial,sans-serif",
  fontSize: "52px",
  color: "#454545",
  fontWeight: 400,
};
theme.typography.h3 = {
  fontFamily: "Roadradio,Arial,sans-serif",
  fontSize: "52px",
  color: "#454545",
  fontWeight: 200,
};
// theme.typography.body1 = {
//   border: "1px solid red",
//   fontFamily: "Roadradio,Arial,sans-serif",
//   fontSize: "16px",
//   color: "#454545",
//   fontWeight: 400,
// };
// theme.typography.p = {
//   fontFamily: "Roadradio,Arial,sans-serif",
//   fontSize: "16px",
//   color: "#454545",
//   fontWeight: 400,
// };

// шапка

// background-color: transparent;
// color: #fff;
// z-index: 1;
// position: absolute;

export default theme;
