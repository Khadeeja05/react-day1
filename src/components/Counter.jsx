import { Typography,Button } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var[count,setCount]=useState(0)
    const handleInput=()=>{
        setCount(count+1);
    }
    const handleInput1=()=>{
        setCount(count-1);
    }
    


  return (
    <div>
        <Typography variant="h3">Count:{count}</Typography>
        <br /><br /><br />
        <Button variant="contained" onClick={handleInput} color="success">+</Button>
        <Button variant="contained" onClick={handleInput1} color="error">-</Button>
    </div>
  )
}

export default Counter