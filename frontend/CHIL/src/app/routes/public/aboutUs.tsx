import React, { useState } from "react";
import { Container, Divider, Grid2 as Grid, Paper, Stack } from "@mui/material";
import { Box } from "@/components/ui/box/box";
import { Typography } from "@mui/material";
import image from "@/assets/images/Rectangle 1 (1).png";
import pageTitle from "@/assets/images/title.jpeg";
import picture31 from "@/assets/images/Picture3 1.png";
import rectangle12 from "@/assets/images/jono.png";
import rectangle13 from "@/assets/images/Rectangle 1 (3).png";
import rectangle1 from "@/assets/images/Rectangle 1.png";
import cardiffUniversityLogo1 from "@/assets/images/Cardiff_University_(logo) 1.svg";
import { Button } from "@mui/material";

const teamMembers = [
  {
    id: 1,
    name: "MIKE",
    position: "Research\nFellow",
    image: rectangle1,
    gridArea: "mike",
  },
  {
    id: 2,
    name: "LISA",
    position: "Research Associate\nin Glaciology",
    image: image,
    gridArea: "lisa",
  },
  {
    id: 3,
    name: "JONO",
    position: "Research Associate\nin Electronic\nEngineering for\nGlaciology",
    image: rectangle12,
    gridArea: "jono",
  },
  {
    id: 4,
    name: "PAUL",
    position: "Technician and\nLab Manager",
    image: rectangle13,
    gridArea: "paul",
  },
];

const locations = [
  { id: 1, name: "CANADA", selected: true },
  { id: 2, name: "GREENLAND", selected: false },
];

const AboutUsRoot = (): React.JSX.Element => {
  const [activeLocation, setActiveLocation] = useState("CANADA");
  return (
    <Box sx={{ display: "flex", flexDirection: "column", bgcolor: "white" }}>
      {/* page title with background image */}
      <Box
        sx={{
          width: "100%",
          height: "451px",
          position: "relative",
          background: `url(${pageTitle}) no-repeat center center`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >

        <Box
          sx={{
            maxWidth: "1537px",
            textAlign: "center",
            padding: { xs: 2, md: 4 },
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: "white",
              fontWeight: "bold",
              fontSize: { xs: "2.5rem", md: "4rem" },
              textTransform: "uppercase",
              marginBottom: 2,
            }}
          >
            ABOUT US
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "white",
              maxWidth: "800px",
              margin: "0 auto",
              fontSize: { xs: "1rem", md: "1.1rem" },
            }}
          >
            Cras non metus sollicitudin, aliquam ipsum a, semper tortor. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </Typography>
        </Box>
      </Box>
     

      {/* Meet the team section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
          padding: { xs: "25px 10px", md: "100px 50px" },
          bgcolor: "lightCyan",
        }}
      >
        <Grid container spacing={3} sx={{ width: "100%" }}>
          <Grid container size={{ xs: 12, md: 4 }}>
            <Paper
              elevation={0}
              sx={{
                bgcolor: "primary.main",
                borderRadius: "5px",
                p: 3,
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                overflow: "hidden",
              }}
            >
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 700,
                  color: "common.white",
                  fontSize: { xs: "48px", md: "64px" },
                  textAlign: "right",
                  lineHeight: 1.1,
                }}
              >
                MEET
                <br /> THE
                <br /> TEAM
              </Typography>
            </Paper>
          </Grid>
          {/* Mike and Lisa - Top Row */}
          {teamMembers.slice(0, 2).map((member) => (
            <Grid container size={{ xs: 12, md: 4 }} key={member.id}>
              <Stack direction="row" alignItems="flex-end" py={1.5}>
                <Box
                  component="img"
                  src={member.image}
                  alt={`${member.name} photo`}
                  sx={{
                    width: "191px",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <Stack pl={3} spacing={1}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: "black",
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 400,
                      color: "black",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {member.position}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
        {/* Jono and Paul - Bottom Row */}
        <Grid
          container
          spacing={3}
          justifyContent="center"
          sx={{ width: "100%" }}
        >
          {teamMembers.slice(2, 4).map((member) => (
            <Grid container size={{ xs: 12, md: 4 }} key={member.id}>
              <Stack direction="row" alignItems="flex-end" py={1.5}>
                <Box
                  component="img"
                  src={member.image}
                  alt={`${member.name} photo`}
                  sx={{
                    width: "191px",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <Stack pl={3} spacing={1}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: "black",
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 400,
                      color: "black",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {member.position}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* Where we're working section */}
      <Box
        component="section"
        sx={{ width: "100%", bgcolor: "background.paper", py: 12.5 }}
      >
        <Container maxWidth="xl">
          <Stack direction="row" spacing={5}>
            <Stack spacing={2.5} alignItems="flex-start">
              <Typography
                variant="h1"
                fontWeight="bold"
                fontSize={50}
                lineHeight={1.2}
                textAlign="right"
                color="black"
              >
                WHERE <br />
                WE&apos;RE <br />
                WORKING
              </Typography>
              {locations.map((location) => (
                <Button
                  key={location.id}
                  fullWidth
                  variant="contained"
                  onClick={() => setActiveLocation(location.name)}
                  sx={{
                    p: 1.5,
                    borderRadius: "5px",
                    justifyContent: "center",
                    bgcolor:
                      activeLocation === location.name ? "#00717F" : "#D3D3D3",
                    color:
                      activeLocation === location.name
                        ? "common.white"
                        : "black",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    textAlign: "center",
                    "&:hover": {
                      bgcolor:
                        activeLocation === location.name
                          ? "#005f6b"
                          : "#C0C0C0",
                    },
                  }}
                >
                  {location.name}
                </Button>
              ))}
            </Stack>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ bgcolor: "primary.main", width: 3 }}
            />
            <Stack direction="row" spacing={2.5} flex={1} p={2.5}>
              <Box
                component="img"
                src={picture31}
                alt="Working location"
                sx={{
                  width: 338.4,
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <Paper elevation={0} sx={{ p: 2.5, flex: 1, overflow: "hidden" }}>
                {activeLocation === "CANADA" ? (
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.1rem",
                      color: "black",
                      flex: 1,
                      mt: -0.375,
                    }}
                  >
                    {/* Canada content */}
                    Canada Vestibulum a lorem nulla. Maecenas quis metus est.
                    Morbi viverra scelerisque lacus, nec viverra augue cursus
                    tincidunt. Cras velit mauris, porta non porttitor non,
                    cursus non ligula. Etiam magna metus, porta et venenatis
                    quis, imperdiet sodales orci. Etiam tempor metus eu rutrum
                    congue. Praesent pellentesque neque eu erat blandit finibus.
                    Morbi ut sapien convallis, pharetra libero consectetur,
                    facilisis nunc. Pellentesque in ligula ac velit imperdiet
                    dignissim at vel massa. Cras accumsan ullamcorper laoreet.
                    Integer molestie, lorem et sodales maximus, ligula ex
                    iaculis lorem, id rutrum mi metus in diam. Vestibulum
                    ultricies, diam a blandit consequat, felis ante maximus
                    eros, a rutrum ipsum eros et metus. Cras quis nibh urna.
                  </Typography>
                ) : activeLocation === "GREENLAND" ? (
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.1rem",
                      color: "black",
                      flex: 1,
                      mt: -0.375,
                    }}
                  >
                    {/* Greenland content */}
                    Greenland is known for its vast ice sheets and rugged
                    terrain. With its unique geographic and climatic conditions,
                    Greenland offers researchers a unique environment to study
                    climate change, glaciology, and marine biology. The
                    country’s ice cores provide valuable data for understanding
                    past climate patterns and their impact on global warming.
                    Scientists in Greenland focus on glacial dynamics, ice melt,
                    and the effects of climate change on the Arctic ecosystem.
                  </Typography>
                ) : null}
              </Paper>
            </Stack>
          </Stack>
        </Container>
      </Box>
      {/* What we do section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          py: 12.5,
          px: { xs: 10, md: 20, lg: 30 },
          bgcolor: "lightCyan",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1440px",
            borderRadius: "5px",
            overflow: "hidden",
            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{
              height: "576px",
              width: "100%",
              borderRadius: "5px",
              overflow: "hidden",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "2.5rem",
                textAlign: "right",
                color: "black",
                whiteSpace: "nowrap",
              }}
            >
              WHAT WE DO
            </Typography>
            <Divider orientation="vertical" sx={{ bgcolor: "primary.main" }} />
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                color: "black",
                flex: 1,
                mt: -0.375,
              }}
            >
              Integer id varius enim. Proin magna ipsum, pulvinar accumsan
              sapien at, mattis condimentum erat. Duis accumsan quam et urna
              sagittis, sit amet tincidunt mauris aliquam. Aliquam vulputate
              erat arcu, eu euismod purus aliquet a. Donec eget accumsan dui, et
              placerat leo. Etiam rutrum, magna at consequat euismod, mi mauris
              maximus magna, in rhoncus elit risus ornare enim.
              <br />
              <br />
              Vestibulum a lorem nulla. Maecenas quis metus est. Morbi viverra
              scelerisque lacus, nec viverra augue cursus tincidunt. Cras velit
              mauris, porta non porttitor non, cursus non ligula. Etiam magna
              metus, porta et venenatis quis, imperdiet sodales orci. Etiam
              tempor metus eu rutrum congue. Praesent pellentesque neque eu erat
              blandit finibus. Morbi ut sapien convallis, pharetra libero
              consectetur, facilisis nunc. Pellentesque in ligula ac velit
              imperdiet dignissim at vel massa. Cras accumsan ullamcorper
              laoreet. Integer molestie, lorem et sodales maximus, ligula ex
              iaculis lorem, id rutrum mi metus in diam. Vestibulum ultricies,
              diam a blandit consequat, felis ante maximus eros, a rutrum ipsum
              eros et metus. Cras quis nibh urna.
            </Typography>
          </Stack>
        </Box>
      </Box>
      {/* Collaborators section */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={2}
        px={10}
        py={12.5}
        bgcolor="white"
        width="100%"
      >
        <Typography
          variant="h1"
          fontWeight="bold"
          color="rgba(0, 0, 0, 1)"
          textAlign="center"
        >
          COLLABORATORS
        </Typography>
        <Divider sx={{ bgcolor: "rgba(17, 94, 115, 1)" }} />
        <Box
          display="flex"
          alignItems="center"
          gap={2.5}
          width="100%"
          borderRadius={1}
        >
          <Box
            component="img"
            src={cardiffUniversityLogo1}
            alt="Cardiff university"
            width={260.94}
          />
          <Box
            display="flex"
            flexDirection="column"
            gap={2.5}
            pl={3}
            pr={2.5}
            flex={1}
            width="100%"
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              color="rgba(0, 0, 0, 1)"
              textAlign="left"
            >
              Cardiff Uni
            </Typography>
            <Typography variant="body1" color="rgba(0, 0, 0, 1)">
              Located in the heart of Wales's capital city, is a distinguished
              Russell Group institution renowned for its commitment to
              research-led education and its global impact. Established with a
              rich history dating back to the 19th century, the university
              fosters a vibrant academic community, attracting students and
              scholars from around the world. With a strong emphasis on
              innovation and collaboration, Cardiff University strives to
              address pressing societal challenges, contributing significantly
              to advancements across diverse fields.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { AboutUsRoot };
