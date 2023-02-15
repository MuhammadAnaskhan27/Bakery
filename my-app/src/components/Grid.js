import * as React from 'react';
import { Box, } from '@mui/system';
import Grid from '@mui/material/Grid';
import { Avatar } from '@mui/material';
import Typography from '@mui/material/Typography';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';




export default function BasicGrid() {
  return (
        <>  
        <Box sx={{display:'flex',height:'150px',width:'1000px',paddingBottom:'80px',margin:'auto'}}>
      <Avatar sx={{width:'200px',height:'200px',borderRadius:'50%',position:'relative',right:'-35px',bottom:'20px'}}variant='rounded'>
        <PointOfSaleIcon/>
        </Avatar> 
        <Grid sx={{bgcolor:"pink",borderRadius:'25px',width:'1200px'}}>
            <Typography sx={{paddingTop:'50px',paddingLeft:'10px',position:'relative',right:'-40px'}}>PRODUCTION</Typography>
          <Typography sx={{paddingLeft:'30px',textAlign:'center',position:'relative',left:'-10px',fontSize:'15px'}}>
            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADISPISCING ELIT, SED DO EISUMUD TEMPOR 
          </Typography>
          <Typography sx={{paddingLeft:'30px',position:'relative',right:'-20px',fontSize:'15px'}}>
          INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA UT ENIM AD MINIM VENIAM, QUIS
          </Typography>
        </Grid>
        </Box>
        <Box sx={{display:'flex',height:'150px',width:'1000px',paddingBottom:'100px',paddingLeft:'100px',margin:'auto'}}>
        <Grid sx={{bgcolor:"pink",borderRadius:'25px',width:'1200px'}}>
            <Typography sx={{paddingTop:'50px',paddingLeft:'10px',position:'relative',right:'-40px'}}>PRODUCTION</Typography>
          <Typography sx={{paddingLeft:'30px',textAlign:'center',position:'relative',left:'-10px',fontSize:'15px'}}>
            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADISPISCING ELIT, SED DO EISUMUD TEMPOR 
          </Typography>
          <Typography sx={{paddingLeft:'30px',position:'relative',right:'-20px',fontSize:'15px'}}>
          INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA UT ENIM AD MINIM VENIAM, QUIS
          </Typography>
        </Grid>
        <Avatar sx={{width:'200px',height:'200px',borderRadius:'50%',position:'relative',left:'-35px',bottom:'20px'}}variant='rounded'>
        <PointOfSaleIcon/>
        </Avatar>       
        </Box>
        <Box sx={{display:'flex',height:'150px',width:'1000px',paddingBottom:'80px',margin:'auto'}}>
      <Avatar sx={{width:'200px',height:'200px',borderRadius:'50%',position:'relative',right:'-35px',bottom:'20px'}}variant='rounded'>
        <PointOfSaleIcon/>
        </Avatar> 
        <Grid sx={{bgcolor:"pink",borderRadius:'25px',width:'1200px'}}>
            <Typography sx={{paddingTop:'50px',paddingLeft:'10px',position:'relative',right:'-40px'}}>PRODUCTION</Typography>
          <Typography sx={{paddingLeft:'30px',textAlign:'center',position:'relative',left:'-10px',fontSize:'15px'}}>
            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADISPISCING ELIT, SED DO EISUMUD TEMPOR 
          </Typography>
          <Typography sx={{paddingLeft:'30px',position:'relative',right:'-20px',fontSize:'15px'}}>
          INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA UT ENIM AD MINIM VENIAM, QUIS
          </Typography>
        </Grid>
        </Box>
        <Box sx={{display:'flex',height:'150px',width:'1000px',paddingBottom:'100px',paddingLeft:'100px',margin:'auto'}}>
        <Grid sx={{bgcolor:"pink",borderRadius:'25px',width:'1200px'}}>
            <Typography sx={{paddingTop:'50px',paddingLeft:'10px',position:'relative',right:'-40px'}}>PRODUCTION</Typography>
          <Typography sx={{paddingLeft:'30px',textAlign:'center',position:'relative',left:'-10px',fontSize:'15px'}}>
            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADISPISCING ELIT, SED DO EISUMUD TEMPOR 
          </Typography>
          <Typography sx={{paddingLeft:'30px',position:'relative',right:'-20px',fontSize:'15px'}}>
          INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA UT ENIM AD MINIM VENIAM, QUIS
          </Typography>
        </Grid>
        <Avatar sx={{width:'200px',height:'200px',borderRadius:'50%',position:'relative',left:'-35px',bottom:'20px'}}variant='rounded'>
        <PointOfSaleIcon/>
        </Avatar>       
        </Box>
        </>
    
    
  );
}