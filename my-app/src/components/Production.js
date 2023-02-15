
import React from 'react'
import ResponsiveAppBar from './Appbar'
import product1 from '../assets/production1.png'
import {  Typography } from '@mui/material'
import { Container } from '@mui/system'
import Footer from './Footer'
import Grid from '../components/Grid'


const Production = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Container sx={{
        padding: '20px',
        position: 'relative',
        textAlign: 'center',
      }}>
        <img src={product1} alt="product" width='100%' />

        <Typography sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          fontWeight: 'bold',
          fontSize: '36px',
          color: 'white',
          paddingBottom: '30px',

        }}>PRODUCTION PROCESS</Typography>

        <Typography sx={{ paddingTop: '20px', color: '#004d40' }}>
          THE BEST INGREDIENT DESERVE TOP-QUALITY PROCESSING AND PASTRY CHEF <br />
          MAESTRO DESERVE TOP-NOTCH EQUIPMENT AND CUTTING-EDGE TECHNOLOGY TO <br />
          ENSURE THAT THE CAKES RETAIN THEIR UNIQUE TASTE AND FRESHNESS WITHOUT <br />
          UNNECESSARY PRESERVATIVES OR OTHER ADDITIVES.
        </Typography>
      </Container>
      <Grid/>
      <Footer />
    </>
  )
}

export default Production