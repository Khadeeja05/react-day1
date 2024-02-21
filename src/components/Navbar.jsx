import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                <Typography sx={{flexGrow:1}} align='left' variant='h6'>App</Typography>
                <Button><Link to='/' style={{color:"white"}}>Login</Link></Button>
                <Button><Link to='/sign' style={{color:'white'}}>Signup</Link></Button>
                
                <Button><Link to={'/t'} style={{color:'white'}}>Mapping</Link></Button>
                <Button><Link to={'/a'} style={{color:'white'}}>Arraymap</Link></Button>
                <Button><Link to={'/m'} style={{color:'white'}}>Textmap</Link></Button>
                <Button><Link to={'/p'} style={{color:'white'}}>Api</Link></Button>
                <Button><Link to={'/g'} style={{color:'white'}}>Gridsy</Link></Button>
                <Button><Link to={'/c'} style={{color:'white'}}>Cardz</Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar