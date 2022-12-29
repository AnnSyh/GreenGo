import * as React from "react";
import { FormControl, Select, InputLabel } from "@mui/material";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const FormControlSelect = ({ languageToggle, sx }) => {
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

  const router = useRouter();
  const [locale, setLocale] = React.useState("en");

  useEffect(() => {
    if (router.locale == "ru") {
      setLocale("ru");
    } else if (router.locale == "en") {
      setLocale("en");
    }
  }, []);

  const handleSelectLang = (lang) => {
    router.push(`${router.pathname}`, "/", { locale: lang });
  };

  return (
    <>
      <FormControl variant="outlined">
        <Select
          native
          value={locale}
          onChange={(e) => {
            setLocale(e.target.value);
            handleSelectLang(e.target.value);
          }}
          inputProps={{
            name: "lang",
          }}
          sx={sx}
        >
          <option value={"ru"}>rus</option>
          <option value={"en"}>eng</option>
        </Select>
      </FormControl>
    </>
  );
};

export { FormControlSelect };
