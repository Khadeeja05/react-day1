import { TextField, Typography,Button } from '@mui/material'
import React,{useState} from 'react'

const Signup = () => {
    var[data,setData]=useState();
    const inputHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
        console.log(data);
    }
  return (
    <div>
        <Typography variant='h3'>Sign-up</Typography>
        <br />
        <TextField variant="outlined" name="username" onChange={inputHandler} label="username"/>
        <br /><br />
        <TextField variant="outlined" name="email" onChange={inputHandler} label="email"/>
        <br /><br />
        <TextField variant="outlined" name="password" onChange={inputHandler} label="password"/>
        <br /><br />
        <TextField variant="outlined"  name="address" onChange={inputHandler} label="address"/>
        <br /><br />
        <Button variant="outlined">Submit</Button>
    </div>
  )
}

export default Signup