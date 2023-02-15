import * as React from 'react';
import Box from '@mui/material/Box';

import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';

export default function BadgeVisibility() {
  const [count, setCount] = React.useState(1);
  return (
    <Box
      sx={{
        color: 'action.active',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          marginBottom: 2,
        },
        '& .MuiBadge-root': {
          marginRight: 4,
        },
      }}
    >
      <div>
        
        <ButtonGroup width='100%'>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button>
        
          {count}
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
          <Typography sx={{ paddingLeft: '10px' }}>(Min 12)</Typography>
        </ButtonGroup>
        <Typography sx={{ paddingTop: '15px',fontWeight:"bold",color:'black' }}>
          SELECT (ONE)
        </Typography>

          <ButtonGroup>
          <Button  variant='outlined' sx={{marginRight:'10px'}}>
            CREAMY CHICKEN
          </Button>
          </ButtonGroup>
          <Button variant='outlined' >
            CHICKEN AND CHEESE
          </Button>
          <ButtonGroup sx={{paddingTop:'10px'}}>
          <Button  variant='outlined' sx={{marginRight:'10px',
          }}>
           MUSHROOM AND CHEESE
          </Button>
          </ButtonGroup>
          <Button variant='outlined' >
            CHICKEN AND VEGETABLE
          </Button>
          <Container sx={{paddingTop:"30px",position:'relative',left:'350px'}}>
          <Button variant='contained' >
            ADD TO CART
          </Button>
          </Container>

      </div>

    </Box>
  );
}