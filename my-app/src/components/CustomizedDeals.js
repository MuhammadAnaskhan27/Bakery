import { Container } from "@mui/system";
import React from "react";
import dealImage from "../assets/bake.png"
import { Box } from "@mui/system";
import { FormControl, Stack, TextField, Typography } from "@mui/material";
import Footer from "./Footer";

const CustomizedDeals = () => {
    return (
        <Box >
            <Container sx={{
                backgroundColor: "#C3EACF",
                display: { xs: "", md: "flex" },
                borderRadius: "25px",
                justifyContent: "space-around",
                padding: "25px"

            }}>
                <Box sx={{
                    padding: "25px",
                    display: { xs: "none", md: "flex" }
                }}>
                    <img src={dealImage} alt="" />
                </Box>
                <Box>
                    <Typography textAlign="center" sx={{
                        padding: "10px"
                    }}>CUSTOMIZED DEALS</Typography>
                    <Typography textAlign="center" sx={{
                        fontSize: "10px"
                    }}>FILL BELOW FORM TO MAKE YOUR CUSTOMIZED CORPORATE DEALS. OUR TEAM WILL GET BACK TO YOU<br />WITH RECOMMENDATIONS AS SOON AS POSSIBLE</Typography>
                    <FormControl fullWidth sx={{
                        padding: "5px"
                    }}>
                        <Stack component="form" spacing={2}
                        >
                            <TextField

                                variant="outlined"
                                size="small"
                                label="FULL NAME"
                                type="text"
                                required
                            />
                            <TextField

                                variant="outlined"
                                size="small"
                                label="EMAIL"
                                type="email"
                            />
                            <TextField

                                variant="outlined"
                                size="small"
                                label="PHONE"
                                type="number"
                                required
                            />
                            <TextField
                                variant="outlined"

                                label="MESSAGE"
                                type="text"
                                multiline
                                rows={8}
                                required
                            />
                        </Stack>
                    </FormControl>
                </Box>
            </Container >
           
            <Footer />
        </Box>
    )
}

export default CustomizedDeals