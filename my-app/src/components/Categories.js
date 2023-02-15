import { Typography } from '@mui/material'
import React from 'react'
import Savouries from '../assets/savouriescat.png'
import Cookies from '../assets/cookies1.png'
import '../components/Styles/CategoriesMenu.css'
import Brownies from '../assets/brownie2.png'
import Desert from '../assets/banner.png'

const Categories = () => {
  return (
    <>
    <div>
        <Typography sx={{
            fontSize:'30px',
            textAlign:'center',
        }}>
            Categories
        </Typography>
        <div className='categories-menu'>
        <div>
            <img className='categoriesmenu-img' src={Savouries} alt="" />
            <Typography sx={{textAlign:'center',color:'#4E5D58',fontWeight:'bold',fontSize:'20px'}}>SAVOURIES</Typography>
        </div>
        <div>
            <img className='categoriesmenu-img' src={Cookies} alt="" />
            <Typography sx={{textAlign:'center',color:'#4E5D58',fontWeight:'bold',fontSize:'20px'}}>COOKIES</Typography>
        </div>
        <div>
            <img className='categoriesmenu-img' src={Brownies} alt="" />
            <Typography sx={{textAlign:'center',color:"#4E5D58",fontWeight:'bold',fontSize:'20px'}}>BROWNIES</Typography>
        </div>
        <div>
            <img className='categoriesmenu-img' src={Desert} alt="" />
            <Typography sx={{textAlign:'center',color:'#4E5D58',fontWeight:'bold',fontSize:'20px'}}>DESERTS</Typography>
        </div>
        </div>
    </div>
    </>
  )
}

export default Categories