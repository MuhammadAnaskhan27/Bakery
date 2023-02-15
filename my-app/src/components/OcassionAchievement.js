
import { CardActionArea, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import React from "react";
import card1 from "../assets/congragulations.jpg"
import QuestionMark from '../assets/questionmark.png'
import Footer from "./Footer";
// import card2 from "../assets/birthday.png"

const OcassionAchievement = () => {
    const OcassionAchievement = [

        {
            image: card1,
            title: 'CONGRAGULATIONS CAKE 2lbs',
            amount: 'RS 1200'
        },
        {
            image: card1,
            title: 'CONGRAGULATIONS CAKE 2LBS',
            amount: 'RS 3000'
        },
        {
            image: QuestionMark,
            title: 'CUSTOMIZED PRODUCT',
            amount: 'RS 3500'
        },
    ]
    return (
        <>

            <Box sx={{
                paddingTop: "25px",
                paddingBottom: "25px"
            }}>
                <Typography sx={{
                    backgroundColor: "seagreen",
                    width: "100%",
                    textAlign: "center",
                }}>ACHIEVEMENT CELEBRATION</Typography>


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

                    {OcassionAchievement.map((OcassionAchievement) => (
                        <Card key={OcassionAchievement} sx={{
                            borderRadius: "30px",

                            width: "300px",
                            height: "270px",
                            padding: "20px"
                        }} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="230"
                                    image={OcassionAchievement.image}

                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h9" component="div" textAlign="center">
                                        {OcassionAchievement.title}
                                    </Typography>
                                    <Typography gutterBottom variant="h9" component="div" textAlign="center">
                                        {OcassionAchievement.amount}
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

                    {OcassionAchievement.map((OcassionAchievement) => (
                        <Card key={OcassionAchievement} sx={{
                            borderRadius: "30px",

                            width: "300px",
                            height: "270px",
                            padding: "20px"
                        }} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="230"
                                    image={OcassionAchievement.image}

                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h9" component="div" textAlign="center">
                                        {OcassionAchievement.title}
                                    </Typography>
                                    <Typography gutterBottom variant="h9" component="div" textAlign="center">
                                        {OcassionAchievement.amount}
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

export default OcassionAchievement