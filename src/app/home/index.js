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
import NextLink from "next/link";
const Home = () => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const classes = useStyles();
  return (
    <Box>
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
                        <NextLink href="#section2">
                          <Typography
                            style={{
                              fontSize: isMobile ? 18 : isTablet ? 24 : 24,
                              textAlign: isTablet ? "center" : "left",
                              fontWeight: 700,
                              cursor: "pointer",
                            }}
                          >
                            Kenapa kita harus berqurban?
                          </Typography>
                        </NextLink>

                        <NextLink href="#section2">
                          <Box
                            width="30px"
                            height="30px"
                            position="relative"
                            style={{
                              margin: "auto",
                              marginTop: 10,
                              cursor: "pointer",
                            }}
                          >
                            <NextImage
                              src="/images/arrow.png"
                              layout="fill"
                              priority={true}
                            />
                          </Box>
                        </NextLink>
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

      {/* //! Section2 */}
      <Box bgcolor="primary.light" id="section2">
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
                      lineHeight: isMobile ? "30px" : "70px",
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
                  <Box width="90%" height="400px" position="relative">
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

      {/* //! Keutamaan1 */}
      <Box bgcolor="primary.main" py={isTablet ? 10 : 0}>
        <Container>
          <Grid container direction="row-reverse">
            <Grid item xs={12} md={7}>
              <Box
                display="flex"
                height="100%"
                alignItems="center"
                pl={isTablet ? 0 : 2}
              >
                <Box>
                  {/* //! Title Keutamaan1*/}
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent={isTablet ? "center" : "left"}
                  >
                    <Box
                      mr={isMobile ? 1 : 2}
                      width={isMobile ? "30px" : "50px"}
                      height={isMobile ? "30px" : "50px"}
                      position="relative"
                    >
                      <NextImage
                        src="/images/number1.png"
                        layout="fill"
                        objectFit="contain"
                        priority={true}
                        alt="camel"
                        flexShrink={0}
                      />
                    </Box>
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
                        lineHeight: isMobile ? "30px" : "70px",
                      }}
                    >
                      Meningkatkan Taqwa
                    </Typography>
                  </Box>

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
                          src="/images/qurban2.png"
                          layout="fill"
                          objectFit="contain"
                          priority={true}
                          alt="camel"
                        />
                      </Box>
                    </Box>
                  </Hidden>
                  <Box mt={isTablet ? 4 : 6}>
                    <Typography
                      style={{
                        fontSize: isMobile ? 18 : isTablet ? 24 : 24,
                        textAlign: isTablet ? "center" : "left",
                        fontWeight: 500,
                      }}
                    >
                      “Sesungguhnya Allah hanya menerima (kurban) dari
                      orang-orang yang bertaqwa”.
                      <Box mt={5}>QS. Al Maidah ayat 27</Box>
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
                  <Box width="90%" height="400px" position="relative">
                    <NextImage
                      src="/images/qurban2.png"
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

      {/* //! Keutamaan2 */}
      <Box bgcolor="primary.light" py={isTablet ? 10 : 0}>
        <Container>
          <Grid container>
            <Grid item xs={12} md={7}>
              <Box display="flex" height="100%" alignItems="center">
                <Box>
                  {/* //! Title Keutamaan2 */}
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent={isTablet ? "center" : "left"}
                  >
                    <Box
                      mr={isMobile ? 1 : 2}
                      width={isMobile ? "30px" : "50px"}
                      height={isMobile ? "30px" : "50px"}
                      position="relative"
                    >
                      <NextImage
                        src="/images/number2.png"
                        layout="fill"
                        objectFit="contain"
                        priority={true}
                        alt="camel"
                        flexShrink={0}
                      />
                    </Box>
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
                        lineHeight: isMobile ? "30px" : "70px",
                      }}
                    >
                      Menambah amal kebaikan
                    </Typography>
                  </Box>

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
                          src="/images/qurban3.png"
                          layout="fill"
                          objectFit="contain"
                          priority={true}
                          alt="camel"
                        />
                      </Box>
                    </Box>
                  </Hidden>
                  <Box mt={isTablet ? 4 : 6}>
                    <Typography
                      style={{
                        fontSize: isMobile ? 18 : isTablet ? 24 : 24,
                        textAlign: isTablet ? "center" : "left",
                        fontWeight: 500,
                      }}
                    >
                      “Pada setiap lembar bulunya itu kita memperoleh satu
                      kebaikan.”
                      <Box mt={5}>Hadist Riwayat Ahmad dan Ibnu Majah</Box>
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
                  <Box width="90%" height="400px" position="relative">
                    <NextImage
                      src="/images/qurban3.png"
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

      {/* //! Keutamaan3 */}
      <Box bgcolor="primary.main" py={isTablet ? 10 : 0}>
        <Container>
          <Grid container direction="row-reverse">
            <Grid item xs={12} md={7}>
              <Box display="flex" height="100%" alignItems="center">
                <Box>
                  {/* //! Title Keutamaan3 */}
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent={isTablet ? "center" : "left"}
                  >
                    <Box
                      mr={isMobile ? 1 : 2}
                      width={isMobile ? "30px" : "50px"}
                      height={isMobile ? "30px" : "50px"}
                      position="relative"
                    >
                      <NextImage
                        src="/images/number3.png"
                        layout="fill"
                        objectFit="contain"
                        priority={true}
                        alt="camel"
                      />
                    </Box>
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
                        lineHeight: isMobile ? "30px" : "70px",
                      }}
                    >
                      Sebagai Syiar Agama
                    </Typography>
                  </Box>

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
                          src="/images/qurban4.png"
                          layout="fill"
                          objectFit="contain"
                          priority={true}
                          alt="camel"
                        />
                      </Box>
                    </Box>
                  </Hidden>
                  <Box mt={isTablet ? 4 : 6}>
                    <Typography
                      style={{
                        fontSize: isMobile ? 18 : isTablet ? 24 : 24,
                        textAlign: isTablet ? "center" : "left",
                        fontWeight: 500,
                      }}
                    >
                      Umat Muslim yang melaksanakan kurban sudah turut serta
                      menyebarkan pesan atau syiar agama, yaitu tentang
                      kewajiban berkurban yang diperintahkan Allah kepada Nabi
                      Ibrahim dan anaknya Nabi Ismail.
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
                  <Box width="90%" height="500px" position="relative">
                    <NextImage
                      src="/images/qurban4.png"
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

      {/* //! Keutamaan4 */}
      <Box bgcolor="primary.light" py={isTablet ? 10 : 0}>
        <Container>
          <Grid container>
            <Grid item xs={12} md={7}>
              <Box display="flex" height="100%" alignItems="center">
                <Box>
                  {/* //! Title Keutamaan4 */}
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent={isTablet ? "center" : "left"}
                  >
                    <Box
                      mr={isMobile ? 1 : 2}
                      width={isMobile ? "30px" : "50px"}
                      height={isMobile ? "30px" : "50px"}
                      position="relative"
                      display="block"
                      flexShrink={0}
                    >
                      <NextImage
                        src="/images/number4.png"
                        layout="fill"
                        objectFit="contain"
                        priority={true}
                        alt="camel"
                      />
                    </Box>
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
                        lineHeight: isMobile ? "30px" : "70px",
                      }}
                    >
                      Sebagai Aksi Sosial dan Kemanusiaan
                    </Typography>
                  </Box>

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
                          src="/images/qurban5.png"
                          layout="fill"
                          objectFit="contain"
                          priority={true}
                          alt="camel"
                        />
                      </Box>
                    </Box>
                  </Hidden>
                  <Box mt={isTablet ? 4 : 6}>
                    <Typography
                      style={{
                        fontSize: isMobile ? 18 : isTablet ? 24 : 24,
                        textAlign: isTablet ? "center" : "left",
                        fontWeight: 500,
                      }}
                    >
                      Melalui berkurban kita dapat menghubungkan rasa kasih
                      sayang dan kepedulian antara fakir miskin dengan golongan
                      orang yang mampu
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
                  <Box width="90%" height="500px" position="relative">
                    <NextImage
                      src="/images/qurban5.png"
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
      {/* //! Keutamaan5 */}
      <Box bgcolor="primary.main" py={isTablet ? 10 : 0}>
        <Container>
          <Grid container direction="row-reverse">
            <Grid item xs={12} md={7}>
              <Box display="flex" height="100%" alignItems="center">
                <Box>
                  {/* //! Title Keutamaan5 */}
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent={isTablet ? "center" : "left"}
                  >
                    <Box
                      mr={isMobile ? 1 : 2}
                      width={isMobile ? "30px" : "50px"}
                      height={isMobile ? "30px" : "50px"}
                      position="relative"
                    >
                      <NextImage
                        src="/images/number5.png"
                        layout="fill"
                        objectFit="contain"
                        priority={true}
                        alt="camel"
                        flexShrink={0}
                      />
                    </Box>
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
                        lineHeight: isMobile ? "30px" : "70px",
                      }}
                    >
                      Sebagai Tanda Bersyukur
                    </Typography>
                  </Box>

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
                          src="/images/qurban6.png"
                          layout="fill"
                          objectFit="contain"
                          priority={true}
                          alt="camel"
                        />
                      </Box>
                    </Box>
                  </Hidden>
                  <Box mt={isTablet ? 4 : 6}>
                    <Typography
                      style={{
                        fontSize: isMobile ? 18 : isTablet ? 24 : 24,
                        textAlign: isTablet ? "center" : "left",
                        fontWeight: 500,
                      }}
                    >
                      Dengan berqurban secara tidak langsung seluruh masyarakat
                      masih dapat merasakan nikmat dan berkah kebaikan dari
                      Allah meskipun sedang dalam keadaan sulit.
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
                  <Box width="90%" height="500px" position="relative">
                    <NextImage
                      src="/images/qurban6.png"
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
      {/* //! end */}

      {/* //! Tunggu apalagi */}
      <Box
        bgcolor="primary.light"
        display="flex"
        justifyContent="center"
        alignItems="center"
        py={10}
      >
        <Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent={isTablet ? "center" : "left"}
          >
            <Typography
              style={{
                fontSize: isMobile ? 24 : isTablet ? 46 : isMedium ? 42 : 56,
                textAlign: isTablet ? "center" : isMedium ? "left" : "left",
                fontWeight: 700,
              }}
            >
              Tunggu Apalagi?
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" mt={1}>
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
        </Box>
      </Box>
      {/* //! end tunggu apalagi */}

      {/* //! Copyright */}
      <Box
        bgcolor="primary.main"
        display="flex"
        justifyContent="center"
        py={2}
        style={{ color: "rgba(255, 255, 255, 0.4)" }}
      >
        &copy; Copyright 2021 rezadwiputra.tech
      </Box>
    </Box>
  );
};

export default Home;
