import React from 'react'
import banner from '../assets/banner.png'
import bake from '../assets/bake.png'
import { Container } from '@mui/material'
import Typography from '@mui/material/Typography'
import './Styles/Home.css'
import ResponsiveAppBar from '../Appbar'



const Home = () => {
    return (

        <>
            <ResponsiveAppBar />
            <div className='home'>
                <img className='img' src={banner} alt="bannerimg" />
            </div>
            <Container sx={{ border: 'solid', padding: '20px', borderRadius: '25px', color: '#004d40' }}>
                <Typography sx={{ textAlign: 'center', fontWeight: 'bold', color: '#004d40', fontSize: '30px' }}>
                    WHY WHEN I BAKE
                </Typography>
                <Typography sx={{ textAlign: 'center', padding: '10px', color: '#004d40' }}>
                    OUR CAKES DONOT PRESERVATIVES OR CHEMICALS ADDED TO THE CAKE BASE TO MAKE IT LAST LONGER, <br />
                    OR FOR ANY OTHER RESULT. <br />
                    WE MAKE THE CAKE AS CUSTOM ORDER - WITH THE REQUESTED COLORS,DESIGN,WRITINGS,FONDANT TOPPERS, AND EVEN <br />
                    VARIOUS TREND WHICH ARE CURRENTLY USED - GLAZES,DRIPS,GOLD LEAVES , PINATA CAKES, EDIBLE PRINTS ETC. <br />
                    THE INGREDIENTS USED AS CUSTOMER REQUIREMENTS - IT TAKES INTO ACCOUNT ALLERGY OR DIETRIES CONSTRAINTS. THE <br />
                    THE HYGIENE LEVELS OF OUR HOME KITCHEN ARE MUCH BETTER AND SAFER THAN A COMMERCIAL BAKING SPACE.
                </Typography>
                <div className='img-div'>
                    <img className='bakeimg' src={bake} alt="bake" />
                </div>
            </Container>
        </>


    )
}

export default Home