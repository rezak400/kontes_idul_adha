import {
  Box,
  Typography,
  Grid,
  Button,
  Container,
  Hidden,
} from "@material-ui/core";
import React from "react";
import useStyles from "./Style";
import NextImage from "next/image";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Home = () => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const classes = useStyles();
  return (
    <>
      <Box bgcolor="primary.main">
        <Grid container>
          <Grid item xs={12} md={7}>
            <Container>
              <Box
                display="flex"
                justifyContent="center"
                pt={isMobile ? 10 : isTablet ? 14 : 16}
                pb={isTablet ? 8 : 0}
              >
                <Box>
                  <Typography
                    style={{
                      fontSize: isMobile
                        ? 24
                        : isTablet
                        ? 46
                        : isMedium
                        ? 48
                        : 56,
                      textAlign: isTablet
                        ? "center"
                        : isMedium
                        ? "left"
                        : "left",
                      fontWeight: 700,
                    }}
                  >
                    Selamat Hari Raya
                    <span style={{ display: "block" }}>
                      Idul Adha 1442 Hijriah
                    </span>
                  </Typography>

                  <Hidden mdUp>
                    <Box
                      mt={2}
                      width="100%"
                      height="170px"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Box width="100%" height="100%" position="relative">
                        <NextImage
                          src="/images/untaMobile.png"
                          layout="fill"
                          objectFit="contain"
                          priority={true}
                          alt="camel"
                        />
                      </Box>
                    </Box>
                  </Hidden>

                  <Box
                    mt={3}
                    display="flex"
                    justifyContent={isTablet ? "center" : ""}
                  >
                    <Button
                      variant="contained"
                      style={{ backgroundColor: theme.palette.secondary.main }}
                    >
                      <Typography
                        style={{
                          textTransform: "capitalize",
                          fontSize: isMobile ? 14 : 20,
                          fontWeight: 600,
                        }}
                      >
                        Yuk kita Qurban!
                      </Typography>
                    </Button>
                  </Box>

                  {/* //! WHY */}
                  <Box mt={isTablet ? 5 : isMedium ? 10 : 16}>
                    <Box
                      display="flex"
                      justifyContent={isTablet ? "center" : "left"}
                    >
                      <Box>
                        <Typography
                          style={{
                            fontSize: isMobile ? 18 : isTablet ? 24 : 24,
                            textAlign: isTablet ? "center" : "left",
                            fontWeight: 700,
                          }}
                        >
                          Kenapa kita harus berqurban?
                        </Typography>
                        <Box
                          width="30px"
                          height="30px"
                          position="relative"
                          style={{
                            margin: "auto",
                            marginTop: 10,
                          }}
                        >
                          <NextImage src="/images/arrow.png" layout="fill" />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Container>
          </Grid>

          {/* //! unta di kanan khusus dekstop */}
          <Hidden smDown>
            <Grid item xs={0} md={5}>
              <Box width="100%" height="100vh" position="relative">
                <NextImage
                  src="/images/unta.png"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                  alt="camel"
                />
              </Box>
            </Grid>
          </Hidden>
        </Grid>
      </Box>

      {/* //! 2 */}
      <Box bgcolor="primary.light">
        <Container>
          <Grid container>
            <Grid item xs={12} md={7}>
              <Box
                display="flex"
                justifyContent="center"
                pt={isMobile ? 6 : isTablet ? 12 : 14}
                pb={isTablet ? 8 : 0}
              >
                <Box>
                  <Typography
                    style={{
                      fontSize: isMobile
                        ? 24
                        : isTablet
                        ? 46
                        : isMedium
                        ? 42
                        : 56,
                      textAlign: isTablet
                        ? "center"
                        : isMedium
                        ? "left"
                        : "left",
                      fontWeight: 700,
                    }}
                  >
                    Kenapa harus qurban
                    <span style={{ display: "block" }}>
                      di Hari Raya Idul Adha?
                    </span>
                  </Typography>
                  <Box
                    height={isMobile ? "5px" : "10px"}
                    width="60%"
                    style={{
                      backgroundColor: theme.palette.secondary.main,
                      margin: isTablet ? "auto" : "",
                      marginTop: isMobile ? 20 : 10,
                    }}
                  ></Box>

                  {/* //! gmabar tengah */}
                  <Hidden mdUp>
                    <Box
                      mt={3}
                      width="100%"
                      height="170px"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Box width="100%" height="100%" position="relative">
                        <NextImage
                          src="/images/qurban1.png"
                          layout="fill"
                          objectFit="contain"
                          priority={true}
                          alt="camel"
                        />
                      </Box>
                    </Box>
                  </Hidden>
                  <Box mt={isTablet ? 4 : 16}>
                    <Typography
                      style={{
                        fontSize: isMobile ? 18 : isTablet ? 24 : 24,
                        textAlign: isTablet ? "center" : "left",
                        fontWeight: 700,
                      }}
                    >
                      Ada beberapa keutamaan kenapa kita harus berqurban di Hari
                      Raya, yuk simak dibawah
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Hidden smDown>
              <Grid item xs={0} md={5}>
                <Box
                  width="100%"
                  height="100vh"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Box width="100%" height="400px" position="relative">
                    <NextImage
                      src="/images/qurban1.png"
                      layout="fill"
                      objectFit="contain"
                      priority={true}
                      alt="camel"
                    />
                  </Box>
                </Box>
              </Grid>
            </Hidden>
          </Grid>
        </Container>
      </Box>

      <Box height="100vh" bgcolor="primary.main">
        tes
      </Box>
      <Box height="100vh" bgcolor="primary.light">
        tes
      </Box>
      <Box height="100vh" bgcolor="primary.main">
        tes
      </Box>
      <Box height="100vh" bgcolor="primary.light">
        tes
      </Box>
    </>
  );
};

export default Home;
