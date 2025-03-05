import React from 'react';
import { Divider, Grid, Paper } from "@mui/material";
import { Box } from "@/components/ui/box/box"
import { Typography } from "@mui/material";
import image from "@/assets/images/Rectangle 1 (1).png";
import pageTitle from "@/assets/images/title.jpeg";
import picture31 from "@/assets/images/Picture3 1.png";
import rectangle12 from "@/assets/images/jono.png";
import rectangle13 from "@/assets/images/Rectangle 1 (3).png";
import rectangle1 from "@/assets/images/Rectangle 1.png";
import cardiffUniversityLogo1 from "@/assets/images/Cardiff_University_(logo) 1.svg";

const AboutUsRoot = (): React.JSX.Element => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            bgcolor="white"
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    px: { xs: 2, sm: 4, md: 8, lg: 12 },  
                    py: { xs: 4, sm: 8, md: 12 },
                    backgroundColor: '#00000099',
                    backgroundImage: `url(${pageTitle})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '251px',
                        width: '100%',
                        borderRadius: '5px',
                        overflow: 'hidden',
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontFamily: 'Inter-Bold, Helvetica',
                            fontWeight: 'bold',
                            color: 'variable-collection-light',
                            fontSize: '64px',
                            textAlign: 'center',
                        }}
                    >
                        ABOUT US
                    </Typography>
                    <Divider
                        sx={{
                            width: '100%',
                            height: '3px',
                            backgroundColor: 'variable-collection-primary',
                            my: 2,
                            mx: 'auto'
                        }}
                    />
                    <Typography
                        variant="body1"
                        sx={{
                            fontFamily: 'Inter-Regular, Helvetica',
                            fontWeight: 'normal',
                            color: 'variable-collection-light',
                            fontSize: '2rem',
                            textAlign: 'center',
                            px: { xs: 2, sm: 4 },
                        }}
                    >
                        Cras non metus sollicitudin, aliquam ipsum a, semper tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </Typography>
                </Box>
            </Box>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                gap={3}
                px={{ xs: 2, sm: 4, md: 8 }}
                py={{ xs: 4, sm: 6, md: 8 }}
                bgcolor="rgba(207, 223, 227, 1)"
                width="100%"
            >
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12} sm={6} md={3} >
                        <Paper
                            elevation={3}
                            sx={{
                                display: "flex",
                                alignItems: "flex-end",
                                justifyContent: "flex-end",
                                p: 3,
                                bgcolor: "rgba(17, 94, 115, 1)",
                                borderRadius: 1,
                            }}
                        >
                            <Typography
                                variant="h1"
                                fontWeight="bold"
                                color="rgba(255, 255, 255, 1)"
                                textAlign="right"
                            >
                                MEET
                                <br /> THE
                                <br /> TEAM
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Box display="flex" alignItems="flex-end" py={1.5}>
                            <Box
                                component="img"
                                src={rectangle1}
                                alt="Rectangle"
                                width={191}
                            />
                            <Box display="flex" flexDirection="column" pl={3}>
                                <Typography
                                    variant="h5"
                                    fontWeight="bold"
                                    color="rgba(0, 0, 0, 1)"
                                >
                                    MIKE
                                </Typography>
                                <Typography variant="h5" color="rgba(0, 0, 0, 1)">
                                    Research <br />
                                    Fellow
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box display="flex" alignItems="flex-end" py={1.5}>
                            <Box component="img" src={image} alt="Rectangle" width={191} />
                            <Box display="flex" flexDirection="column" pl={3}>
                                <Typography
                                    variant="h5"
                                    fontWeight="bold"
                                    color="rgba(0, 0, 0, 1)"
                                >
                                    LISA
                                </Typography>
                                <Typography variant="h5" color="rgba(0, 0, 0, 1)">
                                    Research Associate <br />
                                    in Glaciology
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={3}>
                        <Box display="flex" alignItems="flex-end" py={1.5}>
                            <Box
                                component="img"
                                src={rectangle12}
                                alt="Rectangle"
                                width={191}
                            />
                            <Box display="flex" flexDirection="column" pl={3}>
                                <Typography
                                    variant="h5"
                                    fontWeight="bold"
                                    color="rgba(0, 0, 0, 1)"
                                >
                                    JONO
                                </Typography>
                                <Typography variant="h5" color="rgba(0, 0, 0, 1)">
                                    Research Associate <br />
                                    in Electronic <br />
                                    Engineering for <br />
                                    Glaciology
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box display="flex" alignItems="flex-end" py={1.5}>
                            <Box
                                component="img"
                                src={rectangle13}
                                alt="Rectangle"
                                width={191}
                            />
                            <Box display="flex" flexDirection="column" pl={3}>
                                <Typography
                                    variant="h5"
                                    fontWeight="bold"
                                    color="rgba(0, 0, 0, 1)"
                                >
                                    PAUL
                                </Typography>
                                <Typography variant="h5" color="rgba(0, 0, 0, 1)">
                                    Technician and <br />
                                    Lab Manager
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                gap={2.5}
                px={50}
                py={12.5}
                bgcolor="white"
                width="100%"
            >
                <Box display="flex" alignItems="flex-start" gap={2.5} width="100%">
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        gap={2.5}
                        p={2.5}
                        bgcolor="white"
                    >
                        <Typography
                            variant="h1"
                            fontWeight="bold"
                            color="rgba(0, 0, 0, 1)"
                            textAlign="right"
                        >
                            WHERE <br />
                            WE’RE <br />
                            WORKING
                        </Typography>
                        <Paper
                            elevation={3}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                p: 2.5,
                                bgcolor: "rgba(17, 94, 115, 1)",
                                borderRadius: 1,
                            }}
                        >
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                color="rgba(255, 255, 255, 1)"
                                textAlign="right"
                            >
                                CANADA
                            </Typography>
                        </Paper>
                        <Paper
                            elevation={3}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                p: 2.5,
                                bgcolor: "rgba(207, 223, 227, 1)",
                                borderRadius: 1,
                            }}
                        >
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                color="rgba(0, 0, 0, 1)"
                                textAlign="right"
                            >
                                GREENLAND
                            </Typography>
                        </Paper>
                    </Box>
                    <Divider
                        orientation="vertical"
                        flexItem
                        sx={{ bgcolor: "rgba(17, 94, 115, 1)" }}
                    />
                    <Box
                        display="flex"
                        alignItems="center"
                        gap={2.5}
                        p={2.5}
                        flex={1}
                        bgcolor="white"
                    >
                        <Box component="img" src={picture31} alt="Picture" width={338.4} />
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            gap={2.5}
                            p={2.5}
                            flex={1}
                            bgcolor="white"
                        >
                            <Typography variant="body1" color="rgba(0, 0, 0, 1)">
                                Vestibulum a lorem nulla. Maecenas quis metus est. Morbi viverra
                                scelerisque lacus, nec viverra augue cursus tincidunt. Cras
                                velit mauris, porta non porttitor non, cursus non ligula. Etiam
                                magna metus, porta et venenatis quis, imperdiet sodales orci.
                                Etiam tempor metus eu rutrum congue. Praesent pellentesque neque
                                eu erat blandit finibus. Morbi ut sapien convallis, pharetra
                                libero consectetur, facilisis nunc. Pellentesque in ligula ac
                                velit imperdiet dignissim at vel massa. Cras accumsan
                                ullamcorper laoreet. Integer molestie, lorem et sodales maximus,
                                ligula ex iaculis lorem, id rutrum mi metus in diam. Vestibulum
                                ultricies, diam a blandit consequat, felis ante maximus eros, a
                                rutrum ipsum eros et metus. Cras quis nibh urna.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={3}
                px={50}
                py={12.5}
                bgcolor="rgba(207, 223, 227, 1)"
                width="100%"
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    gap={3}
                    width="100%"
                    borderRadius={1}
                >
                    <Box
                        display="flex"
                        alignItems="center"
                        gap={3}
                        width="100%"
                        borderRadius={1}
                    >
                        <Typography
                            variant="h1"
                            fontWeight="bold"
                            color="rgba(0, 0, 0, 1)"
                            textAlign="right"
                        >
                            WHAT WE DO
                        </Typography>
                        <Divider
                            orientation="vertical"
                            flexItem
                            sx={{ bgcolor: "rgba(17, 94, 115, 1)" }}
                        />
                        <Typography variant="body1" color="rgba(0, 0, 0, 1)" flex={1}>
                            Integer id varius enim. Proin magna ipsum, pulvinar accumsan
                            sapien at, mattis condimentum erat. Duis accumsan quam et urna
                            sagittis, sit amet tincidunt mauris aliquam. Aliquam vulputate
                            erat arcu, eu euismod purus aliquet a. Donec eget accumsan dui, et
                            placerat leo. Etiam rutrum, magna at consequat euismod, mi mauris
                            maximus magna, in rhoncus elit risus ornare enim. <br />
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
                    </Box>
                </Box>
            </Box>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={3}
                px={50}
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
                        alignItems="center"
                        gap={2.5}
                        pl={3}
                        pr={2.5}
                        flex={1}
                    >
                        <Typography variant="h5" fontWeight="bold" color="rgba(0, 0, 0, 1)">
                            Cardiff Uni
                        </Typography>
                        <Typography variant="body1" color="rgba(0, 0, 0, 1)">
                            Quisque pharetra nulla sodales lectus vestibulum pharetra. Donec
                            tempus, felis eget luctus auctor, mauris odio vehicula metus, eu
                            consequat quam felis ut felis. Ut mattis, mi ac tempus ultrices,
                            justo nulla porta lacus, sit amet ultrices libero nibh at nisl.
                            Phasellus malesuada tincidunt sem, id interdum erat varius sed.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export { AboutUsRoot }