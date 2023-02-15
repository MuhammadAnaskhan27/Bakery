import React, { useState } from 'react';
import Container from "@mui/material/Container";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Drawer } from '@mui/material';
import { IconButton } from '@mui/material';
import { Box } from "@mui/system";
function DrawerExample() {
    // const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Box>
            <IconButton onClick={handleClick}>
                <LocalMallIcon />
            </IconButton>

            <Drawer open={open} onClose={handleClick} style={{ width: '500px' }} anchor="right">

                <Container>
                    NOTHING IN  YOUR DRAWER
                </Container>
            </Drawer>

        </Box >
    );
}

export default DrawerExample;
