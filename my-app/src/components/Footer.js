import "./Styles/Footer.css";
import {Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import IconButton from "@mui/material/IconButton";
import InstagramIcon from '@mui/icons-material/Instagram';




function Footer() {
    return (
        <div className="footer">
            <div className="top">
            </div>
            <div className="bottom">
                <div>
                    <Typography>
                        FLOT FASHION DEMO STORE DEMO STORE USA <br />
                        CALL US: 123-456-789 <br />
                        EMAIL US: SUPPORT@FLOT.COM
                    </Typography>
                </div>
                <div >
                    <Typography>
                        -ORDER ONLINE<br />
                        -CORPORATE DEALS <br />
                        -CUSTOMIZE AND SHOP BY OCCASION <br />
                        -PRODUCTION PROCESS <br />
                        -CONTACT US
                    </Typography>
                </div>
                <div>
                    <Typography>FOLLOW US AT</Typography>
                    <IconButton aria-label="delete">
                    <FacebookIcon />
                    </IconButton>
                    <IconButton aria-label="delete" disabled color="primary">
                    <InstagramIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}
export default Footer;