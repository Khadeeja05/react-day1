import{Table,TableBody,TableCell,TableContainer,TableHead,TableRow} from '@mui/material'
import React,{useState} from 'react'

const Arraymap = () => {
    var[names,setNames]=useState(
    [{"sname":"Khadeeja","age":10},
    {"sname":"Shriya","age":24},
    {"sname":"Swetha","age":20}]
    )
    return (
      <div>
          <br /><br />
          
          <TableContainer>
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell style={{color:'green',fontFamily:'cursive',fontSize:'20px'}}>Names</TableCell>
                          <TableCell style={{color:'green',fontFamily:'cursive',fontSize:'20px'}}>Age</TableCell>
                      </TableRow>
                      </TableHead>
                  <TableBody>
                      {names.map((value,index)=>{
                          return(
                              <TableRow>
                                  <TableCell>{value.sname}</TableCell>
                                  <TableCell>{value.age}</TableCell>
                              </TableRow>
                          )
                      })}
                      <TableRow>
  
                      </TableRow>
                  </TableBody>
              </Table>
          </TableContainer>
          </div>)
  }
  
  export default Arraymap
  
