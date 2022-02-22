import { FilterAlt } from "@mui/icons-material"
import { Container, Typography ,TextField,Box,Select,MenuItem, Button} from "@mui/material"
import { useState } from "react";
import {Elements} from "./elements"
import BlockIcon from '@mui/icons-material/Block';


function Sidebar(props)
{
    const [watch_type,change_type]=useState("");
    const [min_price,change_min_price]=useState(0);
    const [max_price,change_max_price]=useState(0);
    const [brand,change_brand]=useState("");
    //filter variables

    function ResetFilter(){
        props.filter(Elements); //load entire watch list on reset
    }
    
    function FilterWatches()
    { 
        let watch_arr=Elements;
        let new_arr=[]
        console.log(watch_type,brand,min_price,max_price);
        

        //filter every watch with conditions
        for(let watch of watch_arr)
        {
            let con=1;      //becomes 0 if watch fails any filter condition

            if(watch_type && watch_type!==watch.type)
                con=0;
            
            if(brand && !watch.title.match(brand))
                con=0;

            let price=watch.price;

            price=price.replace("₹","");
            price=price.replace(",","");
            price=Number(price);

            console.log(price);
            if(min_price && max_price && (price>max_price || price<min_price))
                con=0;

            if(con)
                new_arr.push(watch);
        }

        console.log(new_arr);

        props.filter(new_arr);
        //change dashboard watch array to filtered array
    }

    
    return <Container sx={{background:"rgb(44,44,44)",color:"#FFF",height:"100%",width:"25rem",padding:"4rem"}}>
        <Typography variant="h2" fontWeight="bold" color={"#DFDFDF"}>
            Filters
        </Typography>
        <br/>
        
        <Typography color={"#DFDFDF"}>
            Price range
        </Typography>
        <br/>
        <Box sx={{ backgroundColor:"#DFDFDF",display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
        <TextField placeholder="PriceMin" type="currency" onChange={(e)=>{if(e) change_min_price(e.target.value)}}/>
        <TextField placeholder="PriceMax" type="currency" onChange={(e)=>{if(e) change_max_price(e.target.value)}}/>
        </Box>
        <br/>

        <Typography color={"#DFDFDF"}>
            Brand
        </Typography>
        <br/>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
        <TextField sx={{backgroundColor:"#DFDFDF"}} placeholder="Brand Name" type="currency" onChange={(e)=>{if(e) change_brand(e.target.value)}}/>
        </Box>
        <br/>

        <Typography color={"#DFDFDF"}>
            Type
        </Typography>
        <br/>
        <Box sx={{backgroundColor:"#DFDFDF",display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)' }}>
            <Select
                value=''
                onChange={(e)=>{if(e) change_type(e.target.value)}}
            >
            <MenuItem value={"Racing"}>Racing</MenuItem>
            <MenuItem value={"Party"}>Party</MenuItem>
            <MenuItem value={"Diving"}>Diving</MenuItem>
            </Select>
        </Box>
        <br/>
        
        <Button onClick={FilterWatches} variant="contained" sx={{backgroundColor:"#444"}}>
            <FilterAlt/>
        </Button>
        <Button onClick={ResetFilter} variant="contained" sx={{marginLeft:"1rem",backgroundColor:"#444"}}>
            <BlockIcon/>
        </Button>
    
    </Container>
}

export default Sidebar;