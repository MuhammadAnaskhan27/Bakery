
import { CardActionArea, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import React from "react";
import card1 from "../assets/corporatedeal.png"
import card2 from "../assets/corporatedeal.png"
import card3 from "../assets/corporatedeal.png"
import card4 from "../assets/corporatedeal.png"
import card5 from "../assets/corporatedeal.png"
import card6 from "../assets/corporatedeal.png"
import card7 from "../assets/corporatedeal.png"
import Footer from "./Footer";

const CorporateDealsMenu = () => {
    const CorporateDealsMenu = [

        {
            image: card1,
            title: 'DEAL 1',
            amount: 'RS XXX'
        },
        {
            image: card2,
            title: 'DEAL 2',
            amount: 'RS XXX'
        },
        {
            image: card3,
            title: 'DEAL 3',
            amount: 'RS XXX'
        },
        {
            image: card4,
            title: 'DEAL 4',
            amount: 'RS XXX'
        },
        {
            image: card5,
            title: 'DEAL 5',
            amount: 'RS XXX'
        },

        {
            image: card6,
            title: "DEAL 6",
            amount: 'RS XXX'
        },
        {
            image: card7,
            title: "DEAL 7",
            amount: 'RS XXX'
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
            }}>CorporateDealsMenu</Typography> */}


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

                    {CorporateDealsMenu.map((CorporateDealsMenu) => (
                        <Card key={CorporateDealsMenu} sx={{
                            borderRadius: "30px",

                            width: "250px",
                            height: "230px",
                            padding: "20px"
                        }} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={CorporateDealsMenu.image}

                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h9" component="div" textAlign="center">
                                        {CorporateDealsMenu.title}
                                    </Typography>
                                    <Typography gutterBottom variant="h9" component="div" textAlign="center">
                                        {CorporateDealsMenu.amount}
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

                    {CorporateDealsMenu.map((CorporateDealsMenu) => (
                        <Card key={CorporateDealsMenu} sx={{
                            borderRadius: "30px",

                            width: "300px",
                            height: "270px",
                            padding: "20px"
                        }} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="230"
                                    image={CorporateDealsMenu.image}

                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h9" component="div" textAlign="center">
                                        {CorporateDealsMenu.title}
                                    </Typography>
                                    <Typography gutterBottom variant="h9" component="div" textAlign="center">
                                        {CorporateDealsMenu.amount}
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

export default CorporateDealsMenu