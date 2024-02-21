import React,{useEffect,useState} from 'react'

import axios from 'axios';
import { CardActions, Typography,CardContent,CardMedia,Button,Grid,Card} from '@mui/material';


const Cardz = () => {
    var[products,setProducts]=useState([]);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((response)=>{
        console.log(response)
        setProducts(response.data);
    
    })
    .catch((error)=>{console.log(error)})
},[])
  return (
    <div style={{margin:'4%'}}>
        <Grid container spacing={2}>
            {products.map((val,i)=>{
                return(
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{maxWidth:345}}>Lizards
             <CardMedia 
             sx={{height:140}}
             title={val.title}
             components="img"
             alt="green iguana"
             height="140"
             image={val.image}/>
             <CardContent>
                <Typography gutterBottom variant="h5" component="div">{val.title}</Typography>
                <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
                )
            })}
            </Grid>
            </div>
  )
        }


export default Cardz