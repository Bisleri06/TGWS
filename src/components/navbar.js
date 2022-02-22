import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import React from 'react';
import SideBar from "./Sidebar.js"
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router"
import { Home } from '@mui/icons-material';


function Navbar(props){
    const [sidebarOpen,setSide]=useState(false);
    const count=useSelector(state=>state.itemCount);
    //total item count

    const anchor='left';
    const navigate=useNavigate();

    return (<React.Fragment key={anchor}>
    <AppBar position="fixed" sx={{marginBottom:"5rem",left:0,top:0,height:'4rem',bottom:'auto',backgroundColor:'#FDFDFD'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 ,color:'#444'}}
            onClick={()=>setSide(true)}
            //open sidebar
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" align='center' fontFamily={"serif"} sx={{color:'black',margin:"auto"}}>
            THE GENTLEMAN'S WATCH SHOP
          </Typography>
          
          <Button variant="contained" onClick={()=>navigate("/")} sx={{backgroundColor:"#444",marginRight:"1rem"}}>  
            <Home/>
          </Button>
          {/* home button */}

          <Button variant="contained" onClick={()=>navigate("/payment")} sx={{backgroundColor:"#444"}}>  
            <Badge badgeContent={count} color="info">
              <ShoppingCartIcon/>
            </Badge>
          </Button>
          {/* payment button */}

        </Toolbar>
        </AppBar>
        {(props.homepage)?<Drawer
              anchor={anchor}
              open={sidebarOpen}
              onClose={()=>setSide(false)}
              sx={{color:"black"}}
          >
              <SideBar filter={props.filter}/>
          </Drawer>:undefined
        }
        {/* conditional render to open sidebar only on main page */}
        
    </React.Fragment>);
}

export default Navbar;