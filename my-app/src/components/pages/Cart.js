import React from 'react'
import ResponsiveAppBar from '../Appbar'
import { Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import RadioGroup from '@mui/material/RadioGroup'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Footer from '../Footer'

const Cart = () => {
    return (
        <>
            <ResponsiveAppBar />
           
            <Container>

                <Typography
                    sx={{
                        textAlign: 'center',
                        paddingTop: '20px',
                        fontWeight: 'bold',
                        fontSize: '30px',
                        color: '#004d40'
                    }}>
                    Personal Information
                </Typography>
                <TextField
                    variant="outlined"
                    placeholder='FIRST NAME'
                    sx={{
                        // paddingLeft: '25px',
                        width: '100%',
                        paddingTop: '15px'
                    }}
                />
                <TextField
                    variant="outlined"
                    placeholder='LAST NAME'
                    sx={{
                        width: '100%',
                        // paddingLeft: '25px',
                        paddingTop: '15px'
                    }}
                />
                <TextField
                    variant="outlined"
                    placeholder='EMAIL'
                    sx={{
                        // paddingLeft: '25px',
                        width: '100%',
                        paddingTop: '10px'
                    }}
                />
                <TextField variant='outlined'
                    placeholder='PHONE NUMBER'
                    sx={{
                        // paddingLeft: '25px',
                        width: '100%',
                        paddingTop: '10px'
                    }}
                />
                <TextField
                    variant='outlined'
                    multiline
                    rows={3}

                    placeholder='ADDRESS'
                    sx={{

                        width: '100%',
                        // paddingLeft: '25px',
                        paddingTop: '10px'
                    }}
                />
                <Container>
                    <Typography sx={{
                        textAlign: 'center',
                        fontSize: '30px',
                        fontWeight: 'bold',
                        paddingTop: '30px',
                        color: '#004d40'
                    }}>
                        Payment Method
                    </Typography>
                    <FormControl sx={{ padding: '30px' }}>
                        <FormLabel ></FormLabel>
                        <RadioGroup>
                            <FormControlLabel value="CASH ON DELIVERY" control={<Radio />} label="CASH ON DELIVERY" />
                            <FormControlLabel value="male" control={<Radio />} label="CREDIT / DEBIT CARD" />
                        </RadioGroup>
                    </FormControl>
                </Container>
                <Container sx={{ paddingBottom: '30px' }}>
                    <Button
                        variant='contained'
                        size='large'
                        sx={{
                            width: '50%',
                            color: 'white',
                            background: '#004d40',
                            right: '-25%',

                        }}
                    >CHECKOUT
                    </Button>
                </Container>
            </Container>
            <Footer />
        </>
    )
}

export default Cart