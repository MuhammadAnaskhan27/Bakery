import React from 'react'
import ResponsiveAppBar from '../Appbar'
import descriptionImg from '../assets/vol ao vent.png'
import { Container } from '@mui/system'
import { Card, Typography } from '@mui/material'
import Counter from '../Counter'
import RelatedProducts from '../RelatedProducts'
import Footer from '../Footer'


const Description = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Container sx={{ display: 'flex', paddingTop: '40px' }}>
        <Container >
          <Card >
            <img src={descriptionImg} alt="" width='100%' />
          </Card>
          <Typography sx={{paddingTop:'10px',fontWeight:'bold'}}>
              DESCRIPTION
            </Typography>
            <Typography sx={{paddingBottom:'20px'}}>
              A SMALL HOLLOW CASE OF PUFF PASTRY WITH VARIED FILLINGS AVAILABLE.
            </Typography>
        </Container>
        <Container>
          <Typography sx={{ fontSize: '30px', fontWeight: 'bold' }}>VOL AO VENT</Typography>
          <Typography sx={{ fontWeight: 'bold' }}>RS. 100 / EACH</Typography>
          <Typography sx={{ fontWeight: 'bold' }}>QUANTITY</Typography>
          <Counter width='100%' />
        </Container>
      </Container>
      <Typography sx={{textAlign:'center',paddingTop:'50px',fontSize:'40px'}}>
        Related Products
      </Typography>
      <RelatedProducts/>
      <Footer/>
      

    </>
  )
}

export default Description