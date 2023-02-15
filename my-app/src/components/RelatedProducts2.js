import Related1 from '../assets/brownie.png'
import Related2 from '../assets/brownie6.png'
import Related3 from '../assets/brownie3.png'
import { Typography } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import Container from '@mui/material/Container'

export default function RelatedProducts2(){
    const RelatedProducts=[
        {
            img:Related1,
            title:'CLASSIC FUDGE BROWNIE',
            subtitle:'RS 175'
        },
        {
            img:Related2,
            title:'FUDGY DATE BROWNIE',
            subtitle:'RS 300'
        },
        {
            img:Related3,
            title:'DOUBLE FUDGE BROWNIE',
            subtitle:'RS 150'
        }
    ]
    return (
        <Container sx={{
            paddingTop: "20px",
            display: { xs: 'none', md: 'flex' },
            flexGrow: 1,
            justifyContent: "space-around",
            paddingBottom: "50px",
            
        }}>
            {RelatedProducts.map((RelatedProducts) => (
                <Card key={RelatedProducts} sx={{
                    width: "300px",
                    padding: "20px",
                    borderRadius: '30px',
                    color: '#004d40',

                }} >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="230"
                            image={RelatedProducts.img}

                        />
                        <CardContent>
                            <Typography sx={{textAlign:'center',color:'#4E5D58'}} gutterBottom variant="h5" component="div">
                                {RelatedProducts.title}
                            </Typography>
                            <Typography sx={{textAlign:'center',color:'#4E5D58'}} variant="body2" color="text.secondary">
                                {RelatedProducts.subtitle}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))
            }
        </Container>
        
    )
}