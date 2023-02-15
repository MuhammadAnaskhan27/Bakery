
import { CardActionArea, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import React from "react";
import card1 from "../assets/desert1.png"
import card2 from "../assets/desert2.png"
import card3 from "../assets/desert3.png"
import card4 from "../assets/desert4.png"
import Footer from "./Footer";

const DesertsMenu = () => {
    const DesertsMenu = [

        {
            image: card1,
            title: 'TRESLECHES',
            amount: 'RS 350'
        },
        {
            image: card2,
            title: 'CHOCOLATE MOUSSE',
            amount: 'RS 400'
        },
        {
            image: card3,
            title: 'TIRAMISU',
            amount: 'RS 450'
        },
        {
            image: card4,
            title: 'MAD INDULGENCE',
            amount: 'RS 500'
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
            }}>DesertsMenu</Typography> */}


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

                    {DesertsMenu.map((DesertsMenu) => (
                        <Card key={DesertsMenu} sx={{
                            borderRadius: "30px",

                            width: "300px",
                            height: "270px",
                            padding: "20px"
                        }} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="230"
                                    image={DesertsMenu.image}

                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h9" component="div" textAlign="center">
                                        {DesertsMenu.title}
                                    </Typography>
                                    <Typography gutterBottom variant="h9" component="div" textAlign="center">
                                        {DesertsMenu.amount}
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

                    {DesertsMenu.map((DesertsMenu) => (
                        <Card key={DesertsMenu} sx={{
                            borderRadius: "30px",

                            width: "300px",
                            height: "270px",
                            padding: "20px"
                        }} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="230"
                                    image={DesertsMenu.image}

                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h9" component="div" textAlign="center">
                                        {DesertsMenu.title}
                                    </Typography>
                                    <Typography gutterBottom variant="h9" component="div" textAlign="center">
                                        {DesertsMenu.amount}
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

export default DesertsMenu