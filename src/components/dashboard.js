import Navbar from "./navbar"
import Footer from "./footer"
import {Elements} from "./elements"
import {Item} from "./item"
import { Box } from "@mui/material";
import { useState } from "react";

//mainpage
function Dashboard(){

    const [filtered_watches,filter_watches]=useState(Elements);   //holds list of all watches 

    return <>
        <Navbar homepage="1" filter={filter_watches}/>     {/*passed setter function of watch list to navbar, so that the sidebar can change it*/}
        <Box sx={{position:"relative",left:0,top:0,width:"100%",height:"4rem",color:"#000"}}></Box>
        {filtered_watches.map((i)=><Item key={i} color={i.color} title={i.title} txt={i.txt} show={i.show} img={i.img} fcolor={i.fcolor} price={i.price}/>)}
        {/* render watches */}
        <Footer/>
    </>
}

export default Dashboard;