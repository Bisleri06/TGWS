import {  useNavigate } from "react-router-dom";
import { useFormik} from "formik";
import { Button, TextField ,Box, Typography, Backdrop, IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Footer from "./footer";
import Navbar from "./navbar"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Close } from "@mui/icons-material";


function fill_rows(currState,dispatcher_rows,total){
    let rows=[];
    let total_val=0;

    for(let i in currState)
    {
        if(i==="itemCount")
            continue;
        
        rows.push({name:i,number:currState[i],price:currState[i]*60});
        total_val+=currState[i]*60;
    }

    dispatcher_rows(rows);
    total(total_val);
}
//convert selected cart list to tabular name and price format


function Payment(){

    const [paymentOpen,setpay]=useState(false);
    //razorpay window condition variable

    const OrderHandler=useDispatch();
    const navigate=useNavigate();
    const currState=useSelector(state=>state);

    //table data and total amt
    const [rows,editrows]=useState([]);
    const [total,edittotal]=useState(0);
    
    useEffect(()=>fill_rows(currState,editrows,edittotal),[currState]);
    //display cart and total amt

    const addressForm=useFormik({
        initialValues:{
            Name:'',
            Phone:'',
            Email:'',
            Address:''
        },
        onSubmit:values=>{
            console.log(values);
            setpay(true);
        },
    });//form handling along with payment window toggle


    return <>
        <Backdrop sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={paymentOpen}>
                <IconButton sx={{backgroundColor:"rgb(144, 202, 249)",position:"fixed",left:"auto",top:"5rem"}} onClick={()=>setpay(false)}><Close/></IconButton>
                <iframe title="payment" src="https://rzp.io/l/uKS3i8Q" height={"70%"} width={"70%"}/>
        </Backdrop>
        {/* razorpay window with close button */}

        <Navbar/>
        <Box sx={{position:"relative",left:0,top:0,width:"100%",height:"4rem",color:"#000"}}></Box>
        
        <Box sx={{ padding:"2rem" ,display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <form onSubmit={addressForm.handleSubmit} style={{display: 'grid',padding:0,margin:0,gap:10,maxWidth:"80%",maxHeight:"80%"}}>
                <Box sx={{position:"relative",left:0,top:0,width:"100%",height:"4rem",color:"#000"}}></Box>
                <TextField name="Name" id="Name" label="Name" type="text" {...addressForm.getFieldProps('Name')}></TextField>
                <TextField name="Phone" id="Phone" label="Phone" type="tel" {...addressForm.getFieldProps('Phone')}></TextField>
                <TextField name="Email" id="Email" label="Email" type="email" {...addressForm.getFieldProps('Email')}></TextField>
                <TextField name="Address" id="Address" label="Address" type="text" {...addressForm.getFieldProps('Address')}></TextField>
                <Button sx={{maxWidth:"8rem",margin:"auto"}} variant="contained" type="submit">Place Order</Button>
            </form>
            {/* user data input */}
            
            <Box sx={{ padding:"2rem" ,display: 'grid', gridTemplateRows: 'repeat(1, 1fr)' }}>
                
                <Button 
                    onClick={()=>{OrderHandler({type:'RST'}); navigate("/");}}
                    variant="contained" sx={{height:"3rem",width:"4rem",backgroundColor:"red",position:"fixed",right:0,marginRight:"2rem"}}><DeleteIcon/>
                </Button>
                {/* reset cart button */}

                <Typography variant="h4" sx={{fontFamily:"serif",margin:"2rem",marginLeft:0}}>Order Summary</Typography>

                {/* table for displaying selected items */}
                <TableContainer component={Paper}>
                <Table sx={{ width: 1 }}>
                    <TableHead>
                    <TableRow>
                        <TableCell>Model</TableCell>
                        <TableCell>Number</TableCell>
                        <TableCell>Price</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell >{row.number}</TableCell>
                        <TableCell sx={{fontWeight:"bold",color:"green"}} >+ ₹{row.price}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell sx={{fontWeight:"bold"}}>Total</TableCell>
                        <TableCell sx={{fontWeight:"bold"}}>₹{total}</TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
                </TableContainer>

            </Box>
        </Box>
        <Box sx={{position:"relative",left:0,top:0,width:"100%",height:"7rem",color:"#000"}}></Box>
        <Footer/>
    </>
}

export default Payment;