import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';


//footer
function Footer(){

    return <AppBar sx={{position:"absolute",left:0,top:"auto",height:'15rem',padding:"3rem",backgroundColor:'#212121'}}>
            <Typography variant="h3" color={"#FFF"} fontFamily={"Helvetica"}>#TGWS</Typography>
            <br/>
            <Stack direction="row" spacing={1}>
            <PhoneIcon sx={{color:"#adadad"}}/>
            <Typography color={"#adadad"}> +91 99882 24433</Typography>
            </Stack>
            <br/>
            <Stack direction="row" spacing={1}>
            <MailIcon color={"#adadad"}/>
            <Typography color={"#adadad"}> example@gmail.com</Typography>
            </Stack>
            <br/>
            <Typography color={"#adadad"}> © 2022 TGWS. All rights reserved</Typography>
        </AppBar>
}

export default Footer;