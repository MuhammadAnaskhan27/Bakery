
import { CardActionArea, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import React from "react";
import card1 from "../assets/cookies1.png"
import card2 from "../assets/cookies2.png"
import card3 from "../assets/cookies3.png"
import card4 from "../assets/cookies4.png"
import card5 from "../assets/cookies5.png"
import card6 from "../assets/cookies6.png"
import card7 from "../assets/cookies7.png"
import card8 from "../assets/cookies8.png"
import card9 from "../assets/cookies9.png"
import card10 from "../assets/cookies10.png"
import card11 from "../assets/cookies11.png"
import card12 from "../assets/cookies12.png"
import card13 from "../assets/cookies13.png"
import Footer from "./Footer";

const CookiesMenu = () => {
    const CookiesMenu = [

        {
            image: card1,
            title: 'CHOCOLATE CHIP COOKIES',
            amount: 'RS 200'
        },
        {
            image: card2,
            title: 'LEMON CRINKLE COOKIES',
            amount: 'RS 200'
        },
        {
            image: card3,
            title: 'PEANUT BUTTER COOKIES',
            amount: 'RS 250'
        },
        {
            image: card4,
            title: 'CHEWY GEWY CHOCOLATE CHIP COOKIES',
            amount: 'RS 240'
        },
        {
            image: card5,
            title: 'DOUBLE CHOCOLATE CHUNK COOKIES',
            amount: 'RS 300'
        },

        {
            image: card6,
            title: "PEANUT BUTTER ROCKY ROAD COOKIES",
            amount: 'RS 400'
        },
        {
            image: card7,
            title: "M&M COOKIES",
            amount: 'RS 300'
        },
        {
            image: card8,
            title: "RED VELVET COOKIES",
            amount: 'RS 250'
        },
        {
            image: card9,
            title: "NUTELLA STUFFED COOKIES",
            amount: 'RS 300'
        },
        {
            image: card10,
            title: "ALMOND FLOUR CHOCOLATE CHIP COOKIES",
            amount: 'RS 100'
        },
        {
            image: card11,
            title: "PEANUT BUTTER AND BANANA OATMEAL COOKIES",
            amount: 'RS 300'
        },
        {
            image: card12,
            title: "CHOCOLATE CHIP OATMEAL COOKIES",
            amount: 'RS 200'
        },
        {
            image: card13,
            title: "LOTUS STUFFED COOKIES",
            amount: 'RS 300'
        },
    ]
    return (
        <>
            <Box sx={{
                paddingTop: "25px",
                paddingBottom: "25px"
            }}>
                {/* <Typography sx={{
                backgroundColor: "seagreen",
                width: "100%",
                textAlign: "center",
            }}>CookiesMenu</Typography> */}


                <Box sx={{
                    // flexGrow: 1,
                    paddingTop: "15px",
                    alignContent: "center",
                    gap: 1,
                    display: { xs: "none", md: "Grid" },
                    justifyContent: "center",
                    paddingBottom: "20px",
                    gridTemplateColumns: "auto auto auto",
                    gridTemplateRows: "auto",
                    columnGap: "30px",
                    rowGap: "30px"

                }}>

                    {CookiesMenu.map((CookiesMenu) => (
                        <Card key={CookiesMenu} sx={{
                            borderRadius: "30px",

                            width: "300px",
                            height: "270px",
                            padding: "20px"
                        }} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="233"
                                    image={CookiesMenu.image}

                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h9" component="div" textAlign="center">
                                        {CookiesMenu.title}
                                    </Typography>
                                    <Typography gutterBottom variant="h9" component="div" textAlign="center">
                                        {CookiesMenu.amount}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))
                    }
                </Box>

                {/* RESPONSIVE FOR GRID */}
                <Box sx={{
                    // flexGrow: 1,
                    paddingTop: "15px",
                    alignContent: "center",
                    gap: 1,
                    display: { xs: "Grid", md: "none" },
                    justifyContent: "center",
                    paddingBottom: "20px",
                    gridTemplateColumns: "auto ",
                    gridTemplateRows: "auto ",
                    columnGap: "30px",
                    rowGap: "30px"

                }}>

                    {CookiesMenu.map((CookiesMenu) => (
                        <Card key={CookiesMenu} sx={{
                            borderRadius: "30px",

                            width: "300px",
                            height: "280px",
                            padding: "20px"
                        }} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="230"
                                    image={CookiesMenu.image}

                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h9" component="div" textAlign="center">
                                        {CookiesMenu.title}
                                    </Typography>
                                    <Typography gutterBottom variant="h9" component="div" textAlign="center">
                                        {CookiesMenu.amount}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))
                    }
                </Box>
            </Box >
            <Footer />
        </>
    )


}

export default CookiesMenu