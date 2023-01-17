import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import TelegramIcon from "@mui/icons-material/Telegram";

import * as React from "react";
import { useTranslation } from "next-i18next";
import { useState } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// import { withStyles } from "@mui/styles";
// const Accordion = withStyles({
//   root: {
//     border: "1px solid red",
//     boxShadow: "none",
//   },
//   expanded: {},
// })(Accordion);

// const AccordionSummary = withStyles({
//   root: {
//     backgroundColor: "green",
//     borderBottom: "1px solid rgba(0, 0, 0, .125)",
//     marginBottom: -1,
//     minHeight: 56,
//     "&$expanded": {
//       minHeight: 56,
//     },
//   },
//   content: {
//     "&$expanded": {
//       margin: "12px 0",
//     },
//   },
//   expanded: {},
// })(AccordionSummary);

// const AccordionDetails = withStyles((theme) => ({
//   root: {
//     padding: theme.spacing(2),
//   },
// }))(AccordionDetails);

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
      <Box className="container-box" sx={{ paddingTop: "150px" }}>
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
          <div>
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
                  <Typography sx={{ color: "#fff" }}>{item.details}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </Grid>
      </Box>
    </Box>
  );
};

export { AccordionSection };
