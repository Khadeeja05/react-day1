import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React,{useState} from 'react'

const Mapping = () => {
    

  var[names,setNames]=useState(
        ["Khadeeja","Shriya","Swetha"])
  return (
    <div>
        <br /><br />
        
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:'green',fontFamily:'cursive',fontSize:'20px'}}>Names</TableCell>
                    </TableRow>
                    </TableHead>
                <TableBody>
                    {names.map((value,index)=>{
                        return(
                            <TableRow>
                                <TableCell>{value}</TableCell>
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

export default Mapping