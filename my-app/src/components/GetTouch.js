import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Typography } from '@mui/material'
import Container from '@mui/material/Container'
import { textAlign } from '@mui/system'

const GetTouch = () => {
    return (
        <>
            <Typography sx={{

                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: "30px",
                paddingTop: '20px',
                color: '#004d40'
            }}>
                Get In Touch
            </Typography>
            <Container sx={{
                paddingBottom: '30px',
                background: '#c8e6c9',

            }}>
                <Typography sx={{
                    paddingTop: '20px',
                    textAlign: 'center',
                    color: '#004d40'
                }}>
                    WE LOOK FORWARD TO YOUR FEEDBACK ON ALL ASPECTS OF OUR PRODUCTS AND SERVICES
                </Typography>
                <Typography sx={{ textAlign: 'center', color: "#004d40" }}>
                    IF YOU HAVE ANY QUERIES, DO GET IN TOUCH WITH US.
                </Typography>

                <TextField variant='outlined'
                    placeholder='FULL NAME'
                    sx={{
                        width: '100%',
                        paddingTop: "15px",
                        // paddingLeft: "30px",
                    }}
                ></TextField>
                <TextField variant='outlined'
                    placeholder='E-MAIL'
                    sx={{
                        width: '100%',
                        paddingTop: "15px",
                        // paddingLeft: "30px",
                    }}
                ></TextField>

                <TextField variant='outlined'
                    placeholder='PHONE NUMBER'
                    sx={{
                        width: '100%',
                        paddingTop: "15px",
                        // paddingLeft: '30px',

                    }}
                ></TextField>
                <TextField variant='outlined'
                    placeholder='MESSAGE'
                    multiline
                    rows={6}
                    sx={{
                        width: '100%',
                        paddingTop: "15px",
                        // paddingLeft: "30px",
                        paddingBottom: '30px',
                    }}
                ></TextField>
                <Button variant='contained' size='large'
                    sx={{
                        width: '20%',
                        color: 'white',
                        background: '#004d40',
                        right: '-40%',

                    }}>
                    SUBMIT
                </Button>
            </Container>

        </>
    )
}

export default GetTouch