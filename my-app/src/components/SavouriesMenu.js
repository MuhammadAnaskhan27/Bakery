
import { CardActionArea, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import React from "react";
import card1 from "../assets/featured5.png"
import card2 from "../assets/chicken_lasagnia.png"
import card3 from "../assets/featured1.png"
import card4 from "../assets/featured2.png"
import card5 from "../assets/featured4.png"
import card6 from "../assets/featured6.png"
import card7 from "../assets/vol ao vent.png"
import Footer from "./Footer";


const SavouriesMenu = () => {
    const SavouriesMenu = [

        {
            image: card1,
            title: 'CHICKEN BREAD',
            amount: 'RS 1200'
        },
        {
            image: card2,
            title: 'CHICKEN LASAGNIA',
            amount: 'RS 3000'
        },
        {
            image: card3,
            title: 'BEEF LASAGNIA',
            amount: 'RS 3500'
        },
        {
            image: card4,
            title: 'CHICKEN STUFFED BUN',
            amount: 'RS 250'
        },
        {
            image: card5,
            title: 'CHICKEN POT PIE',
            amount: 'RS 3000'
        },

        {
            image: card6,
            title: "SHEPHERD'S PIE",
            amount: 'RS 3000'
        },
        {
            image: card7,
            title: "VOL AU VENT",
            amount: 'RS 100'
        }
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
            }}>SavouriesMenu</Typography> */}


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

                    {SavouriesMenu.map((SavouriesMenu) => (
                        <Card key={SavouriesMenu} sx={{
                            borderRadius: "30px",

                            width: "300px",
                            height: "270px",
                            padding: "20px"
                        }} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="230"
                                    image={SavouriesMenu.image}

                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h9" component="div" textAlign="center">
                                        {SavouriesMenu.title}
                                    </Typography>
                                    <Typography gutterBottom variant="h9" component="div" textAlign="center">
                                        {SavouriesMenu.amount}
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

                    {SavouriesMenu.map((SavouriesMenu) => (
                        <Card key={SavouriesMenu} sx={{
                            borderRadius: "30px",

                            width: "300px",
                            height: "270px",
                            padding: "20px"
                        }} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="230"
                                    image={SavouriesMenu.image}

                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h9" component="div" textAlign="center">
                                        {SavouriesMenu.title}
                                    </Typography>
                                    <Typography gutterBottom variant="h9" component="div" textAlign="center">
                                        {SavouriesMenu.amount}
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

export default SavouriesMenu