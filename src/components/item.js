import { Box, Container, Fade, Typography,Button} from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from "react-redux";


//component for every watch in list
function Item(props)
{
    const OrderHandler=useDispatch();
    const OrderContents=useSelector(state=>state);      //list of watches
    console.log(OrderContents);
    const style={
                padding:"3rem",
                paddingTop:"5rem",
                color:props.fcolor
                }

    return <Box sx={{width:"100%",left:0,margin:0,backgroundImage:props.color}}>
            <Fade in={props.show} timeout={2000}>
            <Box sx={{ padding:"2rem" ,display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                
                <img width="480px" height="500px" src={props.img} alt="Error"/>
                <Container sx={style}>

                <Typography variant="h3" fontFamily={"arail"}>{props.title}</Typography>
                <Typography sx={{paddingTop:"2rem"}}>{props.txt}</Typography>
                
                <Box sx={{margin:0,marginTop:"5rem",left:0,padding:0,display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',width:"10rem"}}>
                    <Typography variant="h4" sx={{fontFamily:"arial",paddingRight:"10rem"}}>{props.price}</Typography>
                    
                    <Button variant="contained" sx={{backgroundColor:"#444"}} onClick={()=>OrderHandler({type:'SUB',item:props.title})}><RemoveIcon/></Button>
                    {/* decrement watch count */}
                    <Typography sx={{padding:"1rem"}}>{OrderContents[props.title]?OrderContents[props.title]:0}</Typography>
                    {/* display watch count */}
                    <Button variant="contained" sx={{backgroundColor:"#444"}} onClick={()=>OrderHandler({type:'ADD',item:props.title})}><AddIcon/></Button>
                    {/* increment watch count */}
                </Box>
                
                </Container>
            </Box>
            </Fade>
        </Box>
}


export {Item}