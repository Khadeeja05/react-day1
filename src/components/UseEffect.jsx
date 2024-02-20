import { Button, Typography } from '@mui/material'
import React,{useState,useEffect}from 'react'

const UseEffect = () => {
    var[x,setX]=useState();
    const inputHandler=()=>{
    setX("React");
}
    const inputHandler1=()=>{
    setX("Angular");}
    const inputHandler2=()=>{
        setX("Next");
    }
    useEffect(()=>{
        inputHandler();
    },[])
  return (
    <div>
        <Typography variant="h3">Welcome to {x}</Typography>
        <br /><br />
        <Button variant="contained" onClick={inputHandler} color="primary">React</Button>
        <br /><br />
        <Button variant="contained" onClick={inputHandler1} color="secondary">Angular</Button>
        <br /><br />
        <Button variant="contained" onClick={inputHandler2} color="success">Next</Button>
    </div>
  )
}

export default UseEffect