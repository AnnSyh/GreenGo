import * as React from "react";
import { Box, Button, Grid, Typography, Paper } from "@mui/material";
import { useTranslation } from "next-i18next";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import imgUrl from "../../public/images/icons/icon-clock.svg";
import MailIcon from "@mui/icons-material/Mail";
import { Avatar, Image } from "@mui/material";
import ParticlesBackground from "../../components/particlesBackground";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";

const HowToUseSection = ({}) => {
  const { t } = useTranslation("common");

  const items = [
    {
      image: `url('/images/provide/img-5.jpg')`,
      desc: `${t("provide_section_card_1")}`,
    },
    {
      image: `url('/images/provide/img-2.jpg')`,
      desc: `${t("provide_section_card_2")}`,
    },
    {
      image: `url('/images/provide/img-3.jpg')`,
      desc: `${t("provide_section_card_3")}`,
    },
    {
      image: `url('/images/provide/img-4.jpg')`,
      desc: `${t("provide_section_card_4")}`,
    },
    {
      image: `url('/images/provide/img-1.jpg')`,
      desc: `${t("provide_section_card_5")}`,
    },
    {
      image: `url('/images/provide/img-6.jpg')`,
      desc: `${t("provide_section_card_6")}`,
    },
  ];

  const steps = [
    {
      label: "шаг 1",
      description: `Скачайте приложение`,
    },
    {
      label: "шаг 2",
      description: "Выберите на карте станцию (Возможно бронирование станции)",
    },
    {
      label: "шаг 3",
      description: `Подключите зарядный кабель к машине и нажмите кнопку «Начать зарядку»`,
    },
    {
      label: "шаг 4",
      description: `Привяжите банковскую карту и оплатите зарядку в приложении`,
    },
    {
      label: "шаг 5",
      description: `Дождитесь окончания процесса зарядки`,
    },
    {
      label: "шаг 6",
      description: `После завершения достаньте зарядный кабель`,
    },
  ];

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <section id="provide-section" className="section bg-light-gray">
      <Box
        sx={{
          backgroundColor: "#fff",
          position: "relative",
          paddingTop: "30px",
          overflow: "hidden",
          paddingLeft: {
            xs: "0px",
            md: "15px",
          },
        }}
      >
        <Box className="container-box">
          <Typography
            variant="h1"
            sx={{ textAlign: "center", width: "100%", marginBottom: "60px" }}
            fontSize={{ xs: "25px", md: "52px" }}
          >
            Как подключиться к приложению
          </Typography>

          <Grid container>
            <Grid item md={6}>
              <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                  <Step key={step.label}>
                    <StepLabel
                      optional={
                        index === 5 ? (
                          <Typography variant="caption">
                            последний шаг
                          </Typography>
                        ) : null
                      }
                    >
                      {step.label}
                    </StepLabel>
                    <StepContent TransitionProps={{ unmountOnExit: false }}>
                      <Typography>{step.description}</Typography>
                      <Box sx={{ mb: 1 }}>
                        <Box sx={{ display: "flex" }}>
                          <Button
                            variant="contained"
                            onClick={handleNext}
                            sx={{ mt: 1, mr: 1 }}
                          >
                            {index === steps.length - 1
                              ? "Закончили"
                              : "Продолжить"}
                          </Button>
                          <Button
                            variant="contained"
                            disabled={index === 0}
                            onClick={handleBack}
                            sx={{ mt: 1, mr: 1 }}
                          >
                            Вернутся назад
                          </Button>
                        </Box>
                      </Box>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
              {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                  <Typography>Все шаги пройдены - вы заправились!</Typography>
                  <Button
                    variant="contained"
                    onClick={handleReset}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Пройти заново
                  </Button>
                </Paper>
              )}
            </Grid>
            <Grid item md={6} className="card card-provide">
              <img src="../../images/phone.png" width="100%" alt="" />
            </Grid>
          </Grid>
        </Box>
        <ParticlesBackground />
      </Box>
    </section>
  );
};

export { HowToUseSection };
