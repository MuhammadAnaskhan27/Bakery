
import { CardActionArea, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import React from "react";
import card1 from "../assets/birthday.jpg"
import QuestionMark from '../assets/questionmark.png'
// import card2 from "../assets/birthday.png"

const OcassionBday = () => {
    const OcassionBday = [

        {
            image: card1,
            title: 'BIRTHDAY CAKE 2lbs',
            amount: 'RS 1200'
        },
        {
            image: card1,
            title: 'BIRTHDAY CAKE 2LBS',
            amount: 'RS 3000'
        },
        {
            image: QuestionMark,
            title: 'CUSTOMIZE',
            amount: 'RS 3500'
        },
    ]
    return (

        <Box sx={{
            paddingTop: "25px",
            paddingBottom: "25px"
        }}>
            <Typography sx={{
                backgroundColor: "seagreen",
                width: "100%",
                textAlign: "center",
            }}>OCASSION BIRTHDAY</Typography>


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

                {OcassionBday.map((OcassionBday) => (
                    <Card key={OcassionBday} sx={{
                        borderRadius: "30px",

                        width: "300px",
                        height: "270px",
                        padding: "20px"
                    }} >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="230"
                                image={OcassionBday.image}

                            />
                            <CardContent>
                                <Typography gutterBottom variant="h9" component="div" textAlign="center">
                                    {OcassionBday.title}
                                </Typography>
                                <Typography gutterBottom variant="h9" component="div" textAlign="center">
                                    {OcassionBday.amount}
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

                {OcassionBday.map((OcassionBday) => (
                    <Card key={OcassionBday} sx={{
                        borderRadius: "30px",

                        width: "300px",
                        height: "270px",
                        padding: "20px"
                    }} >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="230"
                                image={OcassionBday.image}

                            />
                            <CardContent>
                                <Typography gutterBottom variant="h9" component="div" textAlign="center">
                                    {OcassionBday.title}
                                </Typography>
                                <Typography gutterBottom variant="h9" component="div" textAlign="center">
                                    {OcassionBday.amount}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))
                }
            </Box>
        </Box >

    )


}

export default OcassionBday