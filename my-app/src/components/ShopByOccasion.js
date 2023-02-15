
import React from 'react'
import ResponsiveAppBar from './Appbar'
import product1 from '../assets/ShopByOccasion.png'
import { Typography } from '@mui/material'
import { Container } from '@mui/system'



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

        }}>Shop By Occasion</Typography>
      </Container>
    </>
  )
}

export default Production