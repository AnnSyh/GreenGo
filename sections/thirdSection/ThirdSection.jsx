import { Grid, Typography } from "@mui/material";
import { Box, padding } from "@mui/system";
import * as React from "react";

const ThirdSection = ({}) => {
  const items = [
    {
      title: "Web development",
      image: `url('/images/icons/linux.svg')`,
      desc: `The building and maintenance of websites.
             It's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.`,
    },
    {
      title: "Devops",
      image: `url('/images/icons/www.svg')`,
      desc: `The combination of cultural philosophies, practices,
             and tools that increases an organization's ability to deliver applications and services at high velocity.`,
    },
    {
      title: "Design ",
      image: `url('/images/icons/design.svg')`,
      desc: `Building a design from scratch or refinement of the current one. The embodiment of ideas and inspiration, filled with the latest trends and innovations.`,
    },
  ];

  return (
    <section
      id="about-section"
      className="py-40 bg-green-50"
      data-scroll-section
    >
      <Box
        component="section"
        sx={(theme) => ({
          backgroundColor: theme.palette.common.white,
          width: "100%",
          position: "relative",
        })}
      >
        <Box
          id="about"
          sx={(theme) => ({
            width: "100%",
            maxWidth: "1140px",
            margin: "0 auto",
            display: "flex",
            flexFlow: "row wrap",
            alignItems: "flex-top",
            position: "relative",
          })}
        >
          <Grid container>
            <Grid item md={5}>
              <div
                className="text-5xl font-extrabold"
                data-scroll
                data-scroll-sticky
                data-scroll-target="#about"
              >
                333 About
                <Typography variant="h1">Продукты ZEVS</Typography>
              </div>
            </Grid>
            <Grid item md={7}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                corporis deserunt commodi magni modi quas earum aut saepe
                inventore, corrupti optio in autem alias molestiae labore rerum
                soluta tenetur quo.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                corporis deserunt commodi magni modi quas earum aut saepe
                inventore, corrupti optio in autem alias molestiae labore rerum
                soluta tenetur quo.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                corporis deserunt commodi magni modi quas earum aut saepe
                inventore, corrupti optio in autem alias molestiae labore rerum
                soluta tenetur quo.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                corporis deserunt commodi magni modi quas earum aut saepe
                inventore, corrupti optio in autem alias molestiae labore rerum
                soluta tenetur quo.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                corporis deserunt commodi magni modi quas earum aut saepe
                inventore, corrupti optio in autem alias molestiae labore rerum
                soluta tenetur quo.
              </p>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </section>
  );
};

export { ThirdSection };
