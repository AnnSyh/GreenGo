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

const AccordionSection = ({}) => {
  const { t } = useTranslation("common");

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const questions = [
    {
      id: "panel1",
      summary: `1 Personal data`,
      details: `1 Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
      Integer sit amet egestas eros, vitae egestas augue. Duis vel
      est augue.`,
    },
    {
      id: "panel2",
      summary: `2 Personal data`,
      details: `2 Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
      Integer sit amet egestas eros, vitae egestas augue. Duis vel
      est augue.`,
    },
    {
      id: "panel3",
      summary: `3 Personal data`,
      details: `3 Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
      Integer sit amet egestas eros, vitae egestas augue. Duis vel
      est augue.`,
    },
    {
      id: "panel4",
      summary: `4 Personal data`,
      details: `4 Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
      Integer sit amet egestas eros, vitae egestas augue. Duis vel
      est augue.`,
    },
  ];

  return (
    <>
      <Typography variant="subtitle1" component="div" sx={{ color: "#00b398" }}>
        {t("questions")}
      </Typography>

      <Grid
        container
        justifyContent="space-between"
        sx={{
          position: "relative",
          minHeight: "calc(100vh - 160px - 386px)",
          // border: "1px solid green",
        }}
      >
        <div>
          {questions.map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded === `${item.id}`}
              onChange={handleChange(`${item.id}`)}
              sx={{ backgroundColor: "transparent", color: "#fff" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography>{item.summary}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.details}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </Grid>
    </>
  );
};

export { AccordionSection };
