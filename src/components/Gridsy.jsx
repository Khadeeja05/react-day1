import { TextField,Grid } from '@mui/material'
import React from 'react'

const Gridsy = () => {
  return (
    <div style={{margin:'4%'}}>
        <Grid container spacing={2}>
        
        <Grid item xs={12} sm={6} md={4}>
        <TextField fullWidth variant="outlined" label="username"></TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <TextField fullWidth variant="outlined" label="username"></TextField>
        </Grid>
        </Grid>


    </div>
  )
}

export default Gridsy