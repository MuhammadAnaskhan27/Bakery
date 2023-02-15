import React from 'react'
import ResponsiveAppBar from '../Appbar'
import descriptionImg from '../assets/brownie1.png'
import { Container } from '@mui/system'
import { Card, Typography } from '@mui/material'
import Counter2 from '../Counter2'
import RelatedProducts2 from '../RelatedProducts2'
import Footer from '../Footer'


const Description2 = () => {
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
              THESE ARE SO MOIST AND CHEWY THAT U DON'T NEED ANY TOPPING TO GO ON IT.
            </Typography>
        </Container>
        <Container>
          <Typography sx={{ fontSize: '30px', fontWeight: 'bold' }}>CLASSIC BROWNIE</Typography>
          <Typography sx={{ fontWeight: 'bold' }}>RS. 125 / EACH</Typography>
          <Typography sx={{ fontWeight: 'bold' }}>QUANTITY</Typography>
          <Counter2 />
        </Container>
      </Container>
      <Typography sx={{textAlign:'center',paddingTop:'50px',fontSize:'40px'}}>
        Related Products
      </Typography>
      <RelatedProducts2/>
      <Footer/>
      

    </>
  )
}

export default Description2