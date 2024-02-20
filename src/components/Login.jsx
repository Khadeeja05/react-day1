import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <br /><br/><br/>
        <h1>Login Page</h1>
        <input placeholder="username"/>
        <br/>
        <input placeholder="password"/>
        <br/>
        <button>Submit</button>
        <br /><br /><br />
        <Typography variant='h1'>Login Page</Typography>
        <br />
        <TextField variant="outlined" label="username"/>&nbsp;&nbsp;
        <br />
        <TextField variant='standard' label="username"/>
        <br /><br />
        <TextField variant='filled' label="username"/>
        <br /><br /><br />
        <Button variant='contained'>Submit</Button>
        <br /><br />
        <Button variant="outlined">Submit</Button>
        <br /><br />
        <Button variant="text">Submit</Button>
    </div>
  )
}

export default Login