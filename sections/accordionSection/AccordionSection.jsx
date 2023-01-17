import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import TelegramIcon from "@mui/icons-material/Telegram";

import * as React from "react";
import { useTranslation } from "next-i18next";
import { useState } from "react";

import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

import { styled } from "@mui/material/styles";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid #00b398`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  border: `1px solid #00b398`,
  backgroundColor: "rgb(0, 179, 152, 0.5)",
  // backgroundColor:
  //   theme.palette.mode === "dark"
  //     ? "rgba(0, 179, 152, .05)"
  //     : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  // borderTop: "1px solid rgba(225, 225, 225, 1)",
  // borderBottom: "1px solid rgba(225, 225, 225, 1)",
}));

const AccordionSection = ({}) => {
  const { t } = useTranslation("common");

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const questions = [
    {
      id: "panel1",
      summary: `${t("questions_summary_1")}`,
      details: `${t("questions_details_1")}`,
    },
    {
      id: "panel2",
      summary: `${t("questions_summary_2")}`,
      details: `${t("questions_details_2")}`,
    },
    {
      id: "panel3",
      summary: `${t("questions_summary_3")}`,
      details: `${t("questions_details_3")}`,
    },
    {
      id: "panel4",
      summary: `${t("questions_summary_4")}`,
      details: `${t("questions_details_4")}`,
    },
  ];

  return (
    <Box component="section" className="section">
      <Box
        className="container-box"
        sx={{
          paddingTop: "150px",
        }}
      >
        <Typography
          variant="subtitle1"
          component="div"
          sx={{ color: "#00b398" }}
        >
          {t("questions")}
        </Typography>

        <Grid
          container
          justifyContent="space-between"
          sx={{
            position: "relative",
            minHeight: "calc(100vh - 160px - 436px)",
          }}
        >
          <Box>
            {questions.map((item, index) => (
              <Accordion
                square
                key={index}
                expanded={expanded === `${item.id}`}
                onChange={handleChange(`${item.id}`)}
                sx={{ backgroundColor: "transparent" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography sx={{ color: "#fff" }}>{item.summary}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: "16px",
                      fontWeight: "200",
                    }}
                  >
                    {item.details}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export { AccordionSection };
