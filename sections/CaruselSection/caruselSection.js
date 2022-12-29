import { Item } from "./item/item";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Virtual, Navigation, Pagination]);

export const CaruselSection = ({}) => {
  const items = [
    {
      // name: "Для владельцев электромобилей",
      desc: "сложность доступа к станциям (большое количество приложений)",
      position: "Для владельцев электромобилей",
      photo: "./images/car.png",
      // contact: "email",
    },
    {
      desc: "сложность поиска, бронирования станций и маршрутизации к ним",
      position: "Для владельцев электромобилей",
      photo: "./images/car-2.png",
    },
    {
      desc: "отсутствие возможно общаться в другими владельцами внутри сервиса",
      position: "Для владельцев электромобилей",
      photo: "./images/car-3.png",
    },
    {
      desc: "невозможность автоматизированной оплаты услуг (подключил и ушел)",
      position: "Для владельцев электромобилей",
      photo: "./images/car-5.png",
    },
    {
      desc: "неправомерное размещение транспортных средств на парковочных местах для зарядки электромобилей",
      position: "Для владельцев электромобилей",
      photo: "./images/car-4.png",
    },
    {
      // Для владельцев зарядных станций
      desc: "стабильность работы зарядных станций",
      position: "Для владельцев зарядных станций",
      photo: "",
    },
    {
      desc: "стабильность мониторинга и управления зарядных станций",
      position: "Для владельцев зарядных станций",
      photo: "",
    },
    {
      desc: "приобретение популярности своих зарядных станций",
      position: "Для владельцев зарядных станций",
      photo: "",
    },
    {
      desc: "отсутствие дополнительного дохода от зарядных станций",
      position: "Для владельцев зарядных станций",
      photo: "",
    },
    {
      desc: "неправомерное размещение транспортных средств на парковочных местах для зарядки электромобилей",
      position: "Для владельцев зарядных станций",
      photo: "",
    },
  ];

  return (
    <section id="carusel-section">
      <Box
        sx={(theme) => ({
          backgroundColor: theme.palette.common.white,
          width: "100%",
          position: "relative",
          display: "flex",
          paddingBottom: "100px",
        })}
      >
        <Box
          sx={(theme) => ({
            width: "100%",
            maxWidth: "1150px",
            margin: "0 auto",
            display: "flex",
            flexFlow: "row wrap",
            position: "relative",
          })}
        >
          <Box
            sx={(theme) => ({
              width: "100%",
              margin: "0 auto",
              display: "flex",
              flexFlow: "column nowrap",
              position: "relative",
              alignItems: "center",
            })}
          >
            <Typography variant="h1" sx={{ textAlign: "center" }}>
              Почему GreenGo
            </Typography>
            <Typography variant="subtitle2" component="div">
              Мы решаем проблемы:
            </Typography>
            <Box
              sx={(theme) => ({
                width: "100%",
                margin: "0 auto",
                display: "flex",
                flexFlow: "row wrap",
                position: "relative",
              })}
            >
              <Grid
                item
                container
                justifyContent="space-between"
                display={{ xs: "none", lg: "block" }}
                sx={() => ({
                  marginTop: "55px",
                  position: "relative",
                })}
              >
                <Swiper
                  slidesPerView={4}
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                  navigation={true}
                >
                  {items.map((item, i) => (
                    <SwiperSlide key={i}>
                      <Item item={item} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Grid>
              <Grid
                item
                container
                justifyContent="space-between"
                display={{ xs: "block", lg: "none" }}
                sx={() => ({
                  marginTop: "55px",
                  position: "relative",
                })}
              >
                <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                  navigation={true}
                >
                  {items.map((item, i) => (
                    <SwiperSlide key={i}>
                      <Item item={item} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};
