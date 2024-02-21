import {Button,TextField} from '@mui/material'
import React,{useState} from 'react'

const Textmap = () => {
    var[input,setInput]=useState(["hey"])
    var[data,setData]=useState("")
        const inputHandle=(e)=>{
            console.log('on')
            setData(e.target.value)
            console.log("input",data)

        }
        const add=()=>{
            console.log("c")
            setInput([...input,data]);
            console.log("sub",input)
            setData("");
        }
    
  return (
    <div style={{marginTop:'50px'}}>
        <TextField variant='outlined' label="username" onChange={inputHandle} value={data}></TextField> 
        <br /><br />
        <Button variant="contained" onClick={add} >Submit</Button>
        <br /><br />
        <ul>
            {input.map((v,i)=>{
                return <li key={i}>{v}</li>
            })}
        </ul>
    </div>
  )
}

export default Textmap