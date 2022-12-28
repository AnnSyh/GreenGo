import * as React from "react";
import { FormControl, Select, InputLabel } from "@mui/material";
import { useState } from "react";

const FormControlSelect = ({ languageToggle }) => {
  const [state, setState] = useState({
    lang: "ru",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
    languageToggle();
  };

  return (
    <>
      <FormControl variant="outlined">
        <Select
          native
          value={state.lang}
          onChange={handleChange}
          inputProps={{
            name: "lang",
          }}
          sx={{
            margin: "10px",
          }}
        >
          <option value={"ru"}>rus</option>
          <option value={"en"}>eng</option>
        </Select>
      </FormControl>
    </>
  );
};

export { FormControlSelect };
