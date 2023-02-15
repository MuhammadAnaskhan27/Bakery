import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';

import card1 from '../assets/Deal3.png'
import card3 from '../assets/brownie.png'
import card2 from '../assets/vol ao vent.png'
import { Box } from '@mui/system';


export default function TrendingProducts() {
    const TrendingProducts = [
        {
            image: card1,
            title: 'Deal 3',
            subtitle: 'RS XXX',
        },
        {
            image: card3,
            title: 'Classic Fudge Brownies',
            subtitle: 'RS 175',
        },
        {
            image: card2,
            title: 'Vol Au Vent',
            subtitle: 'RS 100',
        }
    ]
    return (
        <Box sx={{
            paddingTop: "175px"
        }}><Container sx={{
            borderRadius: '20px',
            backgroundColor: "pink",

        }}>
                <Typography textAlign="center"
                    sx={{
                        fontWeight: "Bold",
                        padding: '20px',
                        fontSize: '30px',
                        color: '#314D3E'
                    }}>
                    Trending Products
                </Typography>
                <Container sx={{
                    paddingTop: "20px",
                    display: { xs: 'none', md: 'flex' },
                    flexGrow: 1,
                    justifyContent: "space-around",
                    paddingBottom: "20px"
                }}>
                    {TrendingProducts.map((TrendingProducts) => (
                        <Card key={TrendingProducts} sx={{
                            width: "300px",
                            padding: "20px",
                            borderRadius: '30px',
                            color: '#343F3B',

                        }} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="230"
                                    image={TrendingProducts.image}

                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center'}}>
                                        {TrendingProducts.title}
                                    </Typography>
                                    <Typography variant="body2" color="#777E77" sx={{textAlign:'center'}}>
                                        {TrendingProducts.subtitle}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))
                    }
                </Container>


                {/* RESPONSIVE FOR PHONE */}

                <Container sx={{
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
                    {TrendingProducts.map((TrendingProducts) => (
                        <Card key={TrendingProducts} sx={{
                            width: "300px",
                            padding: "20px",
                            borderRadius: '30px',
                            color: '#343F3B'

                        }} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="230"
                                    image={TrendingProducts.image}

                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {TrendingProducts.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {TrendingProducts.subtitle}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))
                    }
                </Container>
            </Container>
        </Box>
    );
}