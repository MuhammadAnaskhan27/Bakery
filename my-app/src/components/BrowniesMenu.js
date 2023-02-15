
import { CardActionArea, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import React from "react";
import card1 from "../assets/brownie1.png"
import card2 from "../assets/brownie2.png"
import card3 from "../assets/brownie3.png"
import card4 from "../assets/brownie4.png"
import card5 from "../assets/brownie5.png"
import card6 from "../assets/brownie6.png"
import card7 from "../assets/brownie7.png"
import card8 from "../assets/brownie8.png"
import card9 from "../assets/brownie9.png"
import Footer from "./Footer";

const BrowniesMenu = () => {
    const BrowniesMenu = [

        {
            image: card1,
            title: 'CLASSIC BROWNIE',
            amount: 'RS 125'
        },
        {
            image: card2,
            title: 'CLASSIC FUDGE BROWNIE',
            amount: 'RS 175'
        },
        {
            image: card3,
            title: 'DOUBLE FUDGE BROWNIE',
            amount: 'RS 150'
        },
        {
            image: card4,
            title: 'LEMON BLONDIES',
            amount: 'RS 125'
        },
        {
            image: card5,
            title: 'COFFEE TOFFEE BROWNIE',
            amount: 'RS 400'
        },

        {
            image: card6,
            title: "FUDGY DATE BROWNIE",
            amount: 'RS 300'
        },
        {
            image: card7,
            title: "NUTELLA BROWNIE",
            amount: 'RS 275'
        },
        {
            image: card8,
            title: "CHOCOLATE AND PEANUT BUTTER BROWNIE",
            amount: 'RS 300'
        },
        {
            image: card9,
            title: "CHOCOLATE CARAMEL BROWNIE",
            amount: 'RS 250'
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
            }}>BrowniesMenu</Typography> */}


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

                    {BrowniesMenu.map((BrowniesMenu) => (
                        <Card key={BrowniesMenu} sx={{
                            borderRadius: "30px",

                            width: "300px",
                            height: "280px",
                            padding: "20px"
                        }} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="230"
                                    image={BrowniesMenu.image}

                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h9" component="div" textAlign="center">
                                        {BrowniesMenu.title}
                                    </Typography>
                                    <Typography gutterBottom variant="h9" component="div" textAlign="center">
                                        {BrowniesMenu.amount}
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

                    {BrowniesMenu.map((BrowniesMenu) => (
                        <Card key={BrowniesMenu} sx={{
                            borderRadius: "30px",

                            width: "300px",
                            height: "280px",
                            padding: "20px"
                        }} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="230"
                                    image={BrowniesMenu.image}

                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h9" component="div" textAlign="center">
                                        {BrowniesMenu.title}
                                    </Typography>
                                    <Typography gutterBottom variant="h9" component="div" textAlign="center">
                                        {BrowniesMenu.amount}
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

export default BrowniesMenu